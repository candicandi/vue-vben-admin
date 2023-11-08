import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { type UserConfig } from 'vite';

const commonConfig: UserConfig = {
  server: {
    host: true,
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@vben/styles/shared";`,
      },
    },
  },
  plugins: [vue(), vueJsx()],
};

export { commonConfig };
