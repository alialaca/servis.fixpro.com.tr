<script setup lang="ts">
</script>

<template lang="pug">
main.w-screen.min-h-screen.bg-fwhite.flex
  div(class="w-4/12 max-lg:hidden h-screen bg-fxsoftblue grid place-content-center")
    nuxt-img(src="/images/register.png" alt="register")
  div(class="w-8/12 max-lg:w-full max-md:px-4 h-screen grid place-content-center max-md:place-content-start max-md:py-10")
    div(class="flex flex-col gap-2")
      div.text-5xl.text-fxblue.font-bold FixPro
      div.text-2xl Teknik Servis Kaydı Oluştur
      div.font-light Cihazınızla ilgili yaşadığınız sorunu belirtin ve servis kaydınızı oluşturun.
    RegisterForm

</template>

<style scoped>

</style>