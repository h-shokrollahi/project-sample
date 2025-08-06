<template>
  <div class="container mb-125px">
    <BaseTitle
      :data="{
        MainTitle: 'آفر های ويژه آمازون',
        subTitle: 'amazon SAles'
      }"
    />
    <Swiper
      :space-between="9"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :loop="true"
      :sliders-pre-view="4"
      :breakpoints="{
        300: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 4
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 4
        }
      }"
    >
      <SwiperSlide v-for="item in data" :key="item?.id">
        <ProductCard :data="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
  defineProps(['data'])
</script>
