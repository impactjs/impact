# Explore Plugins

Explore plugins are responsible for analyzing your codebase to understand dependencies and relationships between files. They help Impact understand how changes in one part of your codebase might affect other parts.

## Built-in Explore Plugins

### TypeScript Plugin

The TypeScript plugin analyzes TypeScript files to understand:
- Import/export relationships
- Type dependencies
- Module dependencies
- Interface implementations

```typescript
export default defineConfig({
  entries: [...],
  plugins: ['typescript']
})
```

### JavaScript Plugin

The JavaScript plugin analyzes JavaScript files to understand:
- Import/export relationships
- Module dependencies
- Dynamic imports
- CommonJS require statements

```typescript
export default defineConfig({
  entries: [...],
  plugins: ['javascript']
})
```

## Creating Custom Explore Plugins

To create a custom explore plugin, you need to implement the following interface:

```typescript
interface ExplorePlugin {
  type: 'explore';
  options?: {
    // plugin-specific options
  };
  explore: (entry: string, cwd: string) => Promise<Set<string>>;
}
```

### Example Custom Explore Plugin

Here's an example of a custom explore plugin that analyzes Python files:

```typescript
const pythonExplorePlugin: ExplorePlugin = {
  type: 'explore',
  options: {
    extensions: ['.py']
  },
  async explore(entry: string, cwd: string) {
    const files = new Set<string>();
    // Implement Python file analysis logic
    return files;
  }
}

export default defineConfig({
  entries: [...],
  plugins: [pythonExplorePlugin]
})
```

## Plugin Options

### Common Options

- `extensions`: Array of file extensions to analyze
- `ignore`: Array of patterns to ignore
- `maxDepth`: Maximum depth for dependency analysis
- `followSymlinks`: Whether to follow symbolic links

### TypeScript Plugin Options

- `tsconfig`: Path to tsconfig.json
- `compilerOptions`: TypeScript compiler options
- `typeCheck`: Whether to perform type checking

### JavaScript Plugin Options

- `babelConfig`: Path to babel.config.js
- `presets`: Array of Babel presets
- `plugins`: Array of Babel plugins

## Best Practices

1. **Performance**: Keep your explore plugin efficient as it will be run frequently
2. **Caching**: Implement caching for better performance
3. **Error Handling**: Handle errors gracefully and provide meaningful error messages
4. **Logging**: Add appropriate logging for debugging
5. **Testing**: Write tests for your plugin

## Example Implementation

Here's a more complete example of a custom explore plugin:

```typescript
import { readFile } from 'fs/promises';
import { glob } from 'glob';
import path from 'path';

interface PythonExplorePluginOptions {
  extensions?: string[];
  ignore?: string[];
  maxDepth?: number;
}

const pythonExplorePlugin: ExplorePlugin = {
  type: 'explore',
  options: {
    extensions: ['.py'],
    ignore: ['**/__pycache__/**'],
    maxDepth: 10
  },
  async explore(entry: string, cwd: string) {
    const files = new Set<string>();
    const options = this.options as PythonExplorePluginOptions;
    
    try {
      // Find all Python files
      const pythonFiles = await glob('**/*.py', {
        cwd,
        ignore: options.ignore,
        maxDepth: options.maxDepth
      });
      
      // Analyze each file
      for (const file of pythonFiles) {
        const content = await readFile(path.join(cwd, file), 'utf-8');
        // Implement Python import analysis
        // Add dependent files to the set
      }
      
      return files;
    } catch (error) {
      console.error('Error in Python explore plugin:', error);
      return files;
    }
  }
} 