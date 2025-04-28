<script setup lang="ts">
defineProps<{
  status: {
    icon: string
    title: string
    description: string
    date: string
    status: string
  }
}>()
</script>

<template lang="pug">
  div.flex.flex-row.gap-4.pb-3
    div(
      class="border border-[3px] z-50 shadow-md rounded-full grid place-content-center size-12 min-w-12 my-2"
      :class="[status.status === 'completed' ? 'border-fxstatusblue' : 'border-white',  status.status === 'pending' ? 'bg-[#EFEFF0]' : 'bg-white']"
    )
      Icon(:name="status.icon" class="text-fxblue size-6")
    div(
      v-show="status.title !== 'Teslim edildi'"
      class="border-[.1rem]  min-h-8 relative -left-10 top-14"
      :class="[status.status === 'completed' ? 'border-fxstatusblue' : 'border-[#EFEFF0]']"
    )
    div.text-xs.my-2
      p.text-sm {{ status.title }}
      p.text-gray-500.font-light {{ status.status !== 'completed' ? 'Bekleniyor' : status.date }}
      p.font-light {{ status.description ? status.description : '' }}
</template>

<style scoped>

</style>