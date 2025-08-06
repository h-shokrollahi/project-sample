<template>
  <div class="container mb-65px">
    <BaseTitle
      :data="{
        MainTitle: 'از کدام کشورها می توانیم برای شما خرید کنیم.',
        subTitle: 'our passengers flights'
      }"
    />
    <div class="row align-items-center">
      <div v-for="(item, index) in data" :key="index" class="mb-3 mb-lg-0" :class="item?.col">
        <img class="w-100" :src="item?.image" :alt="item?.title" />
      </div>
    </div>
  </div>
</template>
<script setup>
  defineProps(['data'])
</script>
