<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
  import { useHead } from '#imports'

  useHead({
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl'
    }
  })
</script>
