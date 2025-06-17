# CLI Usage

The Impact CLI provides a command-line interface for analyzing changes in your codebase.

## Basic Usage

```bash
impact run [options]
```

## Options

- `--cwd <cwd>`: Specify the current working directory (default: process.cwd())
- `-c, --config <config>`: Specify a custom config file
- `--log-level <level>`: Set the log level (default: "info")
- `-o, --outfile <outfile>`: Specify the output file
- `--format <format>`: Specify the output format (json or yaml)

## Examples

### Basic Analysis

```bash
impact run
```

### Custom Config File

```bash
impact run -c custom.impact.config.ts
```

### Output to File

```bash
impact run -o impact-report.json --format json
```

### Set Log Level

```bash
impact run --log-level debug
```

## Output Formats

Impact supports multiple output formats:

- `yaml`: YAML format (default)
- `json`: JSON format

The default format is YAML if not specified. The format can be set using the `--format` option or in the configuration file.

Example:

```bash
# Output as YAML (default)
impact run

# Output as JSON
impact run --format json
```

## Exit Codes

- `0`: Success
- `1`: Error occurred during execution

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
