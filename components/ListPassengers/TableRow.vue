<template>
  <tr class="passenger row align-items-center mx-2 mx-sm-0 cursor-pointer">
    <td class="col-lg-3 mb-2 mb-lg-0">
      <div class="d-flex align-items-center">
        <img class="ms-2 ms-lg-4 passenger-image" :src="data?.image" :alt="data?.fullName" />
        <div>
          <span>{{ data?.fullName }}</span>
          <Rateing :data="data?.rate" />
        </div>
      </div>
    </td>
    <td class="col-md-6 col-lg-3 mb-2 mb-lg-0">
      <span class="time">
        <span> HOUR : </span>
        {{ data?.time?.hour }}
      </span>
    </td>
    <td class="col-md-6 col-lg-3 mb-2 mb-lg-0">
      <span class="time">
        <span> DATE : </span>
        {{ data?.time?.date }}
      </span>
    </td>
    <td class="col-lg-2 mb-2 mb-lg-0">
      <div class="d-flex align-items-center path">
        <span>{{ data?.origin }}</span>
        <img class="mx-2 mx-lg-3" src="/icons/angle-left.svg" alt="angle-left" />
        <span>{{ data?.destination }}</span>
      </div>
    </td>
  </tr>
</template>
<script setup>
  defineProps(['data'])
</script>
<style scoped lang="scss">
  .passenger {
    border: 1px solid #acacac;
    border-radius: 20px;
    margin-bottom: 10px;
    padding: 7px 0;
    .passenger-image {
      width: 65px;
      height: 65px;
      border: 1px solid green;
      border-radius: 14px;
    }
    span {
      font-family: MontserratRegular;
      color: black;
      @include mediaQuery(300px) {
        font-size: 17px;
      }
      @include mediaQuery(1200px) {
        font-size: 20px;
      }
    }
    .time {
      border-radius: 9px;
      background-color: #f4f4f4;
      padding: 4px 17px;
      @include mediaQuery(300px) {
        font-size: 16px;
      }
      @include mediaQuery(1200px) {
        font-size: 17px;
      }
      span {
        font-size: 17px;
        color: #a4a4a4;
      }
    }
    .path {
      span {
        border-radius: 9px;
      }
      & :first-child {
        padding: 0px 16px;
        background-color: black;
        color: white;
      }
      & :last-child {
        padding: 0px 16px;
        background-color: #f4f4f4;
      }
    }
  }
</style>
