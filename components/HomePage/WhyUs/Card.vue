<template>
  <div class="why-us-card d-flex justify-content-start align-items-center">
    <img class="ms-3 ms-lg-2 ms-xl-3" :src="data?.image" alt="why-us" />
    <div>
      <p class="sub-title">{{ data?.subTitle }}</p>
      <p class="main-title">{{ data?.mainTitle }}</p>
    </div>
  </div>
</template>
<script setup>
  defineProps(['data'])
</script>
<style scoped lang="scss">
  .why-us-card {
    background-color: #f9f9f9;
    border-radius: 16px;
    @include mediaQuery(300px) {
      padding: 15px 25px;
    }
    @include mediaQuery(992px) {
      padding: 20px 10px;
    }
    @include mediaQuery(1200px) {
      padding: 25px 20px;
    }
    @include mediaQuery(1600px) {
      padding: 25px 35px;
    }
    .sub-title {
      font-family: IBMPlexSansArabicThin;
      margin-bottom: 4px;
      font-size: 18px;
    }
    .main-title {
      margin-bottom: 0;
      @include mediaQuery(300px) {
        font-size: 22px;
      }
      @include mediaQuery(992px) {
        font-size: 18px;
      }
      @include mediaQuery(1200px) {
        font-size: 22px;
      }
    }
  }
</style>
