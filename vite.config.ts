import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // Newly Added
  server: {
    port: 3000
  },
  plugins: [react()],
})
