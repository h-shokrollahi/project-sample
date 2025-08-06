<template>
  <div>
    <h2 v-if="data?.MainTitle">{{ data?.MainTitle }}</h2>
    <h3 v-if="data?.subTitle">{{ data?.subTitle }}</h3>
  </div>
</template>
<script setup>
  defineProps(['data'])
</script>
<style scoped lang="scss">
  h2 {
    font-size: 35px;
    color: black;
    @include mediaQuery(300px) {
      font-size: 26px;
    }
    @include mediaQuery(768px) {
      font-size: 35px;
    }
  }
  h3 {
    font-family: JuliusSansOne;
    color: #c0c0c0;
    font-size: 20px;
    letter-spacing: 50%;
    text-transform: uppercase;

    @include mediaQuery(300px) {
      font-size: 16px;
      margin-bottom: 40px;
    }
    @include mediaQuery(768px) {
      font-size: 20px;
    }
    @include mediaQuery(992px) {
      margin-bottom: 60px;
    }
  }
</style>
