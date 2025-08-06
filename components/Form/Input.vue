<template>
  <div class="input-group">
    <input class="inputAnimation" :type="type" :placeholder="placeholder" @blur="blurEl" />
    <label>{{ label }}</label>
  </div>
</template>
<script setup>
  defineProps({
    type: { type: String, default: 'text' },
    label: String,
    placeholder: String
  })

  const blurEl = (e) => {
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
  input {
    color: #000;
    width: 100%;
    border: none;
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
    top: 14px;
    color: #000;
    transition: 0.3s;
    z-index: -1;
    background-color: transparent;
    @include mediaQuery(300px) {
      right: 10px;
    }
    @include mediaQuery(370px) {
      right: 32px;
    }
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
