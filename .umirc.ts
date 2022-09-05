import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@winterchen',
  },

  routes: [
    {
      path: '/',
      redirect: '/home',
    },

    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Table',
      path: '/table',
      component: './Table',
    },
    {
      title: " ",
      path: "/success",
      component: "./Success",
    },
  ],
  // proxy: {
  //   // todo: 代理配置
  //   '/api': {
  //     target: 'http://localhost:8098/',
  //     changeOrigin: true,
  //     pathRewrite: { '^/api': '/api' },
  //   },
  // },
  npmClient: 'yarn',
  tailwindcss: {},
});
