<script setup lang="ts">

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "~/components/ui/carousel";
import TutorialCard from "~/components/TutorialCard.vue";

const tutorials = [
  {
    title: "FX165 şarjöre çivi yüklemesi nasıl yapılamıldır?",
    description: "",
    videoUrl: "https://www.youtube.com/embed/Jfq_sdaKi-U?si=WuuUXLGJZZMfiXoS"
  },
  {
    title: "FX165 Batarya Şarj Dolumu",
    description: "",
    videoUrl: "https://www.youtube.com/embed/Ns0fJEVjpmE?si=dq3LcLk14Z6LlIYT"
  },
  {
    title: "FX165 Kutu Açılımı",
    description: "",
    videoUrl: "https://www.youtube.com/embed/4ZbpT0z_5WI?si=SlVl0jD8OPiWFrk7"
  }
]
</script>

<template lang="pug">
section#videolar.container.mx-auto.text-center.my-20.pb-10
  p(class="text-4xl font-bold text-fxblue mt-20") Kullanım Videoları
  p(class="text-muted-foreground mt-2 font-light") Temel bakım onarım işlemlerinizi cihazlarınızı bize göndermeden kendiniz de yapabilirsiniz
  div(class="grid place-content-center pt-20")
    Carousel(class="w-full max-w-screen-xl" :opts="{ align: 'start' }" )
      CarouselContent(class="-ml-1" )
        CarouselItem(v-for="(tutorial, index) in tutorials" :key="index" class="pl-1 md:basis-1/2 lg:basis-1/2")
          div.p-1
            tutorial-card(:title="tutorial.title" :description="tutorial.description" :videoUrl="tutorial.videoUrl")
      CarouselPrevious
      CarouselNext
</template>

<style scoped>

</style>