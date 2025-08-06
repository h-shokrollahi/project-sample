<template>
  <div class="container">
    <div class="search row align-items-center">
      <div class="col-lg-3 mb-3 mb-lg-0">
        <FormSelect type="text" label="مرجع" placeholder="" />
      </div>
      <div class="col-lg-6 mb-3 mb-lg-0">
        <FormInput type="text" label="لینک محصول مورد نظر" placeholder="" />
      </div>
      <div class="col-lg-3 mb-3 mb-lg-0">
        <BaseButton
          type="button"
          title=""
          class="btn btn-primary"
          :disabled="false"
          :isLoading="false"
          @onClickBtn="search"
        >
          <template #title>
            <div class="d-flex justify-content-center align-items-end title">
              <span>بررســــــــــــــــــــــی</span>
              <img src="/icons/angle-left.svg" alt="angle-left" />
            </div>
          </template>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<script setup>
  function search(e) {
    // console.log(e, 'e')
  }
</script>
<style scoped lang="scss">
  .search {
    position: relative;
    top: -68px;
    z-index: 1;
    background: white;
    box-shadow: 20px 20px 40px 0px #0000000d;
    border-radius: 15px;
    @include mediaQuery(300px) {
      margin: 0px -5px;
      padding: 14px 5px;
    }
    @include mediaQuery(768px) {
      margin-right: 44px;
      margin-left: 0px;
      padding: 37px 37px 37px 43px;
    }
    @include mediaQuery(992px) {
      padding: 20px 10px;
    }
    @include mediaQuery(1400px) {
      padding: 25px 15px;
    }
    @include mediaQuery(1600px) {
      padding: 37px 37px 37px 43px;
    }
  }
</style>
