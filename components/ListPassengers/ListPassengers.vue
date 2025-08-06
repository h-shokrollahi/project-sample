<template>
  <div class="container mb-125px">
    <BaseTitle :data="data?.title" />
    <BaseTable>
      <template #body>
        <template v-for="(item, index) in data?.passengers" :key="index">
          <PassengerRow :data="item" />
        </template>
      </template>
    </BaseTable>
  </div>
</template>
<script setup>
  import PassengerRow from '@/components/ListPassengers/TableRow.vue'
  defineProps(['data'])
</script>
