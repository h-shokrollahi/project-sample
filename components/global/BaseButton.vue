<template>
  <button
    :class="class"
    v-on="type === 'button' ? { click: handleClick } : {}"
    :disabled="isLoading || disabled"
  >
    <template v-if="title">
      {{ title }}
    </template>
    <slot v-if="$slots.title" name="title"></slot>
  </button>
</template>
<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: 'button'
    },
    title: String,
    class: String,
    disabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  })

  const emit = defineEmits(['onClickBtn'])
  function handleClick(e) {
    e.preventDefault()
    emit('onClickBtn', e)
  }
</script>
