<template>
  <div class="input-group">
    <select class="inputAnimation" name="" id="" @change="changeEl">
      <option class="d-none" value=""></option>
      <option value="1">آمازون</option>
      <option value="2">علی بابا</option>
    </select>
    <label>{{ label }}</label>
  </div>
</template>
<script setup>
  defineProps({
    type: { type: String, default: 'text' },
    label: String,
    placeholder: String
  })

  const changeEl = (e) => {
    console.log(e.target)
    if (e.target.value) e.target.classList.add('has-content')
    else e.target.classList.remove('has-content')
  }
</script>
<style scoped lang="scss">
  .input-group {
    position: relative;
    border: 1px solid #d2d2d2;
    border-radius: 13px;
    padding: 15px 30px;
    height: 60px;
    @include mediaQuery(300px) {
      font-size: 20px;
    }
    @include mediaQuery(1200px) {
      font-size: 22px;
    }
  }
  select {
    color: #000;
    width: 100%;
    border: none;
    background-color: white;
  }
  option {
    background-color: white;
  }
  :focus {
    outline: none;
  }
  .inputAnimation {
    border: 0;
    background-color: transparent;
  }

  .inputAnimation ~ label {
    position: absolute;
    right: 32px;
    top: 14px;
    color: #000;
    transition: 0.3s;
    z-index: -1;
    background-color: transparent;
  }
  .inputAnimation:focus ~ label,
  .has-content.inputAnimation ~ label {
    top: -14px;
    padding: 0 10px;
    right: 20px;
    font-size: 17px;
    color: #bfbfbf;
    background-color: white;
    transition: 0.3s;
    z-index: 0;
  }
</style>
