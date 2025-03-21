import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
 server: {
    host: 'www.jobtv.site',
    port: 5173,

    hmr: {
      overlay: false // Disabilita l'overlay dei warning nel browser
     }
  
  },
});
