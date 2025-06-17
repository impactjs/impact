# Configuration

Impact uses a configuration file to define how it should analyze your codebase. The configuration can be written in either TypeScript or JSON format.

## Basic Configuration

### TypeScript Configuration

Create an `impact.config.ts` file in your project root:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  entries: [
    {
      path: 'src',
      description: 'Source code'
    }
  ]
})
```

### JSON Configuration

Create an `impact.config.json` file in your project root:

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

## Configuration Options

### Required Options

- `entries`: Array of entry points to analyze
  - `path`: Path to the entry point
  - `description`: Description of the entry point

### Optional Options

- `plugins`: Array of plugins to use
- `outputPriority`: Array of strings defining output priority
- `outfile`: Default output file path
- `format`: Default output format (json, yaml, or html)
- `branch`: Branch to analyze
- `ignore`: Array of paths to ignore
- `primary`: Array of primary paths to analyze

## Plugin Configuration

Plugins can be configured in two ways:

1. Using a plugin object with type and options:

```typescript
// TypeScript
export default defineConfig({
  entries: [...],
  plugins: [
    {
      type: 'git',
      options: {
        // plugin-specific options
      }
    }
  ]
})

// JSON
{
  "entries": [...],
  "plugins": [
    {
      "type": "git",
      "options": {
        // plugin-specific options
      }
    }
  ]
}
```

2. Using a tuple with plugin name and options:

```typescript
// TypeScript
export default defineConfig({
  entries: [...],
  plugins: [
    ['git', {}],
    ['linear', {
      apiKey: process.env.LINEAR_API_KEY
    }]
  ]
})

// JSON
{
  "entries": [...],
  "plugins": [
    ["git", {}],
    ["linear", {
      "apiKey": "env:LINEAR_API_KEY"
    }]
  ]
}
```

The plugin configuration is validated using Zod schemas to ensure type safety. Each plugin must either be a full plugin object or a tuple containing the plugin name and its options.

## Example Configurations

### Basic Configuration with Git Plugin

```typescript
// TypeScript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  entries: [
    {
      path: 'src',
      description: 'Source code'
    },
    {
      path: 'tests',
      description: 'Test files'
    }
  ],
  plugins: [['git', {}]],
  format: 'html',
  outfile: 'impact-report.html'
})

// JSON
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
  "plugins": [["git", {}]],
  "format": "html",
  "outfile": "impact-report.html"
}
```

### Advanced Configuration with Multiple Plugins

```typescript
// TypeScript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  entries: [
    {
      path: 'src',
      description: 'Source code'
    }
  ],
  plugins: [
    ['git', {}],
    {
      type: 'linear',
      options: {
        apiKey: process.env.LINEAR_API_KEY,
        teams: ['ENG', 'DESIGN']
      }
    }
  ],
  outputPriority: ['critical', 'high', 'medium', 'low'],
  format: 'json',
  outfile: 'impact-report.json'
})

// JSON
{
  "entries": [
    {
      "path": "src",
      "description": "Source code"
    }
  ],
  "plugins": [
    ["git", {}],
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

## Environment Variables

You can use environment variables in your configuration:

```typescript
// TypeScript
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

// JSON
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

## TypeScript Support

The configuration is fully typed. You can use TypeScript's type checking to ensure your configuration is valid:

```typescript
import { defineConfig } from '@impacts/config'
import type { ImpactConfig } from '@impacts/types'

const config: ImpactConfig = {
  entries: [...]
}

export default defineConfig(config)
```

Available types from `@impacts/types`:
- `ImpactConfig`: Main configuration type
- `BaseConfig`: Base configuration type
- `Entry`: Entry point type
- `PublicImpactConfig`: Public configuration type

## Runtime Selection

Impact supports multiple runtime environments:

### Node.js Runtime
The default runtime for Node.js environments. This is automatically selected when running in a Node.js environment.

### Bun Runtime
For Bun environments, Impact will automatically use the Bun runtime which provides better performance. To use the Bun runtime:

```typescript
import { createRuntime } from '@impacts/runtime-bun'

export default defineConfig({
  entries: [...],
  runtime: createRuntime()
})
```

The runtime selection affects:
- File system operations
- Process execution
- Performance characteristics

Choose the appropriate runtime based on your environment for optimal performance. 