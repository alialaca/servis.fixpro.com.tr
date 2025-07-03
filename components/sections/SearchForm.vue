<script setup lang="ts">
const kod = ref('')
const loading = ref(false)
const showError = ref(false)

</script>

<template lang="pug">
div(class="flex w-full max-w-md items-center gap-1.5 mt-20 max-md:mt-8")
  Input(id="servisno" v-model="kod" type="text" maxlength="8" oninput="this.value = this.value.replace(/[^a-zA-Z0-9]/g, '')" placeholder="Servis No" class="bg-white h-10 shadow-md font-bold uppercase text-fxblue text-xl placeholder:font-normal placeholder:text-sm placeholder:normal-case focus:border-fxblue max-md:w-full" )
  Button(type="submit" @click="check" class="bg-fxblue h-10 px-5 hover:bg-fxstatusblue hover:shadow-md" ) Sorgula
  Button(type="submit" @click="check" class="bg-fxblue h-10 px-5 hover:bg-fxstatusblue hover:shadow-md" :disabled="loading" )
    | Sorgula
    Icon(v-if="loading" name="svg-spinners:180-ring" class="ml-2 text-white")
p(class="text-red-500 text-sm mt-2" :class="{'invisible': !showError}") Lütfen takip numarasını doğru giriniz.
</template>

<style scoped>

</style>