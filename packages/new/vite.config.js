import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/new/',
  build: {
    outDir: '../../dist/new',
    emptyOutDir: true,
  },
})