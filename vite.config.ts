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
    port: 443,
    https: {
      key: fs.readFileSync('/root/ssl/private.key'),
      cert: fs.readFileSync('/root/ssl/jobtv_site.crt'),
      ca: fs.readFileSync('/root/ssl/jobtv_site.ca-bundle'),


    hmr: {
      overlay: false // Disabilita l'overlay dei warning nel browser
     }
    },
  },
});
