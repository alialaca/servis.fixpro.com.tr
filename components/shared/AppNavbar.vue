<script setup lang="ts">
const scrolled = ref(false)
const checkScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const menues = [
  {text: 'Durum Sorgula', path: '#durum-sorgula'},
  {text: 'Çalışma Şeklimiz', path: '#surecimiz'},
  {text: 'Kullanım Videoları', path: '#videolar'},
  {text: 'S.S.S.', path: '#sikca-sorulan-sorular'},
  {text: 'İletişim', path: '#iletisim'},
]
</script>

<template lang="pug">
  nav(class="fixed w-full transition-all duration-300 z-50" aria-label="Global" ref="el" )
    div(class="py-8 transition-all duration-300 bg-transparent" :class="{'bg-white shadow-md': scrolled}")
      div(class="container mx-auto flex items-center justify-between")
        div(class="flex lg:flex-1")
          a(href="#" class="-m-1.5 p-1.5")
            span(class="sr-only") FixPro
            nuxt-img(src="/logo.png" class="h-8")
            pre {{y}} {{isScrolled}}
        div(class="flex lg:hidden")
          button(type="button" class="-m-2.5 inline-flex items-center justify-center rounded-sm p-2.5 text-gray-700")
            span(class="sr-only") Open main menu
            svg(class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon")
              path(stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5")
        div(class="hidden lg:flex lg:gap-x-12 text-gray-900")
          a(v-for="menu in menues" :href="menu.path" v-text="menu.text" class="transition-all duration-300 hover:relative hover:text-fxblue hover:font-bold")
        div(class="hidden lg:flex lg:flex-1 lg:justify-end")
          NuxtLink(to="/kayit" class="bg-fxblue rounded-sm text-white py-2 px-4") +  Yeni Cihaz Kaydı
</template>s

<style scoped>

</style>