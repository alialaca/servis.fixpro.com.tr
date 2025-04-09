<script setup lang="ts">
const {variation = 'normal'} = defineProps<{
  variation: 'normal' | 'white'
}>()
</script>

<template lang="pug">
  a(href="#" class="-m-1.5 p-1.5")
    span(class="sr-only") FixPro
    nuxt-img(:src="variation === 'white' ? '/logo-white.png' : '/logo.png'" class="h-8")
</template>

<style scoped>

</style>