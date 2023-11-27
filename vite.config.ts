import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/app/components'),
      '@pages': path.resolve(__dirname, './src/app/pages'),
      '@store': path.resolve(__dirname, './src/app/store'),
      '@lib': path.resolve(__dirname, './src/app/lib'),
    },
  },
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  },
  plugins: [vue()],
})
