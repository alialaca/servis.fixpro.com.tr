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
  { icon: 'ic:sharp-language', text: 'www.fixpro.com.tr', link: 'https://www.fixpro.com.tr' },
  { icon: 'ic:baseline-access-time', text: 'Pazartesi - Cuma / 09.00 - 17.00', link: '' }
]
</script>

<template lang="pug">
section#iletisim(class="w-screen bg-fxsoftblue")
  div.container.mx-auto.pt-16.pb-8
    footer(class="flex items-start justify-between")
      div.flex.flex-col.gap-3.text-fxblue
        div.flex.items-end.gap-3
          Logo
          div(class="bg-fxblue h-[2rem] w-[1px]")
          p.font-light Teknik Servis
        div(class="bg-fxblue w-full h-[1px]")
        div.flex.justify-between.text-fxblue
          LazyIcon(v-for="acount in accounts" :key="acount.link" :name="acount.icon")
        div.text-xs.mt-10 Copyright © 2025 | FixPro İç ve Dış Ticaret A.Ş

      div.contacts.flex.flex-col.gap-2
        a.flex.items-center(v-for="contact in contacts" :key="contact.text")
          Icon(:name="contact.icon" size="1em")
          p.ml-2 {{contact.text}}

</template>

<style scoped>

</style>