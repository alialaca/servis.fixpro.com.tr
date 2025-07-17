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

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('tr-TR', {
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const getStatusIcon = (tip: string) => {
  switch (tip) {
    case 'Yeni Kayıt': return 'fe:layer'
    case 'Bakımda': return 'heroicons:wrench-screwdriver'
    case 'Beklemede': return 'heroicons:clock'
    case 'Hazır': return 'material-symbols:check-circle-outline-rounded'
    case 'Gönderildi': return 'heroicons:truck'
    default: return 'fe:layer'
  }
}

const getStatusType = (tip: string, index: number, total: number) => {
  if (index === total - 1) return 'completed'
  return 'completed'
}

const statuses = computed(() => {
  if (!servisData.value?.durumlar) return []
  return servisData.value.durumlar.map((durum: any, index: number) => ({
    icon: getStatusIcon(durum.tip),
    title: durum.tip,
    date: formatDate(durum.tarih),
    description: durum.aciklama || '',
    status: getStatusType(durum.tip, index, servisData.value.durumlar.length)
  }))
})

const items = computed(() => {
  if (!servisData.value?.parcalar) return []
  return servisData.value.parcalar
})

const totalAmount = computed(() => {
  if (!items.value.length) return 0
  return items.value.reduce((sum: number, item: any) => sum + (item.tutar || 0), 0)
})

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
          p.text-2xl.font-bold Servis Kaydı {{ '#' + servisData.kod }}
          p.text-xs.text-gray-500.font-light.mt-1 {{ servisData.cihaz?.model }} | {{ formatDate(servisData.createdAt) }}
          div.bilgiler(class="grid grid-cols-2 gap-4 gap-y-8 mt-4")
            div.flex.flex-col.gap-1
              p.text-sm.font-semibold.underline Müşteri Bilgileri
              p.text-xs.font-light {{ servisData.musteri?.unvan || 'Bilgi yok' }}
              p.text-xs.font-light {{ servisData.musteri?.email || 'E-posta bilgisi yok' }}
              p.text-xs.font-light {{ servisData.musteri?.tel ? '+90 ' + servisData.musteri.tel : 'Telefon bilgisi yok' }}
            div.flex.flex-col.gap-1
              p.text-sm.font-semibold.underline Cihaz Bilgileri
              p.text-xs.font-light Model: {{ servisData.cihaz?.model || 'Belirtilmemiş' }}
              p.text-xs.font-light Seri No: {{ servisData.cihaz?.serino || 'Belirtilmemiş' }}
              p.text-xs.font-light Garanti: {{ servisData.garanti ? 'Garanti Kapsamında' : 'Garanti Dışı' }}
            div.flex.flex-col.gap-1.col-span-2
              p.text-sm.font-semibold.underline Arıza açıklaması
              p.text-xs.font-light {{ servisData.sikayet || 'Arıza açıklaması belirtilmemiş' }}
            div.flex.flex-col.gap-1.col-span-2
              p.text-sm.font-semibold.underline Cihaz Üzerinde Gelenler
              p.text-xs.font-light {{ servisData.uzerindegelenler || 'Belirtilmemiş' }}
            div.flex.flex-col.gap-1.col-span-2
              p.text-sm.font-semibold.underline Servis Değerlendirmesi
              p.text-xs.font-light {{ servisData.aciklama || 'Henüz değerlendirme yapılmamış' }}
        div(class="border-l-[1px] border-dashed max-lg:border-t-[1px] max-lg:border-l-0 border-black pl-8 max-lg:pl-0 max-lg:pt-8 max-lg:mt-8 max-lg:col-span-2")
          p.text-base.font-bold.underline.mb-4 Servis Durumu
          status-timeline(:statuses="statuses")
        Card.col-span-2.mt-5.shadow-none.border-black(class="max-lg:col-span-2")
          CardHeader
            CardTitle.text-lg Değiştirilen Parçalar
          CardContent
            div(v-if="items.length > 0")
              Table
                TableHeader
                  TableRow.font-bold
                    TableHead Ürün Kodu
                    TableHead(class="min-w-96" ) Ürün Adı
                    TableHead.text-right Fiyat (₺)
                    TableHead.text-right Miktar
                    TableHead.text-right Tutar (₺)
                TableBody
                  TableRow(v-for="(item, index ) in items" :key="item._id || index" )
                    TableCell {{ item.urunKodu || 'N/A' }}
                    TableCell(class="min-w-96" ) {{ item.urunAdi || 'N/A' }}
                    TableCell.text-right {{ item.fiyat || 0 }}
                    TableCell.text-right {{ item.miktar || 0 }}
                    TableCell.text-right {{ item.tutar || 0 }}
                TableFooter
                  TableRow.font-bold
                    TableCell TOPLAM
                    TableCell
                    TableCell.text-right
                    TableCell.text-right
                    TableCell.text-right {{ totalAmount }}
            div(v-else class="text-center py-8")
              p.text-gray-500 Henüz değiştirilen parça bulunmamaktadır
        div.w-full.mt-4.col-span-2
          Button.bg-fxblue.float-right
            Icon(name="ic:baseline-payments")
            | Ödeme Yap


</template>

<style scoped>

</style>