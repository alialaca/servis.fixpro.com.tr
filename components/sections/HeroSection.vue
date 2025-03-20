<script setup lang="ts">

import AppNavbar from "~/components/shared/AppNavbar.vue";
</script>

<template lang="pug">
section(class="w-screen h-screen bg-fxsoftblue")
  div.container.mx-auto
    app-navbar
    div
      nuxt-img(src="/images/hero-image.png" class="w-[45vw] p-10 object-cover absolute right-10")
</template>

<style scoped>

</style>