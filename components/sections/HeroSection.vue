<script setup lang="ts">

import AppNavbar from "~/components/shared/AppNavbar.vue";
import {Input} from "~/components/ui/input";
</script>

<template lang="pug">
section(class="w-screen h-screen bg-fxsoftblue")
  div.container.mx-auto
    app-navbar
    div
      nuxt-img(src="/images/hero-image.png" class="w-[45vw] p-10 object-cover absolute right-10")
      div(class="flex flex-col justify-center items-start absolute bottom-1/3")
        h1(class="text-5xl font-bold text-fxblue") Servisteki cihazınızın
        h1(class="text-5xl font-bold text-fxblue mt-2") durumunu sorgulayın
        p(class="font-light mt-2") Lütfen servis numaranızı giriniz

        div(class="flex w-full max-w-sm items-center gap-1.5 mt-20")
          Input(id="servisno" type="text" placeholder="Servis No" class="bg-white h-10 shadow-md focus:border-fxblue" )
          Button(type="submit" class="bg-fxblue h-10 px-5") Sorgula

</template>

<style scoped>

</style>