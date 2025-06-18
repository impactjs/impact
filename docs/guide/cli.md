# CLI Usage

The Impact CLI provides a command-line interface for analyzing changes in your codebase.

## Commands

### `run`

Run impact analysis on your codebase.

```bash
npx impact run [options]
```

**Options:**
- `-o, --outfile <outfile>`: Specify the output file
- `--format <format>`: Specify the output format (json, yaml, serve, impact)
- `-c, --config <config>`: Specify a custom config file
- `--cwd <cwd>`: Specify the current working directory (default: process.cwd())
- `--log-level <level>`: Set the log level (default: "info")

### `show-config`

Display the current configuration.

```bash
npx impact show-config [options]
```

**Options:**
- `-c, --config <config>`: Specify a custom config file
- `--cwd <cwd>`: Specify the current working directory

### `whoami`

Show the currently authenticated user.

```bash
npx impact whoami
```

This command requires a global configuration file at `~/.config/impact/config.json` with authentication credentials.

## Global Options

- `--cwd <cwd>`: Specify the current working directory (default: process.cwd())
- `-c, --config <config>`: Specify a custom config file
- `--log-level <level>`: Set the log level (default: "info")

## Examples

### Basic Analysis

```bash
npx impact run
```

### Custom Config File

```bash
npx impact run -c custom.impact.config.ts
```

### Output to File

```bash
npx impact run -o impact-report.json --format json
```

### Show Configuration

```bash
npx impact show-config
```

### Check Authentication

```bash
npx impact whoami
```

### Set Log Level

```bash
npx impact run --log-level debug
```

## Output Formats

Impact supports multiple output formats:

- `yaml`: YAML format (default)
- `json`: JSON format
- `serve`: Serve as JSON API on localhost:3630
- `impact`: Upload to Impact platform

The default format is YAML if not specified. The format can be set using the `--format` option or in the configuration file.

Example:

```bash
# Output as YAML (default)
npx impact run

# Output as JSON
npx impact run --format json

# Serve results on localhost:3630
npx impact run --format serve

# Upload to Impact platform
npx impact run --format impact
```

## Exit Codes

- `0`: Success
- `1`: Error occurred during execution
- `2`: Unknown error type

## Environment Variables

Impact supports environment variables for configuration and authentication. You need to provide these variables in your environment before running Impact.

### Common Environment Variables

- `LINEAR_API_KEY`: API key for Linear integration
- `JIRA_USERNAME`: Username for Jira integration
- `JIRA_API_TOKEN`: API token for Jira integration
- `SVN_USERNAME`: Username for SVN integration
- `SVN_PASSWORD`: Password for SVN integration

### Using Environment Variables

#### In TypeScript Configuration

```typescript
export default defineConfig({
  id: 'my-project',
  entries: [...],
  plugins: [
    {
      type: 'linear',
      options: {
        apiKey: process.env.LINEAR_API_KEY
      }
    }
  ]
})
```

#### In JSON Configuration

```json
{
  "id": "my-project",
  "entries": [...],
  "plugins": [
    {
      "type": "linear",
      "options": {
        "apiKey": "env:LINEAR_API_KEY"
      }
    }
  ]
}
```

Note: When using JSON configuration, environment variables must be prefixed with `env:` to be properly resolved. The actual environment variable values need to be set in your environment before running Impact.
