/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  root: 'src',
  build: {
    minify: 'terser', // Ensure you're using Terser for minification
    terserOptions: {
      mangle: {
        reserved: ['ic'], // Add 'ic' to the list of reserved names
      },
      compress: {
        global_defs: {
          ic: "window.someOtherICVariableName"
        },
      },
    },
    rollupOptions: {
      output: {
        manualChunks: () => 'dapp.js',
        entryFileNames: `[name].js`, // for entry JS files
        chunkFileNames: `[name].js`, // for chunk JS files
        assetFileNames: `[name].[ext]` // for asset files like images and fonts
      },
    },
    outDir: '../../assets/dist',
    emptyOutDir: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4943',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    environment('all', { prefix: 'CANISTER_' }),
    environment('all', { prefix: 'DFX_' }),
    
  ],
  test: {
    environment: 'jsdom',
    setupFiles: 'setupTests.ts',
    cache: { dir: '../node_modules/.vitest' },
  },
});
