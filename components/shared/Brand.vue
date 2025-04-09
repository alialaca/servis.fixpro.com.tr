<script setup lang="ts">
const {variation = 'normal'} = defineProps<{
  variation: 'normal' | 'white'
}>()
</script>

<template lang="pug">
  div.text-4xl.flex(:class="[variation === 'white' ? 'text-white' : 'text-fxblue']")
    p Fx
    p.font-bold Servis
</template>

<style scoped>

</style>