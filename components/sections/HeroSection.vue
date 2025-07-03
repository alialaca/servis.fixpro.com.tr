<script setup lang="ts">

import AppNavbar from "~/components/shared/AppNavbar.vue";
import {Input} from "~/components/ui/input";
import SearchForm from "~/components/sections/SearchForm.vue";
</script>

<template lang="pug">
  section#durum-sorgula(class="w-screen h-screen bg-fxsoftblue")
    app-navbar
    div.container.mx-auto(class="max-md:mx-2")
      div
        img(src="/images/hero-image.png" class="w-[50vw] p-10 object-cover absolute right-10 top-[50wh] max-lg:w-full max-md:top-[30vw] max-md:translate-x-[10%] max-lg:translate-x-[5%] max-md:translate-y-[-10%] max-lg:translate-y-[-10%] max-lg:top-[10vh]")
        div(class="flex flex-col justify-center items-start absolute bottom-1/3 max-md:mx-2 max-md:bottom-[10vh] max-lg:bottom-[5vh]")
          h1(class="text-5xl font-bold text-fxblue max-md:text-4xl") Servisteki cihazınızın
          h1(class="text-5xl font-bold text-fxblue max-md:text-4xl mt-2") durumunu sorgulayın!
          p(class="font-light mt-2") Lütfen servis numaranızı giriniz

          SearchForm

</template>

<style scoped>

</style>