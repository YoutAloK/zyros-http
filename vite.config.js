import { defineConfig } from 'vite';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.js',
      name: 'Zyros',
      fileName: (format) => `zyros.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['axios'],
      plugins: [peerDepsExternal()],
      output: {
        globals: {
          axios: 'axios'
        }
      }
    }
  }
});
