# FixPro Teknik Servis UI

FixPro Teknik Servis için geliştirilmiş modern web uygulaması. Kullanıcılar servis kodları ile servis durumlarını takip edebilir, detaylı bilgileri görüntüleyebilir ve servis süreçlerini izleyebilir.

## 🚀 Özellikler

- **Servis Sorgulama**: 8 karakterlik servis kodları ile hızlı durum sorgulama
- **Detaylı Takip**: Servis süreçlerinin timeline görünümü ile takibi
- **Maliyet Analizi**: Değiştirilen parçaların detaylı fiyat bilgileri
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu modern arayüz
- **Hızlı Cache**: Pinia store ile 5 dakikalık veri önbellekleme
- **API Koruması**: Rate limiting ile güvenli API kullanımı

## 🛠️ Teknoloji Stack

- **Framework**: Nuxt 3 (Vue.js)
- **Dil**: TypeScript
- **Styling**: TailwindCSS + Shadcn/ui
- **State**: Pinia
- **Validation**: Vee-validate + Zod
- **Icons**: Lucide Vue Next + Nuxt Icon
- **Template**: Pug
- **Package Manager**: PNPM

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- PNPM

### Bağımlılıkları Yükleyin
```bash
pnpm install
```

### Geliştirme Ortamı
```bash
pnpm dev
```
Uygulama `http://localhost:3000` adresinde çalışacaktır.

## 🔧 Komutlar

### Geliştirme
```bash
pnpm dev          # Geliştirme sunucusunu başlat
pnpm lint         # Kodları kontrol et
```

### Production
```bash
pnpm build        # Production için derle
pnpm preview      # Production build'ini önizle
```

### Deployment
```bash
pnpm deploy       # CapRover'a deploy et (alialaca/servis)
```

## 📁 Proje Yapısı

```
├── pages/
│   ├── index.vue           # Ana sayfa (servis sorgulama)
│   ├── detay.vue          # Servis detay sayfası
│   └── kayit.vue          # Kayıt sayfası (şu anda devre dışı)
├── components/
│   ├── sections/          # Sayfa bölümleri
│   ├── shared/           # Paylaşılan bileşenler
│   └── ui/               # Shadcn/ui bileşenleri
├── stores/
│   └── servis.ts         # Servis verilerinin cache yönetimi
└── server/
    └── tasks/            # Zamanlanmış görevler
```

## 🌍 Ortam Değişkenleri

```env
# Backend servis URL'i
API_SERVICE_URL=http://localhost:7254
```

## 📊 Servis Durumları

Sistem aşağıdaki durum akışını takip eder:
1. **Yeni Kayıt** - Servis kaydı oluşturuldu
2. **Bakımda** - Teknik inceleme ve onarım
3. **Beklemede** - Müşteri onayı bekleniyor
4. **Hazır** - Ödeme ve teslim
5. **Gönderildi** - Kargoya verildi

## 🔒 Güvenlik

- **Rate Limiting**: 108 saniyede maksimum 12 istek
- **API Shield**: Otomatik DDoS koruması
- **Memory Storage**: Geçici veri depolama
- **Input Validation**: Zod ile form doğrulama

## ⚠️ Önemli Notlar

### Kayıt Sistemi (Geçici Olarak Devre Dışı)
Kayıt formu şu anda kapatılmıştır:
- Navbar'daki kayıt butonu gizlenmiştir
- `/kayit` sayfası ana sayfaya yönlendirir
- Yeniden aktifleştirmek için `CLAUDE.md` dosyasındaki talimatları takip edin

### Cache Yönetimi
- Servis verileri 5 dakika önbelleklenir
- Cache anahtarı servis kodudur
- Otomatik temizleme 15 dakikada bir yapılır

## 🎨 Tasarım Sistemi

- **Renkler**: Custom Tailwind renk paleti
- **Font**: DM Sans (Google Fonts)
- **Bileşenler**: Shadcn/ui tabanlı
- **Responsive**: Mobile-first yaklaşım

## 🔄 API Entegrasyonu

- Tüm `/api/**` istekleri backend servise proxy edilir
- Sunucu tarafında API route'u gerektirmez
- Cache mekanizması ile performans optimizasyonu

## 📝 Lisans

Bu proje FixPro Teknik Servis için özel olarak geliştirilmiştir.