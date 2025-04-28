<script setup lang="ts">
import {Form} from "vee-validate";
import {Textarea} from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "~/components/ui/select";
import {Checkbox} from "~/components/ui/checkbox";
import {Dialog, DialogContent, DialogHeader} from "~/components/ui/dialog";
import KvkkContent from "~/components/KvkkContent.vue";

const form = reactive({
  brand: "",
  name: "",
  vkn: "",
  phone: "",
  deviceModel: "",
  serialNumber: "",
  description: ""
});
</script>

<template lang="pug">
  Form.mt-16(@submit="submitForm" class="grid grid-cols-2 gap-x-8 gap-y-4 font-light")
    p.mt-3.text-md.font-semibold.underline.col-span-2 Kişisel Bilgiler
    div.form-item(class="max-md:col-span-2")
      Label.font-light Cihaz Markası
      Input(name="brand" type="text" v-model="form.brand")
    div.form-item(class="max-md:col-span-2")
      Label.font-light Ad Soyad
      Input(name="name" type="text" v-model="form.name" )
    div.form-item(class="max-md:col-span-2")
      Label.font-light TCKN / VKN
      Input(name="vkn" type="text" v-model="form.vkn" )
    div.form-item(class="max-md:col-span-2")
      Label.font-light Telefon Numarası
      Input(name="phone" type="text" v-model="form.phone" )
    p.mt-3.text-md.font-semibold.underline.col-span-2 Cihaz Bilgileri
    div.form-item(class="max-md:col-span-2")
      Label.font-light Cihaz Modeli
      Select(name="deviceModel" v-model="form.deviceModel")
        SelectTrigger
          SelectValue(placeholder="Seçiniz")
        SelectContent
          SelectGroup
            SelectLabel FixPro
            SelectItem(value="FX165" ) FX165
            SelectItem(value="FXY165" ) FXY165
            SelectItem(value="FXP100" ) FXP100
            SelectItem(value="FXFXUZN" ) FXFXUZN
            SelectLabel Spit
            SelectItem(value="P800" ) P800
            SelectItem(value="P40" ) P40
            SelectItem(value="P27" ) P27
            SelectItem(value="P700" ) P700
          SelectItem(value="Diğer" ) Diğer
    div.form-item(class="max-md:col-span-2")
      Label.font-light Seri Numarası
      Input(name="serialNumber" type="text" v-model="form.serialNumber" )
    div.form-item.col-span-2
      Label.font-light Arıza Açıklaması
      Textarea(name="description" type="text" v-model="form.description" )
    div.form-item.flex.flex-items-center.space-x-2.col-span-2
      Checkbox.border-fxblue(class="")
      Label
        Dialog
          DialogTrigger(as-child)
            span.text-fxblue.font-semibold.cursor-pointer KVKK aydınlatma metnini
          DialogScrollContent
            DialogHeader.p-6.pb-0
              DialogTitle KVKK Aydınlatma Metni
              DialogDescription
            KvkkContent
        span.font-light.ml-1 okudum, kabul ediyorum.
    div.form-item.col-span-2.flex.justify-end.gap-2.pt-8(class="max-md:mb-10")
      NuxtLink(to="/" class="border-fxblue border rounded-md px-4 py-1 text-fxblue text-md") İptal
      Button.bg-fxblue.text-white.px-8.py-2.rounded-md Servis Kaydı Oluştur
</template>

<style scoped>

</style>