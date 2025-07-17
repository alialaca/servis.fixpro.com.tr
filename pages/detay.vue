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
import Brand from "~/components/shared/Brand.vue";

const statuses = [
  {
    icon: "fe:layer",
    title: "Servis Kaydı Oluşturuldu",
    date: "28.05.2025 - 14:30",
    description: "Servis kaydınız başarıyla oluşturuldu.",
    status: "completed"
  },
  {
    icon: "heroicons:cube",
    title: "Cihaz Teslim Alındı",
    date: "30.05.2025 - 10:15",
    description: "Cihazınız servis merkezimize ulaştı ve kayıt altına alındı",
    status: "completed"
  },
  {
    icon: "heroicons:wrench-screwdriver",
    title: "Teknik İnceleme ve Onarım",
    date: "04.06.2025 - 09:45",
    description: "Cihazınız şu anda teknik inceleme ve onarım aşamasındadır.",
    status: "completed"
  },
  {
    icon: "ic:baseline-payments",
    title: "Ödeme",
    date: "",
    description: "",
    status: "in-progress"
  },
  {
    icon: "ic:baseline-payments",
    title: "Kargolandı",
    date: "",
    description: "",
    status: "pending"
  },
  {
    icon: "material-symbols:check-circle-outline-rounded",
    title: "Teslim edildi",
    date: "",
    description: '',
    status: "pending"
  }
]

const items = [
  {
    urunKodu: "FXYP0051",
    urunAdi: "FixPro FX165 Cylinder",
    fiyat: 1000,
    miktar: 1,
    tutar: 1000
  },
  {
    urunKodu: "FXYP0039",
    urunAdi: "FixPro FX165 Piston Assembly",
    fiyat: 1500,
    miktar: 1,
    tutar: 1500
  },
  {
    urunKodu: "FXYP0043",
    urunAdi: "Ürün Fixpro FX165 0 Ring 70*3,53",
    fiyat: 250,
    miktar: 1,
    tutar: 250
  },
  {
    urunKodu: "FXYP0092",
    urunAdi: "Fixpro FX165 Ignition Switch Asse",
    fiyat: 150,
    miktar: 1,
    tutar: 150
  }
]

const servisData = ref<any>(null)
const loading = ref(false)
const error = ref(false)

onMounted(async () => {
  const route = useRoute()
  const kod = route.query.kod
  
  if (!kod) {
    error.value = true
    return
  }
  
  const servisStore = useServisStore()
  
  // Önce store'dan kontrol et
  const storeData = servisStore.getData(kod)
  
  if (storeData) {
    // Store'dan kullan
    servisData.value = storeData
  } else {
    // Store'da yok, API'den çek (sayfa yenileme durumu)
    loading.value = true
    try {
      const data = await $fetch(`/api/detail/${kod}`, { method: 'GET' })
      if (data) {
        servisData.value = data
        // Store'a da kaydet
        servisStore.setData(kod, data)
      } else {
        error.value = true
      }
    } catch (err) {
      error.value = true
    } finally {
      loading.value = false
    }
  }
})
</script>

<template lang="pug">
main.w-screen.h-screen.bg-fwhite.flex
  div(class="w-4/12 max-lg:hidden h-screen bg-fxsoftblue grid place-content-center")
    img.px-10(src="/images/detail.png" alt="register")
  div(class="w-8/12 h-screen p-10 overflow-y-auto max-lg:w-full max-md:px-4 grid place-content-stretch max-md:place-content-start")
    // Loading state
    div(v-if="loading" class="flex justify-center items-center h-full")
      Icon(name="svg-spinners:180-ring" class="text-fxblue text-6xl")
    // Error state
    div(v-else-if="error" class="flex flex-col justify-center items-center h-full")
      Icon(name="heroicons:exclamation-triangle" class="text-red-500 text-6xl mb-4")
      p.text-xl.font-bold.text-red-500 Servis kaydı bulunamadı
      Button(@click="$router.push('/')" class="mt-4 bg-fxblue")
        | Ana Sayfaya Dön
    // Content
    div(v-else-if="servisData")
      div(class="flex justify-between")
        Brand(variation="normal" )
        Button(variant="outline" class="text-fxblue")
          Icon(name="ic:outline-local-printshop")
          | Yazdır
      div(class="w-full p-8 mt-4 border border-fxblue rounded-xl grid grid-cols-2")
        div(class="max-lg:col-span-2")
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
        div(class="border-l-[1px] border-dashed max-lg:border-t-[1px] max-lg:border-l-0 border-black pl-8 max-lg:pl-0 max-lg:pt-8 max-lg:mt-8 max-lg:col-span-2")
          p.text-base.font-bold.underline.mb-4 Servis Durumu
          status-timeline(:statuses="statuses")
        Card.col-span-2.mt-5.shadow-none.border-black(class="max-lg:col-span-2")
          CardHeader
            CardTitle.text-lg Değiştirilen Parçalar
          CardContent
            Table
              TableHeader
                TableRow.font-bold
                  TableHead Ürün Kodu
                  TableHead(class="min-w-96" ) Ürün Adı
                  TableHead.text-right Fiyat (₺)
                  TableHead.text-right Miktar
                  TableHead.text-right Tutar (₺)
              TableBody
                TableRow(v-for="(item, index ) in items" :key="item.urunKodu + index" )
                  TableCell {{ item.urunKodu }}
                  TableCell(class="min-w-96" ) {{ item.urunAdi }}
                  TableCell.text-right {{ item.fiyat }}
                  TableCell.text-right {{ item.miktar }}
                  TableCell.text-right {{ item.tutar }}
              TableFooter
                TableRow.font-bold
                  TableCell TOPLAM
                  TableCell
                  TableCell.text-right
                  TableCell.text-right
                  TableCell.text-right 2900
        div.w-full.mt-4.col-span-2
          Button.bg-fxblue.float-right
            Icon(name="ic:baseline-payments")
            | Ödeme Yap


</template>

<style scoped>

</style>