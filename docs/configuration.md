# Configuration

Impact can be configured through configuration files to customize its behavior.

## Project Configuration

Create an `impact.config.ts` file in your project root:

```typescript
import { defineConfig } from '@impacts/config'

export default defineConfig({
  id: 'my-project', // Optional project identifier
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

## Global Configuration

For authentication and global settings, create a global configuration file at `~/.config/impact/config.json`:

```json
{
  "secret": "your-authentication-secret",
  "pluginAuth": {
    "plugin-name": "plugin-auth-token"
  }
}
```

### Global Configuration Options

- `secret`: Authentication secret for user identification
- `pluginAuth`: Plugin-specific authentication tokens (optional)

## Configuration Options

### id

Optional project identifier for tracking and organization.

### entries

Define the paths to analyze in your codebase.

### plugins

Configure and enable plugins for additional functionality.

### output

Configure the output format and directory for reports.

## Authentication

Some Impact features require authentication. The CLI will automatically use the global configuration for authentication when needed. Use the `whoami` command to verify your authentication status:

```bash
npx impact whoami
``` 