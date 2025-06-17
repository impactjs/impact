# CLI Usage

The Impact CLI provides a command-line interface for analyzing changes in your codebase.

## Basic Usage

```bash
impact [options]
```

## Options

- `--cwd <cwd>`: Specify the current working directory (default: process.cwd())
- `-c, --config <config>`: Specify a custom config file
- `--log-level <level>`: Set the log level (default: "info")
- `--branch <branch>`: Specify the branch to analyze
- `-o, --outfile <outfile>`: Specify the output file
- `--format <format>`: Specify the output format (json, yaml, or html)

## Examples

### Basic Analysis

```bash
impact
```

### Analyze Specific Branch

```bash
impact --branch feature/new-feature
```

### Custom Config File

```bash
impact -c custom.impact.config.ts
```

### Output to File

```bash
impact -o impact-report.json --format json
```

### Set Log Level

```bash
impact --log-level debug
```

## JSON Configuration

Impact supports configuration through a JSON file. This is useful for environments where TypeScript is not available or when you prefer a simpler configuration format.

### Basic JSON Configuration

Create an `impact.config.json` file:

```json
{
  "entries": [
    {
      "path": "src",
      "description": "Source code"
    }
  ]
}
```

### Advanced JSON Configuration

```json
{
  "entries": [
    {
      "path": "src",
      "description": "Source code"
    },
    {
      "path": "tests",
      "description": "Test files"
    }
  ],
  "plugins": [
    "git",
    {
      "type": "linear",
      "options": {
        "apiKey": "env:LINEAR_API_KEY",
        "teams": ["ENG", "DESIGN"]
      }
    }
  ],
  "outputPriority": ["critical", "high", "medium", "low"],
  "format": "json",
  "outfile": "impact-report.json"
}
```

### Environment Variables in JSON

You can use environment variables in your JSON configuration using the `${VARIABLE_NAME}` syntax:

```json
{
  "plugins": [
    {
      "type": "linear",
      "options": {
        "apiKey": "env:LINEAR_API_KEY",
        "username": "env:LINEAR_USERNAME"
      }
    }
  ]
}
```

### JSON Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| `entries` | Array | List of entry points to analyze | Yes |
| `plugins` | Array | List of plugins to use | No |
| `outputPriority` | Array | Priority levels for output | No |
| `format` | String | Output format (json, yaml, html) | No |
| `outfile` | String | Output file path | No |

### Entry Configuration

```json
{
  "entries": [
    {
      "path": "src",
      "description": "Source code"
    }
  ]
}
```

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `path` | String | Path to the entry point | Yes |
| `description` | String | Description of the entry point | Yes |

### Plugin Configuration

```json
{
  "plugins": [
    "git",
    {
      "type": "linear",
      "options": {
        "apiKey": "env:LINEAR_API_KEY",
        "teams": ["ENG", "DESIGN"]
      }
    }
  ]
}
```

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `type` | String | Plugin type | Yes |
| `options` | Object | Plugin-specific options | No |

## Output Formats

Impact supports multiple output formats:

- `json`: JSON format (default)
- `yaml`: YAML format
- `html`: HTML report with visual representation

## Exit Codes

- `0`: Success
- `1`: Error occurred during execution

## Environment Variables

- `IMPACT_CONFIG`: Path to the config file
- `IMPACT_LOG_LEVEL`: Set the log level 