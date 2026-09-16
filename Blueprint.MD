# RESTORAN PROJESİ: MASTER BLUEPRINT (ANA MİMARİ VE STRATEJİ PLANI)

Bu belge, $10.000 bütçeli restoran web projesinin tüm yapı taşlarını, geliştirme kurallarını ve entegrasyon haritasını tek bir çatı altında toplar. Geliştirici, tasarımcı ve müşteri bu belgeyi projenin "tek doğru kaynağı" (Single Source of Truth) olarak kabul eder.

## 1. PROJE KİMLİĞİ VE TEMEL HEDEFLER
*   **Odak:** Yerel SEO, yüksek hız, şablonsuz özgün tasarım.
*   **Tasarım Felsefesi:** Fotoğrafsız; tipografi, negatif boşluk ve mikro-etkileşim (animasyon) odaklı Editoryal/Brütalist yaklaşım. Yapay zeka stok görsellerinden (AI slop) kesinlikle kaçınılacaktır.
*   **Hedef Kitle:** Erbaa içi yerel müdavimler, şehir dışından gelen ziyaretçiler ve çevre illerden bölgeye transit geçiş yapan yolcular.

## 2. SİSTEM MİMARİSİ (THE STACK)
*   **Frontend (Ön Yüz):** Astro (Sıfır JS mimarisi ile ultra hızlı yükleme).
*   **Stil Motoru:** Tailwind CSS (Fluid Typography kuralları ile her ekranda esnek metinler).
*   **Hareket (Motion):** Framer Motion (Sayfa geçişleri ve menü listeleme animasyonları).
*   **Backend & CMS:** Sanity.io (Headless CMS - Sadece metin ve fiyat veri girişi).
*   **Hosting & CI/CD:** Vercel veya Cloudflare Pages (Serverless mimari, sıfır sunucu bakım maliyeti).

## 3. VERİ MODELİ (CMS ŞEMASI)
Sanity üzerinde oluşturulacak veri yapısının iskeleti:
*   `Menü Kategorisi` (Örn: Başlangıçlar, Ana Yemekler)
    *   `Ürün Adı` (String)
    *   `İçerik/Açıklama` (Text - İsteğe bağlı)
    *   `Fiyat` (Number)
    *   `Etiketler` (Array - Örn: Vegan, Acı, Şefin Tavsiyesi)
*   `Genel Ayarlar` (Çalışma saatleri istisnaları, üst bilgi duyuruları).

## 4. LOKASYON VE ULAŞIM ENTEGRASYONLARI
Mekana fiziksel trafik çekmek için kurulacak spesifik harita ve rota algoritmaları:
*   **Yerel Taksi & Şehir İçi Ulaşım:** Özellikle şehir içindeki hareketliliği yakalamak adına, Uber uygulaması üzerinden sarı taksi çağırmayı tetikleyen derin bağlantılar (Deep-links).
*   **Transit Yolcu Algoritması:** Samsun - Erbaa hattında seyahat eden veya otogarda inen yolcuları hedefleyen rota yönlendirmeleri. Erektaş Turizm veya Erbaa Seyahat gibi firmalarla terminale ulaşan müşterilerin doğrudan mekana yönlendirilmesi için yaya/araç navigasyon uç noktaları.
*   **Google İşletme Profili (GBP):** Sahipliği işletmede olan doğrulanmış profil üzerinden, adres ve çalışma saatlerinin LocalBusiness şeması ile koda senkronize edilmesi.

## 5. KESİN KURALLAR (STRICT CONSTRAINTS)
1.  **Görsel Kısıtlama:** Siteye hiçbir şekilde yapay zeka ile üretilmiş sahte yemek/mekan fotoğrafı eklenmeyecektir.
2.  **Performans Kısıtlaması:** Lighthouse mobil performans skoru derleme (build) aşamasında 95'in altına düşerse, sistem canlıya alımı otomatik olarak durduracaktır (CI/CD Pipeline kuralı).
3.  **Erişilebilirlik:** Tipografi odaklı olacağı için WCAG 2.1 AA standartlarına uygun renk kontrast oranları zorunludur.

## 6. TESLİMAT VE DEVİR
*   Tüm kaynak kodlar GitHub üzerinden teslim edilecek.
*   Figma tasarım token'ları ve dosyaları devredilecek.
*   CMS panel kullanımı için personele uzaktan eğitim verilecek.