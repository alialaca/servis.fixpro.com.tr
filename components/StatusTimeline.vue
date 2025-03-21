<script setup lang="ts">

import StatusTimelineItem from "~/components/StatusTimelineItem.vue";
const statuses = [
  {
    icon: "fe:layer",
    title: "Servis Kaydı Oluşturuldu",
    date: "28.05.2025 - 14:30",
    description: "Servis kaydınız başarıyla oluşturuldu."
  },
  {
    icon: "heroicons:cube",
    title: "Cihaz Teslim Alındı",
    date: "30.05.2025 - 10:15",
    description: "Cihazınız servis merkezimize ulaştı ve kayıt altına alındı"
  },
  {
    icon: "heroicons:wrench-screwdriver",
    title: "Teknik İnceleme ve Onarım",
    date: "04.06.2025 - 09:45",
    description: "Cihazınız şu anda teknik inceleme ve onarım aşamasındadır."
  },
  {
    icon: "ic:baseline-payments",
    title: "Ödeme",
    date: "Bekleniyor",
    description: ""
  },
  {
    icon: "ic:baseline-payments",
    title: "Kargolandı",
    date: "Bekleniyor",
    description: ""
  },
  {
    icon: 'material-symbols:check-circle-outline-rounded',
    title: 'Teslim edildi',
    date: 'Bekleniyor',
    description: ''
  }
]
</script>

<template lang="pug">
status-timeline-item(v-for="status in statuses" :key="status.title" :status="status" )
</template>

<style scoped>

</style>