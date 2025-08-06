<template>
  <div class="container mb-142px">
    <div class="banner d-flex">
      <div class="d-flex flex-column titles">
        <span>{{ data?.title }}</span>
        <span>{{ data?.subTitle }}</span>
      </div>
      <NuxtLink
        v-if="data?.button?.isShow"
        :to="data?.button?.link"
        class="btn btn-dark-gray w-auto"
      >
        <span class="d-flex justify-content-center align-items-end title">
          <span>
            {{ data?.button?.title }}
          </span>
          <img src="/icons/angle-left.svg" alt="" />
        </span>
      </NuxtLink>
      <img class="align-self-end banner-image" :src="data?.image" alt="" />
    </div>
  </div>
</template>
<script setup>
  defineProps(['data'])
</script>

<style scoped lang="scss">
  .banner {
    background: #f7f7f7;
    border-radius: 15px;

    .titles {
      & :first-child {
        font-size: 35px;
      }
      & :last-child {
        font-size: 20px;
        color: #c0c0c0;
      }
    }
    @include mediaQuery(300px) {
      text-align: center;
      flex-direction: column;
      align-items: center;
      padding: 20px 20px 0;
      div {
        margin-bottom: 20px;
      }
      a {
        margin-bottom: 10px;
      }
      .banner-image {
        width: 100%;
      }
    }
    @include mediaQuery(576px) {
      .banner-image {
        width: auto;
      }
    }
    @include mediaQuery(1200px) {
      flex-direction: row;
      height: 122px;
      justify-content: space-around;
      align-items: center;
      padding: 10px 10px 0;
      div,
      a {
        margin-bottom: 0px;
      }
    }
  }
</style>
