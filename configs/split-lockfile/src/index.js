#!/usr/bin/env node

import { createExportableManifest } from "@pnpm/exportable-manifest";
import { findWorkspaceDir } from "@pnpm/find-workspace-dir";
import {
  getLockfileImporterId,
  readWantedLockfile,
  writeWantedLockfile,
} from "@pnpm/lockfile-file";
import { pruneSharedLockfile } from "@pnpm/prune-lockfile";
import { readProjectManifest } from "@pnpm/read-project-manifest";
import { DEPENDENCIES_FIELDS } from "@pnpm/types";

import { renameSync } from "node:fs";
import path, { resolve } from "node:path";
import renameOverwrite from "rename-overwrite";

async function makeDedicatedLockfile() {
  const projectDir = process.cwd();
  const lockfileDir = await findWorkspaceDir(projectDir);

  const lockfile = await readWantedLockfile(lockfileDir, {
    ignoreIncompatible: false,
  });
  if (lockfile == null) {
    throw new Error("no lockfile found");
  }
  const baseImporterId = getLockfileImporterId(lockfileDir, projectDir);
  const allImporters = lockfile.importers;
  lockfile.importers = {};
  Object.assign(lockfile.importers, {
    ".": allImporters[baseImporterId],
    root: allImporters["."],
  });
  const currentImporter = allImporters[baseImporterId];
  for (const depField of DEPENDENCIES_FIELDS) {
    if (currentImporter[depField] == null) {
      continue;
    }
    for (const [, ref] of Object.entries(currentImporter[depField])) {
      if (ref.startsWith("link:")) {
        const id = getLockfileImporterId(
          lockfileDir,
          resolve(projectDir, ref.replace("link:", "")),
        );
        lockfile.importers[id] = allImporters[id];
      }
    }
  }
  const dedicatedLockfile = pruneSharedLockfile(lockfile);

  await writeWantedLockfile(projectDir, dedicatedLockfile);

  const { manifest, writeProjectManifest } =
    await readProjectManifest(projectDir);
  const publishManifest = await createExportableManifest(projectDir, manifest, {
    // Since @pnpm/make-dedicated-lockfile is deprecated, avoid supporting new
    // features like pnpm catalogs. Passing in an empty catalog object
    // intentionally.
    catalogs: {},
  });
  await writeProjectManifest(publishManifest);

  const modulesDir = path.join(projectDir, "node_modules");
  const tmp = path.join(projectDir, "tmp_node_modules");
  const tempModulesDir = path.join(projectDir, "node_modules/.tmp");
  let modulesRenamed = false;
  try {
    await renameOverwrite(modulesDir, tmp);
    await renameOverwrite(tmp, tempModulesDir);
    modulesRenamed = true;
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }

  if (modulesRenamed) {
    await renameOverwrite(tempModulesDir, tmp);
    await renameOverwrite(tmp, modulesDir);
  }
  await writeProjectManifest(manifest);
  renameSync(
    path.join(projectDir, "pnpm-lock.yaml"),
    path.join(projectDir, ".workspace-lock.yaml"),
  );
}

try {
  makeDedicatedLockfile();
} catch {
  process.exit(1);
}
