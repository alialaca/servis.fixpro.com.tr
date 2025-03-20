<template>
  <div class="font-dm text-[16px] overflow-x-hidden">
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "FixPro Teknik Servis",
  meta: [
    {
      name: "FixPro Teknik Servis",
      content: "Online servis takibi sistemi"
    }
  ],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
    }
  ]
})
</script>
