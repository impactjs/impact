import type { ImpactResult } from "@impacts/types/results";
import yaml from "yaml";
import { getVersion } from "./env.js" with { type: "macro" };

type WriteOptions = {
  outfile?: string;
  format?: string;
};

export async function write(result: ImpactResult, options: WriteOptions = {}) {
  const output = render(result, options.format);

  if (!options.outfile) {
    console.log(output);
    return;
  }

  await Bun.write(options.outfile, output);
}

function render(result: ImpactResult, format: string | undefined) {
  switch (format ?? "yaml") {
    case "json":
      return JSON.stringify(result);
    case "yaml":
      return yaml.stringify(result);
    case "html":
      return (
        html
          .replace(/__VERSION__/g, getVersion())
          // replace the __RESULT__ placeholder with the result (ensure escaping for quotes)
          .replace("__RESULT__", JSON.stringify(result).replace(/"/g, '\\"'))
      );
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
}

const html = `
<!doctype html>

<html>

<head>
    <meta charset="utf-8" />


    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />

    <meta name="theme-color" content="#000000" />

    <link rel="apple-touch-icon" href="/logo192.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=block" rel="preload"
        as="style" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=block" rel="stylesheet"
        rel="preload" crossorigin="anonymous" />

  <script>
      window.result = "__RESULT__";
  </script>
  <script type="module" crossorigin src="https://unpkg.com/@impacts/app/__VERSION__/dist/index.js"></script>
  <link rel="stylesheet" crossorigin href="https://unpkg.com/@impacts/app/__VERSION__/dist/index.css">
</head>

<body class="standalone">
    <div id="root" class="light"></div>
</body>

</html>
`;
