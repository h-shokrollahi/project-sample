<template>
  <div>
    <p>erorr page</p>
  </div>
</template>
<script setup>
import { useHead } from "#imports";

const props = defineProps({
  error: Object,
});

console.log("props.error", props.error);

useHead({
  title: "خطا | عنوان سایت",
});
</script>
