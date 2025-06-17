# VCS Plugins

VCS (Version Control System) plugins integrate with your version control system to track changes, commits, and branches. They help Impact understand what has changed in your codebase.

## Built-in VCS Plugins

### Git Plugin

The Git plugin is the primary VCS plugin for Impact. It provides:
- Change detection
- Commit history analysis
- Branch comparison
- File status tracking

```typescript
export default defineConfig({
  entries: [...],
  plugins: ['git']
})
```

## Git Plugin Configuration

The Git plugin supports various configuration options:

```typescript
export default defineConfig({
  entries: [...],
  plugins: [
    {
      type: 'git',
      options: {
        branch: 'main',
        since: '1 week ago',
        ignorePatterns: ['**/*.md'],
        includePatterns: ['src/**/*'],
        maxCommits: 100
      }
    }
  ]
})
```

### Git Plugin Options

- `branch`: Base branch for comparison (default: 'main')
- `since`: Time range for analysis (e.g., '1 week ago', '2023-01-01')
- `ignorePatterns`: Array of glob patterns to ignore
- `includePatterns`: Array of glob patterns to include
- `maxCommits`: Maximum number of commits to analyze
- `followRenames`: Whether to follow file renames (default: true)
- `followSymlinks`: Whether to follow symbolic links (default: false)

## Creating Custom VCS Plugins

To create a custom VCS plugin, you need to implement the following interface:

```typescript
interface VCSPlugin {
  type: 'vcs';
  options?: {
    // plugin-specific options
  };
  files: (config: ImpactConfig, runtime: Runtime) => Promise<Set<string>>;
  updates: (files: Set<string>, runtime: Runtime) => Promise<Array<{
    id: string;
    title: string;
    author: string;
    timestamp: number;
    files: Array<{
      path: string;
      status: 'added' | 'modified' | 'deleted';
    }>;
  }>>;
}
```

### Example Custom VCS Plugin

Here's an example of a custom VCS plugin for SVN:

```typescript
const svnPlugin: VCSPlugin = {
  type: 'vcs',
  options: {
    repository: 'https://svn.example.com/repo',
    username: process.env.SVN_USERNAME,
    password: process.env.SVN_PASSWORD
  },
  async files(config, runtime) {
    const files = new Set<string>();
    // Implement SVN file listing logic
    return files;
  },
  async updates(files, runtime) {
    const updates = [];
    // Implement SVN update tracking logic
    return updates;
  }
}

export default defineConfig({
  entries: [...],
  plugins: [svnPlugin]
})
```

## Best Practices

1. **Authentication**: Handle authentication securely using environment variables
2. **Error Handling**: Implement robust error handling for network and VCS operations
3. **Caching**: Cache results when appropriate to improve performance
4. **Logging**: Add detailed logging for debugging
5. **Testing**: Write comprehensive tests for your plugin

## Example Implementation

Here's a more complete example of a custom VCS plugin:

```typescript
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

interface SVNPluginOptions {
  repository: string;
  username?: string;
  password?: string;
  branch?: string;
  since?: string;
}

const svnPlugin: VCSPlugin = {
  type: 'vcs',
  options: {
    repository: 'https://svn.example.com/repo',
    username: process.env.SVN_USERNAME,
    password: process.env.SVN_PASSWORD,
    branch: 'trunk',
    since: '1 week ago'
  },
  async files(config, runtime) {
    const files = new Set<string>();
    const options = this.options as SVNPluginOptions;
    
    try {
      // Construct SVN command
      const auth = options.username && options.password
        ? `--username ${options.username} --password ${options.password}`
        : '';
      
      // List files in repository
      const { stdout } = await execAsync(
        `svn list -R ${options.repository} ${auth}`
      );
      
      // Process file list
      stdout.split('\n').forEach(file => {
        if (file) {
          files.add(file);
        }
      });
      
      return files;
    } catch (error) {
      console.error('Error in SVN plugin:', error);
      return files;
    }
  },
  async updates(files, runtime) {
    const updates = [];
    const options = this.options as SVNPluginOptions;
    
    try {
      // Get SVN log
      const { stdout } = await execAsync(
        `svn log -v ${options.repository} --since "${options.since}"`
      );
      
      // Process log entries
      // Add update information to updates array
      
      return updates;
    } catch (error) {
      console.error('Error in SVN plugin:', error);
      return updates;
    }
  }
} 