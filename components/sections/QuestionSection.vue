<script setup lang="ts">

import {Card, CardContent, CardHeader, CardTitle} from "~/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/components/ui/accordion";

const defaultValue = '1'
const contents = [
  {
    value: '1',
    question: "Onarım süreniz yaklaşık olarak kaç gündür?",
    answer: "Cihazınızın onarım süresi servisimize vardıktan sonra normal şartlarda 5 iş günüdür. Ancak bu süre, cihazın arızasına ve yedek parça teminine bağlı olarak da değişiklik gösterebilir."
  },
  {
    value: '2',
    question: "Talep formu doldurdum cihazı size nasıl göndereceğim?",
    answer: "Adres bilgileri ve kargo bilgileri talep formu doldurulduktan sonra size sms ile gönderilecektir. Bu bilgileri kullanarak cihazınızı kargo ile gönderebilirsiniz."
  },
  {
    value: '3',
    question: "Cihazı kılıfı ve veya bataryası olmadan size gönderebilir miyim?",
    answer: "Evet gönderebilirsiniz. Elimizdeki bataryalar ile cihzınızı test edebiliriz. Ancak kılıfı olmadan gönderirseniz cihazınızın dış görünümünde hasar oluşabilir. Bu nedenle kılıfı ile göndermenizi öneririz."
  },
  {
    value: '4',
    question: "Vakit sorunu yaşıyorum cihazı size göndermeden kendim tamir edebilir miyim?",
    answer: "Evet edebilirsiniz. Sitemizde bulunan kullanım videolarını izleyerek cihazınızı kendiniz tamir edebilirsiniz. Ancak bunun dışında bir arızaya sahipse cihazınızı kendiniz tamir etmeye çalışmayın. Bu durumda cihazınızın garantisi geçersiz olacaktır."
  },
  {
    value: '5',
    question: "Tamir sonrası gönderilen kargonun durumunu nasıl öğrenebilirim?",
    answer: "Cihazınızn tamir süreci tamamlandıktan sonra size sms ile kargo takip numarası gönderilecektir. Bu takip numarasını kullanarak kargonuzun durumunu öğrenebilirsiniz."
  },
  {
    value: '6',
    question: "Web sitesinden detayları ne kadar süreyle görüntüleyebilirim?",
    answer: "Web sitesindeki detayları 1 ay boyunca görüntüleyebilirsiniz. Dilerseniz kargonuz içerisinde size gönderilen bakım formunu veya tamir detay sayfasında bulunan bilgileri pdf olarak saklayabilirsiniz. Bu sayede detayları daha uzun süre saklayabilirsiniz."
  },
]
</script>

<template lang="pug">
  section#sikca-sorulan-sorular(class="w-screen min-h-screen bg-[url('/images/service.png')] bg-cover")
    div.container.mx-auto.py-40(class="max-md:px-2")
      Card(class="w-1/2 max-md:w-full ml-auto" )
        CardHeader
          CardTitle(class="text-2xl font-bold") Sıkça Sorulan Sorular
        CardContent
          Accordion(type="single" collapsible :default-value="defaultValue")
            AccordionItem(v-for="content in contents" :key="content.value" :value="content.value")
              AccordionTrigger {{ content.question }}
              AccordionContent
                p {{ content.answer }}

</template>

<style scoped>

</style>