<script setup lang="ts">

import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/components/ui/accordion";

const defaultValue = '1'
const contents = [
  {
    value: '1',
    question: "Onarım süreniz yaklaşık olarak kaç gündür?",
    answer: ""
  },
  {
    value: '2',
    question: "Talep formu doldurdum cihazı size nasıl göndereceğim?",
    answer: ""
  },
  {
    value: '3',
    question: "Cihazı kılıfı ve veya bataryası olmadan size gönderebilir miyim?",
    answer: ""
  },
  {
    value: '4',
    question: "Vakit sorunu yaşıyorum cihazı size göndermeden kendim tamir edebilir miyim?",
    answer: ""
  },
  {
    value: '5',
    question: "Tamir sonrası gönderilen kargonun durumunu nasıl öğrenebilirim?",
    answer: ""
  },
  {
    value: '6',
    question: "Web sitesinden detayları ne kadar süreyle görüntüleyebilirim?",
    answer: ""
  },
]
</script>

<template lang="pug">
section#sikca-sorulan-sorular(class="w-screen h-screen bg-[url('/images/service.png')] bg-cover")
  div.container.mx-auto.py-40
    Card(class="w-1/2 ml-auto" )
      CardHeader
        CardTitle(class="text-2xl font-bold") Sıkça Sorulan Sorular
      CardContent
        Accordion(type="single" collapsible :default-value="defaultValue")
          AccordionItem(v-for="content in contents" :key="content.value" :value="content.value")
            AccordionTrigger {{ content.question }}
            AccordionContent
              p {{ content.answer }}
              p anasayfasının altına sıkça sorulan sorular kısmı koymak istiyoruz ve kendimce örnek olarak koyabileceğimiz 4 soruyu aşağıda belirttim. Bu listeye eklemek/düzeltme/silmek istediğiniz soruları ekleyebilir misiniz? Web sitesine sizin daha önce ilettiğiniz ve yeni ileteceğiniz bakım videolarını da koyacağımızı göz önüne alarak da değerlendirebilirsiniz.

</template>

<style scoped>

</style>