# Getting Started

Welcome to Impact! This guide will help you get started with analyzing and tracking changes in your codebase.

## Installation

You can install Impact using your preferred package manager:

```bash
# Using npm
npm install @impacts/cli

# Using yarn
yarn add @impacts/cli

# Using pnpm
pnpm add @impacts/cli
```

## Authentication Setup

Some Impact features require authentication. Set up your global configuration:

1. Create the global config directory:
```bash
mkdir -p ~/.config/impact
```

2. Create a global configuration file at `~/.config/impact/config.json`:
```json
{
  "secret": "your-authentication-secret"
}
```

3. Verify your authentication:
```bash
npx impact whoami
```

## Quick Start

1. Create an `impact.config.ts` file in your project root:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  id: 'my-project', // Optional project identifier
  entries: [
    {
      path: 'src',
      description: 'Source code'
    }
  ]
})
```

2. Run Impact:

```bash
npx impact run
```

## Basic Usage

The Impact CLI provides several commands and options for customization:

```bash
# Basic analysis
npx impact run

# Custom config file
npx impact run -c custom.impact.config.ts

# Output to file
npx impact run -o impact-report.json --format json

# Show current configuration
npx impact show-config

# Check authenticated user
npx impact whoami

# Set log level
npx impact run --log-level debug
```

## Environment Variables

Impact supports various environment variables for configuration and authentication:

- `LINEAR_API_KEY`: API key for Linear integration
- `JIRA_USERNAME`: Username for Jira integration
- `JIRA_API_TOKEN`: API token for Jira integration
- `SVN_USERNAME`: Username for SVN integration
- `SVN_PASSWORD`: Password for SVN integration

Example configuration with environment variables:

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

## Next Steps

- Read the [Configuration Guide](/guide/configuration) to learn about available options
- Check out the [CLI Documentation](/guide/cli) for command-line tools
- Explore [Plugins](/plugins/) to extend functionality:
  - [Explore Plugins](/plugins/explore)
  - [VCS Plugins](/plugins/vcs)
  - [Augment Plugins](/plugins/augment)
- Learn about [Output Formats](/guide/output-formats) for your reports 