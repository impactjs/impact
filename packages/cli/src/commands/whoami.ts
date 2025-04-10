import { logger } from "@impacts/logger";
import { createRuntime } from "@impacts/runtime-bun";
import { globalImpactconfigSchema } from "@impacts/types/config";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { login } from "../utils/login.js";

type WhomaiOptions = {
  //  ignore
  ignore?: string;
};

export async function whoami(_options: WhomaiOptions) {
  const runtime = createRuntime();
  const globalConfigPath = `${process.env.HOME}/.config/impact/config.json`;
  if (!runtime.fs.exists(globalConfigPath)) {
    logger.error("No global config found at ~/.config/impact/config.json");
    process.exit(1);
  }
  const content = await runtime.fs.read(globalConfigPath);
  const result = globalImpactconfigSchema.safeParse(JSON.parse(content));
  if (!result.success) {
    logger.error("Invalid global config");
    logger.error(result.error.toString());
    process.exit(1);
  }
  const config = result.data;
  if (!config.secret) {
    logger.error("No secret found in global config");
    process.exit(1);
  }
  const secret = config.secret;

  await login(secret);
  const user = await getCurrentUser();
  const attributes = await fetchUserAttributes();

  if (!user) {
    logger.error("No user found");
    process.exit(1);
  }
  console.log("Authenticated as: ", attributes.email);
}
