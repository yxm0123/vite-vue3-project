import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';
import { viteMockServe } from "vite-plugin-mock"
export default defineConfig({
  resolve: {
    //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./src/mock",
      supportTs: true     //如果使用 js发开，则需要配置 supportTs 为 false
     })
  ],
  server: {
    port: 8088, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8088
    },
    // 设置 https 代理
    proxy: {
      '/v1': {
          target: '',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, '')
        }
      }
    }
})
