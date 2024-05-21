import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "node:url";
import handlebars from 'vite-plugin-handlebars';
import postcssNesting from 'postcss-nesting';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  plugins: [
    handlebars()
    ],
  resolve:{
    alias :{
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server:{
    port: 3000
  },
  
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ]
    }
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        register: resolve(__dirname, 'src/pages/register/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        chat: resolve(__dirname, 'src/pages/chat/index.html'),
        404: resolve(__dirname, 'src/pages/404/index.html'),
        500: resolve(__dirname, 'src/pages/500/index.html'),
      }
    }
  }
})
