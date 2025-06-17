# Plugins

Impact provides a plugin system that allows you to extend its functionality.

## Available Plugins

- [Explore Plugins](explore.md): Analyze and explore your codebase
- [VCS Plugins](vcs.md): Version control system integration
- [Augment Plugins](augment.md): Additional analysis and reporting features

## Using Plugins

To use a plugin, add it to your configuration:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  plugins: [
    // Add your plugins here
  ]
})
```

## Creating Plugins

You can create your own plugins by implementing the Impact plugin interface. See the documentation for each plugin type for more details. 