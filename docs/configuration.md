# Configuration

Impact can be configured through a configuration file to customize its behavior.

## Configuration File

Create an `impact.config.ts` file in your project root:

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
    // Add your plugins here
  ],
  output: {
    format: 'json',
    directory: 'impact-reports'
  }
})
```

## Configuration Options

### entries

Define the paths to analyze in your codebase.

### plugins

Configure and enable plugins for additional functionality.

### output

Configure the output format and directory for reports. 