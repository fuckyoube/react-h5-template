import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const { VITE_APP_MODE, VITE_PUBLIC_PATH } = loadEnv(mode, process.cwd());
  const isDev = VITE_APP_MODE === 'development';

  return {
    base: VITE_PUBLIC_PATH || '/',
    plugins: [
      react(),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        // prodEnabled: false,
        //   injectCode: `
        //   import { setupProdMockServer } from './mockProdServer';
        //   setupProdMockServer();
        // `,
        logger: true,
      }),
    ],
    server: {
      host: true,
      proxy: {
        '/dev-api': {
          target: 'https://polardaytest.postar.cn/v1', // 测试
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      sourcemap: isDev,
    },
  };
});
