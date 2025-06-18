# CLI Usage

The Impact CLI provides a command-line interface for analyzing and tracking changes in your codebase.

## Basic Usage

```bash
npx impact [command] [options]
```

## Commands

### `run`

Run impact analysis on your codebase.

```bash
npx impact run [options]
```

**Options:**
- `-o, --outfile <outfile>`: Specify output file path
- `--format <format>`: Output format (json, yaml, html)
- `-c, --config <config>`: Use custom config file
- `--cwd <cwd>`: Use custom working directory

### `show-config`

Display the current configuration.

```bash
npx impact show-config [options]
```

**Options:**
- `-c, --config <config>`: Use custom config file
- `--cwd <cwd>`: Use custom working directory

### `whoami`

Show the currently authenticated user.

```bash
npx impact whoami
```

This command requires a global configuration file at `~/.config/impact/config.json` with authentication credentials.

## Global Options

- `-c, --config <config>`: Specify a custom config file path
- `--cwd <cwd>`: Use custom working directory (default: current directory)
- `--log-level <level>`: Set log level (default: info)

## Examples

```bash
# Run impact analysis with custom output
npx impact run --outfile results.json --format json

# Show current configuration
npx impact show-config

# Check authenticated user
npx impact whoami

# Use custom config file
npx impact run --config ./custom-impact.config.ts
```

For more detailed information about each command, use:

```bash
npx impact [command] --help
``` 