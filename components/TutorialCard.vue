<script setup lang="ts">
import {Card, CardContent, CardFooter} from "~/components/ui/card";
const tutorial = defineProps<{
  title: string;
  description: string;
  videoUrl: string;
}>()
</script>

<template lang="pug">
Card.bg-orange-100
  CardContent(class="flex justify-center p-0")
    iframe(
      class="aspect-video w-full max-w-screen-xl rounded-t-lg"
      :src="tutorial.videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      )
  CardFooter.bg-fxblue.text-white.rounded-b-lg.flex.flex-col.pt-4
    span(class="text-md font-regular") {{ tutorial.title }}
    span(class="text-sm font-light") {{ tutorial.description }}
</template>

<style scoped>

</style>