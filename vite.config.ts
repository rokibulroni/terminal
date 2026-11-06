import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/fuse.js')) return 'search';
          if (/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) return 'react';
          if (id.includes('node_modules/@radix-ui') || id.includes('node_modules/vaul')) return 'ui';
        },
      },
    },
  },
  ssr: {
    // Bundle everything except React so the prerenderer has no runtime resolution surprises.
    noExternal: ['lucide-react', 'sonner', 'vaul', /^@radix-ui\//, 'fuse.js', 'class-variance-authority', 'tailwind-merge', 'clsx'],
  },
});
