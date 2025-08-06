<template>
  <table class="w-100">
    <thead v-if="$slots.head">
      <slot name="head"></slot>
    </thead>
    <tbody v-if="$slots.body">
      <slot name="body"></slot>
    </tbody>
    <tfoot v-if="$slots.foot">
      <slot name="foot"></slot>
    </tfoot>
  </table>
</template>
