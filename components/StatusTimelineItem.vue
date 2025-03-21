<script setup lang="ts">
const props = defineProps<{
  status: {
    icon: string
    title: string
    description: string
    date: string
  }[]
}>()
</script>

<template lang="pug">
div.flex.flex-row.gap-4.mb-4
  div.border-fxstatusblue.rounded-full.grid.place-content-center.size-12.my-2(class="border border-[3px] shadow-md hover:border-white hover:bg-[#EFEFF0]")
    Icon(:name="status.icon" class="text-fxblue size-6")
  div.text-xs
    p.text-sm {{ status.title }}
    p.text-gray-500.font-light {{ status.date }}
    p.font-light {{ status.description }}
</template>

<style scoped>

</style>