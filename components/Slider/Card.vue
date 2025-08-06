<template>
  <div class="slider row justify-content-between align-items-lg-center">
    <div class="col-10 col-lg-6 mt-5 mt-lg-0">
      <img src="/images/slider/2.png" class="w-100" alt="slider" />
    </div>
    <div
      class="text col-10 col-md-6 col-lg-4 col-xl-3 offset-0 offset-lg-1 offset-xl-2 mx-auto mx-lg-auto"
    >
      <p>ارسال سریع کالا ها</p>
      <p>با تضمین سلامت کالا</p>
      <NuxtLink class="btn btn-secondary" to="/">بیشتر بدانید</NuxtLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .slider {
    background-size: cover;
    background-repeat: no-repeat;
    height: 773px;
    position: relative;
    background: linear-gradient(101deg, #ffffff 0.17%, #eeeeee 100%);

    .text {
      & :first-child {
        font-size: 48px;
        margin-bottom: 10px;
      }
      & :nth-child(2) {
        font-size: 30px;
        color: #2e2e2e;
        font-family: IBMPlexSansArabicExtraLight;
        margin-bottom: 16px;
      }
      .btn {
        padding: 8px 30px 9px;
      }
    }
  }
</style>
