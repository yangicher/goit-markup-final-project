import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',   // 👈 Ensures Vite knows where `index.html` is
  build: {
    outDir: '../dist',  // 👈 Ensures the build output goes to `/dist`
  }
});
