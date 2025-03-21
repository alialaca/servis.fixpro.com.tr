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
div.flex.flex-row.gap-4.pb-4
  div(
    class="border border-[3px] shadow-md border-fxstatusblue rounded-full grid place-content-center size-12 my-2"
    :class="{'border-white': status.status !== 'completed', 'bg-[#EFEFF0]': status.status === 'pending'}"
    )
    Icon(:name="status.icon" class="text-fxblue size-6")
  div(
    v-if="status.title !== 'Teslim edildi'"
    class="border-[.1rem] border-[#EFEFF0] h-8 relative -left-10 top-14"
    :class="{'border-fxstatusblue': status.status === 'completed', 'border-fxstatusblue': status.status === 'completed'}"
    )
  div.text-xs
    p.text-sm {{ status.title }}
    p.text-gray-500.font-light {{ status.status !== 'completed' ? 'Bekleniyor' : status.date }}
    p.font-light {{ status.description ? status.description : '' }}
</template>

<style scoped>

</style>