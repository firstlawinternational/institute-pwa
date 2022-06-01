import { defineNuxtConfig } from 'nuxt'

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
      images: {
        auth: process.env.IMAGE_AUTH || 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1908&q=80',
        logo: process.env.IMAGE_LOGO || '/img/logo.svg',
        logoLight: process.env.IMAGE_LOGO_LIGHT || '/img/logo-light.svg',
      },
    },
  },
})
