<template>
  <div class="d-flex align-items-center">
    <img v-for="item in 5" :src="`/icons/${item <= data ? 'star-full' : 'star'}.svg`" alt="star" />
  </div>
</template>
<script setup>
  defineProps(['data'])
</script>
<style scoped lang="scss">
  div > * {
    margin-left: 2.5px;
  }
</style>
