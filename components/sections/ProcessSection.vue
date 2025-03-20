<script setup lang="ts">
type Process = {
  icon: string;
  title: string;
  description: string;
}

const processes: Process[] = [
  {
    icon: "fe:layer",
    title: "1. Servis Kaydı",
    description: "Cihazınızın ilgili sorularını belirterek servis kaydı oluşturun."
  },
  {
    icon: "heroicons:cog-8-tooth",
    title: "2. Teknik İnceleme",
    description: "Uzman teknisyenlerimiz cihazınızı detaylı bir şekilde inceleyerek arızayı tespit eder."
  },
  {
    icon: "heroicons:wrench-screwdriver",
    title: "3. Onarım ve Teslim",
    description: "Cihazınız onarıldıktan sonra test edilir ve size teslim edilir."
  }
]

</script>

<template lang="pug">
section#surecimiz.container.mx-auto.text-center.my-20.pb-10
  p(class="text-4xl font-bold text-fxblue mt-20") Teknik Servis Sürecimiz
  p(class="text-muted-foreground mt-2 font-light") Cihazınızın onarım sürecini şeffaf bir şekilde takip edebilirsiniz.
  div
    div(class="flex justify-center items-center gap-10 mt-20")
      ProcessCard(v-for="process in processes" :key="process.title" :icon="process.icon" :title="process.title" :description="process.description")
</template>

<style scoped>

</style>