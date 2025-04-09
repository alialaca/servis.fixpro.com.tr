<script setup lang="ts">

import Logo from "~/components/shared/Logo.vue";
const accounts = [
  { icon: 'mdi:instagram', link: 'https://www.instagram.com/fixpro_tr/'},
  { icon: 'mdi:facebook', link: 'https://www.instagram.com/fixpro_tr/'},
  { icon: 'hugeicons:tiktok', link: 'https://www.instagram.com/fixpro_tr/'},
  { icon: 'mdi:youtube', link: 'https://www.instagram.com/fixpro_tr/'},
  { icon: 'mdi:linkedin', link: 'https://www.instagram.com/fixpro_tr/'},
  { icon: 'hugeicons:new-twitter', link: 'https://www.instagram.com/fixpro_tr/'}
]

const contacts = [
  { icon: 'ic:outline-location-on', text: 'Yedpa Ticaret Merkezi / İstanbul', link: '' },
  { icon: 'ic:outline-phone-in-talk', text: '+90 232 700 24 84', link: '' },
  { icon: 'ic:sharp-language', text: 'www.fixpro.com.tr', link: 'https://fixpro.com.tr' },
  { icon: 'ic:baseline-access-time', text: 'Pazartesi - Cuma / 09.00 - 17.00', link: '' }
]
</script>

<template lang="pug">
section#iletisim(class="w-screen bg-fxblue text-white")
  div.container.mx-auto.pt-16.pb-8
    footer(class="flex max-md:flex-col items-start justify-between max-md:items-center")
      div.flex.flex-col.gap-3(class="max-md:order-2 max-md:pt-10")
        div.flex.items-end.gap-3(class="max-md:mx-auto")
          Logo(variation="white" )
        div(class="bg-white w-full h-[1px]")
        div.flex.justify-between
          LazyIcon(v-for="acount in accounts" :key="acount.link" :name="acount.icon")
        div.text-xs.mt-10(class="max-md:mt-2") Copyright © 2025 | FixPro İç ve Dış Tic. A.Ş

      div.contacts.flex.flex-col.gap-2.font-light(class="max-md:order-1")
        a.flex.items-center(v-for="contact in contacts" :key="contact.text")
          Icon(:name="contact.icon" size="1em")
          p.ml-2 {{contact.text}}

</template>

<style scoped>

</style>