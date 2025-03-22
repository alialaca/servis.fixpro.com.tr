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
import StatusTimeline from "~/components/StatusTimeline.vue";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "~/components/ui/table";
const statuses = [
  {

  }
]
</script>

<template lang="pug">
main.w-screen.h-screen.bg-fwhite.flex
  div(class="w-4/12 h-screen bg-fxsoftblue grid place-content-center")
    nuxt-img(src="/images/detail.png" alt="register")
  div(class="w-8/12 h-screen p-10 overflow-y-auto")
    div(class="flex justify-between")
      nuxt-img(src="/logo.png" alt="logo" height="30")
      Button(variant="outline" class="text-fxblue")
        Icon(name="ic:outline-local-printshop")
        | Yazdır
    div(class="w-full p-8 mt-4 border border-fxblue rounded-xl grid grid-cols-2")
      div
        p.text-2xl.font-bold Servis Kaydı #TS18675
        p.text-xs.text-gray-500.font-light.mt-1 FixPro FX4566 | 12.05.2021
        div.bilgiler(class="grid grid-cols-2 gap-4 gap-y-8 mt-4")
          div.flex.flex-col.gap-1
            p.text-sm.font-semibold.underline Müşteri Bilgileri
            p.text-xs.font-light Ahmet Yılmaz
            p.text-xs.font-light ahmet@email.com
            p.text-xs.font-light +90 555 555 55 55
          div.flex.flex-col.gap-1
            p.text-sm.font-semibold.underline Cihaz Bilgileri
            p.text-xs.font-light Model: FixPro FX165
            p.text-xs.font-light Seri No: XM20235685899
            p.text-xs.font-light Garanti: Garanti Kapsamında
          div.flex.flex-col.gap-1.col-span-2
            p.text-sm.font-semibold.underline Arıza açıklaması
            p.text-xs.font-light Cihaz çalışırken aniden duruyor. Bekledikten sonra çalışıyor.
          div.flex.flex-col.gap-1.col-span-2
            p.text-sm.font-semibold.underline Cihaz Üzerinde Gelenler
            p.text-xs.font-light Namlu, Batarya, Gaz, Çanta
          div.flex.flex-col.gap-1.col-span-2
            p.text-sm.font-semibold.underline Servis Değerlendirmesi
            p.text-xs.font-light Batarya ısınma problemi çözüldü
      div(class="border-l-[1px] border-dashed border-black pl-8")
        p.text-base.font-bold.underline.mb-4 Servis Durumu
        status-timeline
      Card.col-span-2.mt-5.shadow-none.border-black
        CardHeader
          CardTitle Değiştirilen Parçalar
        CardContent
          Table
            TableHeader
              TableRow.font-bold
                TableHead Ürün Kodu
                TableHead Ürün Adı
                TableHead.text-right Fiyat (₺)
                TableHead.text-right Miktar
                TableHead.text-right Tutar (₺)
            TableBody
              TableRow(v-for="i in 5" :key="i" )
                TableCell 123456
                TableCell Batarya
                TableCell.text-right 150
                TableCell.text-right 1
                TableCell.text-right 150
            TableFooter
              TableRow.font-bold
                TableCell TOPLAM
                TableCell
                TableCell.text-right
                TableCell.text-right
                TableCell.text-right 2900


</template>

<style scoped>

</style>