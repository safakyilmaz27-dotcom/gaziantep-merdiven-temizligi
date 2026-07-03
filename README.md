# Mira Temizlik — Gaziantep Merdiven & Apartman Temizliği

Türkiye pazarına özgün, mobil-öncelikli, yerel SEO odaklı kurumsal temizlik sitesi.
HTML5 + modern CSS + vanilla JavaScript. Framework yok, build adımı yok — dosyaları
sunucuya atmanız yeterli.

> **Ana hedef:** Google'da "Gaziantep merdiven temizliği / apartman temizliği / bina
> temizliği" aramalarında ilk sıralarda çıkmak.

---

## 📁 Dosya Yapısı

```
merdiven temizliği/
├── index.html                 → Ana sayfa (hero, hizmetler, yorumlar, SSS, teklif formu)
├── hizmetler.html             → Detaylı hizmet sayfası
├── hakkimizda.html            → Kurumsal / güven sayfası
├── blog.html                  → Blog listesi
├── iletisim.html              → İletişim + form + harita
├── blog/
│   ├── ev-temizligi-ipuclari.html
│   ├── temizlik-firmasi-secimi.html
│   └── merdiven-temizligi-sikligi.html
├── style.css                  → Tüm tasarım sistemi (tek dosya)
├── script.js                  → Menü, accordion, öncesi/sonrası, WhatsApp form
├── robots.txt                 → Arama motoru yönergesi
├── sitemap.xml                → Site haritası
└── assets/images/
    ├── favicon.svg
    └── GORSEL-EKLE-OKU.txt    → Hangi görselin nereye ekleneceği
```

---

## 🚀 Kurulum

1. **Tüm klasörü** hosting'inizin kök dizinine (`public_html` / `www`) yükleyin.
2. `index.html` otomatik açılır — ekstra ayar gerekmez.
3. **Görselleri ekleyin:** `assets/images/GORSEL-EKLE-OKU.txt` dosyasındaki isimlerle
   fotoğraflarınızı koyun. (Site görselsiz de çalışır, yeşil degrade zeminler görünür.)

Yerelde denemek için klasörde bir terminal açıp:
```
python -m http.server 8000
```
sonra tarayıcıda `http://localhost:8000` adresine gidin.

---

## ⚙️ Site Bilgileri (halihazırda dolduruldu)

| Alan | Değer |
|------|-------|
| Firma | Mira Temizlik |
| Şehir | Gaziantep (Şahinbey & Şehitkamil) |
| Telefon | 0532 063 03 89 |
| WhatsApp | 905320630389 (wa.me formatı) |
| Deneyim | 10 yıl |

**Telefon/WhatsApp değişirse** şu iki değeri tüm dosyalarda güncelleyin:
- `tel:+905320630389` ve `wa.me/905320630389` (HTML içinde)
- `script.js` içindeki `var WHATSAPP = "905320630389";`

---

## 📈 Google'da İlk Sıraya Çıkmak İçin YAPILACAKLAR (kritik!)

Kod tarafı hazır; sıralama için asıl işi bu adımlar yapar:

### 1. Alan adı & yayına alma
- `gaziantepapartmanvemerdiventemizligi.com` alan adını alın ve SSL (https) aktif edin.
- Kod içindeki tüm `https://www.gaziantepapartmanvemerdiventemizligi.com/` adresleri hazır;
  farklı alan adı kullanacaksanız **tüm dosyalarda** bu adresi değiştirin (canonical,
  Open Graph ve sitemap için önemli).

### 2. Google Business Profile (EN ÖNEMLİSİ) 🔑
Yerel aramada 1. sıranın anahtarı budur, siteden bile önemli:
- https://business.google.com adresinden **ücretsiz** işletme kaydı açın.
- Firma adı, telefon (0532 063 03 89), hizmet bölgesi (Gaziantep) girin.
- Kategori: "Temizlik hizmeti / Ev temizlik hizmeti".
- Gerçek iş fotoğrafları yükleyin (öncesi/sonrası çok işe yarar).
- **Müşterilerinizden Google yorumu isteyin** — yorum sayısı ve puanı sıralamayı doğrudan etkiler.

### 3. Google Search Console
- https://search.google.com/search-console adresine sitenizi ekleyin.
- `sitemap.xml` dosyasını gönderin (Sitemaps > `https://www.gaziantepapartmanvemerdiventemizligi.com/sitemap.xml`).
- "URL İnceleme" ile ana sayfayı dizine ekletin.

### 4. Google Maps embed'i gerçek konuma çevirin
Şu an haritalar Gaziantep geneli gösteriyor. Gerçek adresiniz/işaretiniz varsa:
- Google Maps'te işletmenizi bulun → "Paylaş" → "Harita yerleştir" → iframe kodunu kopyalayın.
- `index.html` ve `iletisim.html` içindeki `<iframe ... maps ...>` satırını bununla değiştirin.

### 5. Yorumları gerçek yapın
`index.html` içindeki müşteri yorumları örnek amaçlıdır. **Gerçek müşteri yorumlarıyla
değiştirin** (uydurma yorum Google tarafından cezalandırılabilir). Aynı şekilde schema'daki
`aggregateRating` (4.9 / 127) değerini gerçek Google puanınızla güncelleyin.

### 6. Backlink & yerel dizinler
- Gaziantep yerel rehberleri, apartman/site yönetim grupları, sektör dizinlerine kaydolun.
- Sosyal medya (Instagram, Facebook) hesapları açıp siteye link verin; `sameAs`
  schema alanına (index.html) bu linkleri ekleyin.

---

## ✅ Zaten Yapılmış SEO Optimizasyonları

- ✔️ Semantik HTML5 (`header, nav, main, section, article, footer`)
- ✔️ Her sayfaya özgün `title` + `meta description` + Open Graph etiketleri
- ✔️ Schema.org: **LocalBusiness (CleaningService)**, **Service**, **FAQPage**,
  **BlogPosting**, **BreadcrumbList**
- ✔️ H1–H6 hiyerarşisi; başlıklarda "Gaziantep + hizmet" kombinasyonları
- ✔️ Hedef anahtar kelimeler doğal yerleşim (merdiven/apartman/bina temizliği + mahalleler)
- ✔️ SEO uyumlu `alt` metinleri (görselleri eklediğinizde aktif olur)
- ✔️ `robots.txt` + `sitemap.xml`
- ✔️ `canonical` etiketleri (çift içerik cezasını önler)
- ✔️ Mobil-öncelikli, tam responsive, erişilebilir (skip-link, focus, aria, reduced-motion)
- ✔️ Coğrafi meta (`geo.region`, `geo.position`) — Gaziantep koordinatları

---

## ⚡ Performans (Lighthouse 95+ hedefi)

- Framework/kütüphane yok → JS son derece hafif.
- Görselleri **WebP** formatında ve sıkıştırılmış ekleyin (bkz. `GORSEL-EKLE-OKU.txt`).
- Google Fonts `preconnect` + `display=swap` ile yükleniyor. Tam kontrol isterseniz
  fontları indirip `assets/fonts/` altında self-host edebilirsiniz (opsiyonel).
- Görsellerde `loading="lazy"` (hero hariç) hazır.
- Öneri: hosting'de **gzip/brotli sıkıştırma** ve **tarayıcı önbelleği** açık olsun.

---

## 📞 Dönüşüm Özellikleri (hazır)

- Sabit (floating) **WhatsApp** ve **Ara** butonları — her sayfada.
- Teklif formu doğrudan **WhatsApp mesajına** dönüşüyor (ad, telefon, hizmet, adres, not).
- Sticky header'da telefon numarası ve WhatsApp butonu.
- Öncesi/sonrası sürgülü karşılaştırma (güven sinyali).

---

## 🎨 Tasarım Notları

- **Tema:** Yeşil + eko. Renkler `style.css` en üstteki `:root` değişkenlerinden
  tek noktadan değiştirilebilir.
- **İmza öğe:** "Merdiven basamağı" geometrisi (eyebrow işareti, süreç bölümü,
  CTA dekoru) — firmanın işine özgü, jenerik değil.
- **Fontlar:** Başlık *Bricolage Grotesque*, gövde *Manrope* (Türkçe karakter destekli).

---

© 2026 Mira Temizlik — Gaziantep Merdiven Temizliği.
