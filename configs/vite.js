export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/assets/scss/_variable.scss" as *; @use "~/assets/scss/_mixins.scss" as *;'
      }
    }
  }
}
