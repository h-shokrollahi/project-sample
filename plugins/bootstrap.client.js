import { defineNuxtPlugin } from 'nuxt/app'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin(async (nuxtApp) => {
  return nuxtApp.provide('bootstrap', bootstrap)
})
