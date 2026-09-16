# RESTORAN PROJESİ: PROJE YÖNETİMİ VE TESLİMAT PLANI

Bu belge, $10.000 bütçeli, fotoğrafsız/tipografi odaklı ve yüksek performanslı restoran web sitesinin uçtan uca ajans üretim sürecini, zaman çizelgesini ve kilometre taşlarını (milestones) detaylandırmaktadır. Toplam proje süresi **6-7 Hafta** olarak öngörülmüştür.

## FAZ 1: Strateji ve Görsel Kimlik İnşası (Hafta 1)
Bu aşama, projenin dijital ruhunun belirlendiği kısımdır.

*   **Gün 1-2:** Hedef kitle (Erbaa yerel müşterisi ve transit yolcular) analizi ve menü veri yapısının (kategoriler, etiketler) incelenmesi.
*   **Gün 3-5:** Tipografi, negatif boşluk ve renk paletlerine dayalı 3 farklı "Moodboard" (Stil Panosu) hazırlanması.
*   **Teslimat:** Müşteri ile Moodboard sunum toplantısı ve nihai görsel konseptin onaylanması.

## FAZ 2: Mimari Tasarım ve Prototipleme (Hafta 2-3)
Kodlamaya geçmeden önce sitenin tüm kullanıcı deneyimi (UX) ve arayüzü (UI) kesinleştirilir.

*   **Hafta 2:** Sitenin iskeletini oluşturan Tel Çerçeve (Wireframe) çizimleri. Navigasyon ve "Call to Action" (Arama/Yol Tarifi) akışlarının planlanması.
*   **Hafta 3:** Seçilen Moodboard'a uygun, yüksek çözünürlüklü UI tasarımlarının (Figma) tamamlanması.
*   **Teslimat:** Mobil ve masaüstü uyumlu, tıklanabilir interaktif tasarım prototipinin sunumu ve onayı.

## FAZ 3: Frontend ve Backend Geliştirme (Hafta 4-5)
Onaylanan tasarımın, modern Jamstack mimarisiyle koda döküldüğü ve sistemlerin bağlandığı aşamadır.

*   **Hafta 4 (Frontend):** Astro ve Tailwind CSS ile arayüzün "Pixel-Perfect" (birebir) kodlanması. Framer Motion ile sayfa geçişleri ve mikro-etkileşimlerin entegrasyonu.
*   **Hafta 5 (Backend & CMS):** Sanity (Headless CMS) panelinin kurulması ve hazırda bulunan menü metinlerinin sisteme girilmesi. 
*   **Hafta 5 (API):** Google İşletme Profili senkronizasyonu, Uber derin bağlantıları ve otogar/transit rota algoritmalarının sisteme bağlanması.
*   **Teslimat:** Sitenin test sunucusunda (Staging) çalışır halinin müşteriye açılması.

## FAZ 4: Kalite Kontrol (QA), Test ve Yerel SEO (Hafta 6)
Sistem canlıya alınmadan önceki son rötuşlar ve stres testleri yapılır.

*   **Performans & Hız:** Core Web Vitals ve Lighthouse testlerinin yapılması (Hedef: 95+ Mobil Skor).
*   **Cihaz Testleri:** Playwright ile iPhone, Android, Tablet ve farklı masaüstü çözünürlüklerinde tipografi taşmalarının ve buton işlevlerinin test edilmesi.
*   **SEO Optimizasyonu:** `LocalBusiness` ve `Menu` JSON-LD şemalarının eklenmesi, bölgesel anahtar kelimeler için meta etiketlerin doğrulanması.

## FAZ 5: Yayına Alma ve Teslimat (Hafta 7)
Projenin dünyaya açıldığı ve kontrolün size devredildiği final adımıdır.

*   **Canlıya Alma:** Sistemin Vercel/Cloudflare Edge ağına taşınarak ana domain (alan adı) üzerinden yayına açılması.
*   **Eğitim:** Restoran personeline/yöneticisine Sanity CMS üzerinden menü fiyatlarını ve ürünlerini nasıl saniyeler içinde güncelleyeceklerinin uygulamalı eğitimi (1 Saatlik Video Toplantı).
*   **Teslimat:** Tüm kaynak kodların, Figma tasarım dosyalarının ve yönetim paneli şifrelerinin devri. Proje kapanışı.

---
**Not:** Geliştirme süreci boyunca her Cuma günü düzenli olarak ilerleme raporu (Weekly Sync) paylaşılacaktır.