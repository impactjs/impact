import { logger } from "@impacts/logger";
import { confirmSignIn, fetchAuthSession, signIn } from "aws-amplify/auth";
import { authenticate, getDataClient } from "./data-client.js";
export async function login(secret: string) {
  const client = await getDataClient();

  // @ts-expect-error
  const { data: user } = await client.queries.findUserFromSecret({
    secret,
  });

  await signIn({
    username: user.userId,
    options: {
      authFlowType: "CUSTOM_WITHOUT_SRP",
    },
  });

  await confirmSignIn({
    challengeResponse: JSON.stringify({
      id: user.id,
      value: secret,
    }),
  });

  const session = await fetchAuthSession();

  const accessToken = session.tokens?.accessToken.toString();

  if (!accessToken) {
    logger.error("No access token found");
    process.exit(1);
  }

  authenticate("authorization", accessToken);
}
