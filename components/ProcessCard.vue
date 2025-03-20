<script setup lang="ts">
const process = defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template lang="pug">
div(class="process-item border border-fxblue p-5 rounded-3xl w-96 h-96 flex flex-col items-center justify-center")
  div(class="bg-fxblue p-3 rounded-full w-16 aspect-square grid place-items-center")
    Icon(:name="process.icon"  class="text-white size-8")
  p(class="text-2xl font-bold mt-6") {{ process.title }}
  p(class="text-muted-foreground mt-2 font-light") {{ process.description }}
</template>

<style scoped>

</style>