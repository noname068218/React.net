import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    // Proxy configuration to forward API requests to backend
    // This avoids CORS and SSL certificate issues in development
    proxy: {
      '/api': {
        target: 'https://localhost:5001',
        changeOrigin: true,
        secure: false, // Ignore SSL certificate errors for development
      },
    },
  },
  plugins: [react()],
});
