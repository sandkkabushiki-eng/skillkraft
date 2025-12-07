import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Three.js関連のライブラリを別チャンクに分割
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          // React関連を別チャンクに
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // チャンクサイズの警告制限を1MBに設定
    chunkSizeWarningLimit: 1000,
  },
})
