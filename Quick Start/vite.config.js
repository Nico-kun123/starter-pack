import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginPurgeCss(), vue()],
  optimizeDeps: {
    include: ['vue']
  },
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // Кэширование и сжатие JS
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ПЕРЕМЕННЫЕ SCSS 👀
        additionalData: '@import "@/assets/_variables.scss";'
      }
    }
  }
})
