import { cac } from "cac";
import { version } from "../package.json";
const cli = cac("mycli");

cli
  .command("hello", "Say hello")
  .option("-n, --name <name>", "Your name")
  .action((options) => {
    console.log(`Hello ${options.name ?? "world"}!`);
  });

cli.help();

cli.version(version);

cli.parse();
