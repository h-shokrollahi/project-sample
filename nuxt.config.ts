// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import vite from './configs/vite'
import head from './configs/head'
import modules from './configs/modules'
import runtimeConfig from './configs/runtime-config'
import css from './configs/css'

export default defineNuxtConfig({
  app: {
    head
  },
  css,
  vite,
  modules,
  runtimeConfig,
  imports: { autoImport: false },
  alias: {
    '@/': './'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
