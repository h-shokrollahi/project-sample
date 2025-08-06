<template>
  <div class="container why-us mb-65px">
    <BaseTitle :data="{ MainTitle: 'چرا باید ما را انتخاب کنید؟', subTitle: 'Our features' }" />
    <div class="row align-items-center justify-content-between">
      <div v-for="(item, index) in data" :key="index" class="col-md-6 col-lg-3 mb-3 mb-lg-0">
        <WhyUsCard :data="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
  import WhyUsCard from '@/components/HomePage/WhyUs/Card.vue'
  defineProps(['data'])
</script>
