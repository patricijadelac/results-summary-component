// https://vite.dev/config/

import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// Path to the global SCSS file
const scssPath = path.resolve(__dirname, './src/styles/lib.scss');

export default defineConfig({
  css: {
    modules: {
      localsConvention: 'dashesOnly', // Ensures class names follow the dashes-only convention
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${scssPath}" as *;`, // Simplified and more maintainable
      },
    },
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/images/*', // Copies all images
          dest: 'assets/images', // Places them in the 'dist/assets/images' directory
        },
      ],
    }),
  ],
  base: '/results-summary-component/',
});
