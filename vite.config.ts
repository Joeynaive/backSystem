import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport from 'vite-plugin-style-import';
import path from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve:{
    alias:{
    '@':path.resolve('src')
    }
  },
  server: {
    host: true,
    // port: 3000,
  },
  plugins: [
    react(),
    // antd less 按需加载
    styleImport({
      libs: [{
        libraryName: 'antd',
        esModule: true,
        resolveStyle: name => `antd/es/${name}/style`,
      }],
    }),
  ],
});
