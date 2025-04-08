<script setup lang="ts">
const process = defineProps<{
  icon: string;
  title: string;
  description: string;
}>();
</script>

<template lang="pug">
div(class="process-item border border-fxblue p-2 rounded-3xl w-80 h-80 flex flex-col items-center justify-center group hover:bg-fxblue hover:text-white hover:shadow-fxblue hover:shadow-lg transition-all duration-300 ease-in-out")
  div(class="bg-fxblue group-hover:bg-white p-3 rounded-full w-16 aspect-square grid place-items-center")
    Icon(:name="process.icon"  class="text-white group-hover:text-fxblue size-8")
  p(class="text-2xl font-bold mt-6") {{ process.title }}
  p(class="mt-2 font-light") {{ process.description }}
</template>

<style scoped>

</style>