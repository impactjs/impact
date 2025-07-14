# Plugin API Test Suite

This directory contains comprehensive tests for the `@impacts/plugin-api` package using [Vitest](https://vitest.dev/).

## Test Structure

### Test Files

- **`setup.ts`** - Test setup and global mocks
- **`types.test.ts`** - Tests for plugin types, schemas, and validation
- **`utils.test.ts`** - Tests for utility functions and helpers
- **`orchestrator.test.ts`** - Tests for the PluginOrchestrator class
- **`integration.test.ts`** - Integration tests for complete plugin workflows

### Coverage Areas

#### 1. Plugin Types & Validation (`types.test.ts`)
- Plugin schema validation with Zod
- VCS update schema validation
- Plugin phase enumeration
- resolveId/load coupling validation

#### 2. Utility Functions (`utils.test.ts`)
- Plugin validation and coupling enforcement
- Hook execution measurement and timing
- Plugin filtering and grouping
- Execution summary generation
- Unique name validation

#### 3. Plugin Orchestrator (`orchestrator.test.ts`)
- Plugin registration and validation
- Hook execution pipeline (config → resolve/load → log → augment)
- Error handling and graceful failures
- Context management and state tracking
- Execution result collection

#### 4. Integration Tests (`integration.test.ts`)
- Complete plugin pipeline execution
- Mixed plugin types (config-only, resolve/load, log-only, augment-only)
- Complex dependency resolution scenarios
- Real-world workflow simulation (TypeScript + Git + Linear)
- Factory function testing

## Running Tests

### Prerequisites

Make sure you have the dependencies installed:

```bash
cd packages/plugin-api
pnpm install
```

### Test Commands

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

### Test Configuration

The test suite is configured with:

- **Environment**: Node.js
- **Test runner**: Vitest
- **Mocking**: Vitest's built-in mocking
- **Coverage**: V8 provider with text, JSON, and HTML reports
- **Global setup**: Logger mocking and test cleanup

## Test Patterns

### Mocking Strategy

The test suite uses comprehensive mocking for:

- **Logger**: Prevents console output during tests
- **Runtime**: Mocks file system and command execution
- **Plugin functions**: Uses `vi.fn()` for hook implementations

### Test Organization

Tests are organized using:

- **Descriptive test names**: Clear intention and expected behavior
- **Grouped test suites**: Related tests grouped with `describe` blocks
- **Setup/teardown**: Proper cleanup between tests
- **Realistic scenarios**: Integration tests simulate real-world usage

### Assertion Patterns

- **Function call verification**: Ensures hooks are called with correct parameters
- **State validation**: Verifies context and orchestrator state changes
- **Error handling**: Tests both success and failure scenarios
- **Performance validation**: Checks execution timing and results

## Example Test Scenarios

### Basic Plugin Registration
```typescript
it('should register a valid plugin', () => {
  const plugin: Plugin = {
    name: 'test-plugin',
    config: vi.fn(),
  };

  orchestrator.registerPlugin(plugin);
  expect(orchestrator.getPlugins()).toHaveLength(1);
});
```

### Hook Execution Pipeline
```typescript
it('should execute plugins in correct order', async () => {
  const executionOrder: string[] = [];
  
  const plugins = [
    { name: 'config-plugin', config: () => executionOrder.push('config') },
    { name: 'resolve-plugin', resolveId: () => executionOrder.push('resolve') },
    // ... more plugins
  ];

  await orchestrator.execute(initialFiles);
  expect(executionOrder).toEqual(['config', 'resolve', 'load', 'log', 'augment']);
});
```

### Error Handling
```typescript
it('should handle plugin execution errors gracefully', async () => {
  const failingPlugin = createPlugin({
    name: 'failing-plugin',
    resolveId: vi.fn().mockRejectedValue(new Error('Resolve failed')),
    load: vi.fn(),
  });

  await orchestrator.execute(initialFiles);
  
  const results = orchestrator.getExecutionResults();
  const failedResult = results.find(r => !r.success);
  expect(failedResult?.error?.message).toBe('Resolve failed');
});
```

## Contributing

When adding new tests:

1. Follow the existing test structure and naming conventions
2. Include both positive and negative test cases
3. Mock external dependencies appropriately
4. Add integration tests for new features
5. Ensure good test coverage for edge cases

## Debugging Tests

To debug failing tests:

1. Use `console.log` statements (they're mocked but can be enabled)
2. Run individual test files: `pnpm test types.test.ts`
3. Use the `--reporter=verbose` flag for detailed output
4. Check the HTML coverage report for untested code paths 