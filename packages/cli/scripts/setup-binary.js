import { chmodSync, existsSync, renameSync, createWriteStream } from "node:fs";
import https from "node:https";
import { join } from "node:path";

import { version } from "../package.json";

const { platform, arch } = process;

const binaryUrl = `https://github.com/impactjs/impact/releases/download/cli@v${version}/${platform}-${arch}`;
const dest = join(process.cwd(), "bin", "impact");

https
  .get(binaryUrl, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Failed to download binary: ${res.statusCode}`);
      process.exit(1);
    }

    const stream = createWriteStream(dest);
    res.pipe(stream);
    stream.on("finish", () => {
      stream.close(() => {
        chmodSync(dest, 0o755);
        console.log(`Binary downloaded to ${dest}`);
      });
    });
  })
  .on("error", (err) => {
    console.error(`Error downloading binary: ${err.message}`);
    process.exit(1);
  });
