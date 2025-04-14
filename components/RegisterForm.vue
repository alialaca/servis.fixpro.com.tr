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
</script>

<template lang="pug">
  Form.mt-16(class="grid grid-cols-2 gap-x-8 gap-y-4 font-light" method="post" action="/detay")
    p.mt-3.text-md.font-semibold.underline.col-span-2 Kişisel Bilgiler
    div.form-item(class="max-md:col-span-2")
      Label.font-light Cihaz Markası
      Input(id="name" name="name" type="text")
    div.form-item(class="max-md:col-span-2")
      Label.font-light Ad Soyad
      Input(id="name" name="name" type="text")
    div.form-item(class="max-md:col-span-2")
      Label.font-light TCKN / VKN
      Input(id="name" name="name" type="text")
    div.form-item(class="max-md:col-span-2")
      Label.font-light Telefon Numarası
      Input(id="name" name="name" type="text")
    p.mt-3.text-md.font-semibold.underline.col-span-2 Cihaz Bilgileri
    div.form-item(class="max-md:col-span-2")
      Label.font-light Cihaz Modeli
      Select
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
      Input(id="name" name="name" type="text")
    div.form-item.col-span-2
      Label.font-light Arıza Açıklaması
      Textarea(id="name" name="name" type="text")
    div.form-item.flex.flex-items-center.space-x-2.col-span-2
      Checkbox.border-fxblue(class="")
      Label
        span.text-fxblue.font-semibold KVKK aydınlatma metnini
        span.font-light.ml-1 okudum, kabul ediyorum.
    div.form-item.col-span-2.flex.justify-end.gap-2.pt-8(class="max-md:mb-10")
      NuxtLink(to="/" class="border-fxblue border rounded-md px-4 py-1 text-fxblue text-md") İptal
      Button.bg-fxblue.text-white.px-8.py-2.rounded-md Servis Kaydı Oluştur
</template>

<style scoped>

</style>