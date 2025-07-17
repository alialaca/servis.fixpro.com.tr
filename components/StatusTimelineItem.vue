<script setup lang="ts">
defineProps<{
  status: {
    icon: string
    title: string
    description: string
    date: string
    status: string
  }
  isLast?: boolean
}>()

const getIconClasses = (status: string) => {
  switch (status) {
    case 'completed':
      return 'border-fxstatusblue bg-white' // Tamamlandı: beyaz arkaplan + mavi border
    case 'in-progress':
      return 'border-transparent bg-white' // Sıradaki: beyaz arkaplan + bordersız
    case 'pending':
    default:
      return 'border-white bg-[#EFEFF0]' // Bekleyen: gri arkaplan + beyaz border
  }
}

const getLineClasses = (status: string) => {
  switch (status) {
    case 'completed':
      return 'border-fxstatusblue' // Tamamlandı: mavi çizgi
    case 'in-progress':
      return 'border-fxstatusblue' // Sıradaki: mavi çizgi
    case 'pending':
    default:
      return 'border-[#EFEFF0]' // Bekleyen: gri çizgi
  }
}

const getStatusText = (status: string, date: string) => {
  switch (status) {
    case 'completed':
      return date // Tamamlandı: tarih göster
    case 'in-progress':
      return 'Sırada' // Sıradaki: "Sırada"
    case 'pending':
    default:
      return 'Bekleniyor' // Bekleyen: "Bekleniyor"
  }
}
</script>

<template lang="pug">
  div.flex.flex-row.gap-4.pb-3
    div(
      class="border-[3px] z-50 shadow-md rounded-full grid place-content-center size-12 min-w-12 my-2"
      :class="getIconClasses(status.status)"
    )
      Icon(:name="status.icon" class="text-fxblue size-6")
    div(
      class="border-[.1rem]  min-h-8 relative -left-10 top-14"
      :class="isLast ? 'invisible' : getLineClasses(status.status)"
    )
    div.text-xs.my-2
      p.text-sm {{ status.title }}
      p.text-gray-500.font-light {{ getStatusText(status.status, status.date) }}
      p.font-light {{ status.description ? status.description : '' }}
</template>

<style scoped>

</style>