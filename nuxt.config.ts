import { defineNuxtConfig } from 'nuxt'
import appConfig from './app.config.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  auth: {
    // Options
  },
  buildModules: [
    [
      '@pinia/nuxt',
      {
        disableVuex: true,
      },
    ],
  ],
  modules: [
    [
      "@nuxtjs/axios", {
        proxyHeaders: false,
      }
    ],
    // '@nuxtjs/auth-next',
    '@nuxtjs/proxy',
    '@nuxtjs/tailwindcss'
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://localhost:80',
    },
  },
  runtimeConfig: {
    public: {
      app: appConfig,
    },
  },
  ssr: false,
})
