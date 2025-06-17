# Configuration

Impact uses a configuration file to define how it should analyze your codebase. The configuration is written in TypeScript and uses the `defineConfig` helper for type safety.

## Basic Configuration

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

## Plugin Configuration

Plugins can be configured in two ways:

1. Using the plugin name (for built-in plugins):

```typescript
export default defineConfig({
  entries: [...],
  plugins: [
    'git',
    'linear'
  ]
})
```

2. Using a plugin object (for custom configuration):

```typescript
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
```

## Example Configurations

### Basic Configuration with Git Plugin

```typescript
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
  plugins: ['git'],
  format: 'html',
  outfile: 'impact-report.html'
})
```

### Advanced Configuration with Multiple Plugins

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  entries: [
    {
      path: 'src',
      description: 'Source code'
    }
  ],
  plugins: [
    'git',
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
```

## Environment Variables

You can use environment variables in your configuration:

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

## TypeScript Support

The configuration is fully typed. You can use TypeScript's type checking to ensure your configuration is valid:

```typescript
import { defineConfig, type ImpactConfig } from '@impacts/config'

const config: ImpactConfig = {
  entries: [...]
}

export default defineConfig(config)
``` 