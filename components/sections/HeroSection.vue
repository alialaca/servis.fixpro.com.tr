<script setup lang="ts">

import AppNavbar from "~/components/shared/AppNavbar.vue";
import {Input} from "~/components/ui/input";
</script>

<template lang="pug">
  section#durum-sorgula(class="w-screen h-screen bg-fxsoftblue")
    app-navbar
    div.container.mx-auto(class="max-md:mx-2")
      div
        nuxt-img(src="/images/hero-image.png" class="w-[45vw] p-10 object-cover absolute right-10 top-0 max-md:w-full max-md:top-[30vw] max-md:translate-x-[10%]")
        div(class="flex flex-col justify-center items-start absolute bottom-1/3 max-md:mx-2 max-md:top-[70vh]")
          h1(class="text-5xl font-bold text-fxblue max-md:text-4xl") Servisteki cihazınızın
          h1(class="text-5xl font-bold text-fxblue max-md:text-4xl mt-2") durumunu sorgulayın
          p(class="font-light mt-2") Lütfen servis numaranızı giriniz

          div(class="flex w-full max-w-md items-center gap-1.5 mt-20 max-md:mt-8")
            Input(id="servisno" type="text" maxlength="8" oninput="this.value = this.value.replace(/[^a-zA-Z0-9]/g, '')" placeholder="Servis No" class="bg-white h-10 shadow-md font-bold uppercase text-fxblue text-xl placeholder:font-normal placeholder:text-sm placeholder:normal-case focus:border-fxblue max-md:w-full" )
            Button(type="submit" class="bg-fxblue h-10 px-5 hover:bg-fxstatusblue hover:shadow-md" ) Sorgula

</template>

<style scoped>

</style>