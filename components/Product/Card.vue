<template>
  <div class="product-card">
    <span class="discount">{{ data?.discount }}%</span>
    <img :src="data?.image" :alt="data?.title" />
    <NuxtLink to="/" class="mb-22px">
      <p>{{ data?.title }}</p>
      <span>{{ data?.subTitle }}</span>
    </NuxtLink>
    <div>
      <div class="d-flex align-items-center justify-content-between">
        <BaseButton
          type="button"
          title="افزودن به سبد خرید"
          class="btn btn-dark-gray w-auto"
          :disabled="false"
          :isLoading="false"
          @onClickBtn=""
        />
        <div class="prices d-flex flex-column align-items-end justify-content-between">
          <span class="price">{{ data?.price }}</span>
          <span class="calculated-price">
            {{ data?.calculatedPrice }}
            <span class="unit">تومان</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  defineProps(['data'])
</script>
<style scoped lang="scss">
  .product-card {
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid #d2d2d2;
    border-radius: 15px;
    padding: 18px;
    background-color: white;
    margin: 5px;
    .discount {
      background: #000;
      color: white;
      border-radius: 10px;
      padding: 11px 4px;
      font-size: 17px;
      position: absolute;
      top: 17px;
      left: 15px;
      font-family: IranYekanRegular;
      line-height: 1;
    }

    img {
      margin-bottom: 30px;
    }
    p {
      margin-bottom: 2px;
      font-size: 22px;
    }
    span {
      font-size: 14px;
      font-family: MontserratRegular;
      color: #808080;
      margin-bottom: 22px;
    }
    button {
      font-size: 14px;
      @include mediaQuery(300px) {
        padding: 8px 20px;
      }
      @include mediaQuery(1400px) {
        padding: 8px 32px;
      }
    }
  }
  .prices {
    text-align: end;
    span {
      font-family: IranYekanRegular;
      margin-bottom: 0px;
    }
    .price {
      color: #858585;
      text-decoration: line-through;
      font-size: 15px;
    }
    .calculated-price {
      color: #1a1a1a;
      font-size: 17px;
    }
    .unit {
      color: #ababab;
      font-size: 13px;
      font-size: IBMPlexSansArabicLight;
    }
  }
</style>
