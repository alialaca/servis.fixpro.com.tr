<script setup lang="ts">

import StatusTimelineItem from "~/components/StatusTimelineItem.vue";
const props = defineProps<{
  statuses: {
    icon: string
    title: string
    description: string
    date: string
    status: string
  }[]
}>()
</script>

<template lang="pug">
status-timeline-item(v-for="(status, index) in props.statuses" :key="status.title" :status="status" :isLast="index === props.statuses.length - 1")
</template>

<style scoped>

</style>