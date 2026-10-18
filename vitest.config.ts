import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  // Some tested modules import .tsx files (e.g. ilm-huruf/core.ts -> contexts/AbjadContext.tsx);
  // tsconfig keeps jsx: preserve for Next, so let the test transform (oxc) compile JSX.
  oxc: { jsx: { runtime: 'automatic' } },
  test: {
    environment: 'node',
    include: ['**/*.test.ts'],
    exclude: ['node_modules', '.next', 'docs/archive'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
