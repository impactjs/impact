# Plugins

Impact's plugin system allows you to extend its functionality in various ways. The plugin system is organized into three main categories:

## Plugin Types

### 1. Explore Plugins
Explore plugins analyze your codebase to understand dependencies and relationships between files. They help Impact understand how changes in one part of your codebase might affect other parts.

[Learn more about Explore Plugins](explore.md)

### 2. VCS Plugins
Version Control System (VCS) plugins integrate with your version control system to track changes, commits, and branches. They help Impact understand what has changed in your codebase.

[Learn more about VCS Plugins](vcs.md)

### 3. Augment Plugins
Augment plugins enhance the analysis by adding additional context and metadata to the results. They can integrate with external services and tools to provide more detailed information about changes.

[Learn more about Augment Plugins](augment.md)

## Using Plugins

Plugins can be configured in your `impact.config.ts` file:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  entries: [...],
  plugins: [
    // Using plugin name
    'git',
    'linear',
    
    // Using plugin object
    {
      type: 'git',
      options: {
        // plugin-specific options
      }
    }
  ]
})
```

## Built-in Plugins

Impact comes with several built-in plugins:

- `git`: Git integration for tracking changes
- `linear`: Linear integration for issue tracking
- `typescript`: TypeScript dependency analysis
- `javascript`: JavaScript dependency analysis

## Creating Custom Plugins

You can create custom plugins by implementing the appropriate plugin interface. Each plugin type has its own interface and requirements.

### Plugin Interface

```typescript
interface Plugin {
  type: string;
  options?: Record<string, unknown>;
}
```

### Example Custom Plugin

```typescript
const myCustomPlugin = {
  type: 'explore',
  options: {
    // plugin-specific options
  }
}

export default defineConfig({
  entries: [...],
  plugins: [myCustomPlugin]
})
```

For more detailed information about creating custom plugins, refer to the specific plugin type documentation. 