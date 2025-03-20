<script setup lang="ts">

</script>

<template lang="pug">
  nav(class="container mx-auto flex items-center justify-between p-8 lg:px-8" aria-label="Global")
    div(class="flex lg:flex-1")
      a(href="#" class="-m-1.5 p-1.5")
        span(class="sr-only") FixPro
        nuxt-img(src="/logo.png" class="h-8")
    div(class="flex lg:hidden")
      button(type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700")
        span(class="sr-only") Open main menu
        svg(class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon")
          path(stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5")
    div(class="hidden lg:flex lg:gap-x-12 text-gray-900")
      a(href="#") Durum Sorgula
      a(href="#") Kullanım Videoları
      a(href="#") S.S.S.
      a(href="#") İletişim
    div(class="hidden lg:flex lg:flex-1 lg:justify-end")
      Button(class="bg-fxblue rounded-sm") +  Yeni Cihaz Kaydı
</template>s

<style scoped>

</style>