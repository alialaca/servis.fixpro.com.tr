<script setup lang="ts">

import AppNavbar from "~/components/shared/AppNavbar.vue";
import {Input} from "~/components/ui/input";
</script>

<template lang="pug">
  section#durum-sorgula(class="w-screen h-screen bg-fxsoftblue")
    app-navbar
    div.container.mx-auto
      div
        nuxt-img(src="/images/hero-image.png" class="w-[45vw] p-10 object-cover absolute right-10")
        div(class="flex flex-col justify-center items-start absolute bottom-1/3")
          h1(class="text-5xl font-bold text-fxblue") Servisteki cihazınızın
          h1(class="text-5xl font-bold text-fxblue mt-2") durumunu sorgulayın
          p(class="font-light mt-2") Lütfen servis numaranızı giriniz

          div(class="flex w-full max-w-sm items-center gap-1.5 mt-20")
            Input(id="servisno" type="text" maxlength="8" oninput="this.value = this.value.replace(/[^a-zA-Z0-9]/g, '')" placeholder="Servis No" class="bg-white h-10 shadow-md font-bold uppercase text-fxblue text-xl placeholder:font-normal placeholder:text-sm placeholder:normal-case focus:border-fxblue" )
            Button(type="submit" class="bg-fxblue h-10 px-5 hover:bg-fxstatusblue hover:shadow-md" ) Sorgula

</template>

<style scoped>

</style>