# RESTORAN PROJESİ: FRONTEND MİMARİ VE GELİŞTİRME KAPSAMI

Bu belge, fotoğrafsız, tipografi odaklı ve yüksek performans hedefli restoran projesinin ön yüz (frontend) geliştirme süreçlerini, teknoloji yığınını ve entegrasyon noktalarını detaylandırmaktadır. Bütçe ve hedefler (10.000$ / Yerel SEO ve Dönüşüm) doğrultusunda en modern "Jamstack" standartları benimsenmiştir.

## 1. TEKNOLOJİ YIĞINI (TECH STACK)

*   **Ana Çatı (Framework):** **Astro** 
    *   *Neden?* Astro'nun "Zero-JS" (Sıfır JavaScript) mimarisi sayesinde site şimşek hızında açılır. Sadece ihtiyaç duyulan yerlerde (örn. mobil menü veya harita) mikro JS yüklenir. Bu, Core Web Vitals metriklerinde 100/100 almamızı sağlar.
*   **Stil ve Düzen:** **Tailwind CSS + CSS Variables**
    *   *Neden?* Tasarımdaki brütalist/editoryal yaklaşımı koda dökerken tam kontrol sağlar. Akışkan tipografi (Fluid Typography) kullanılarak büyük başlıkların her ekran boyutuna milimetrik uyum sağlaması garanti edilir.
*   **Animasyon ve Mikro-Etkileşimler:** **Framer Motion**
    *   *Neden?* Görsel (fotoğraf) eksiğini kapatmak için sayfa geçişleri, menü kategorilerinin akıcı listelenmesi ve buton etkileşimleri "zanaat ürünü" hissi verecek şekilde canlandırılacaktır.
*   **İçerik Yönetimi (CMS):** **Sanity.io (Headless CMS)**
    *   *Neden?* Menü değişiklikleri için sadece veriyi tutan, arayüzü bozma riski sıfır olan hafif ve güvenli sistem.

## 2. MODÜLER BİLEŞEN MİMARİSİ (COMPONENT STRUCTURE)

### 2.1. Tipografik Kahraman Alanı (Hero Section)
*   Büyük, kontrastlı, özel lisanslı fontların kullanıldığı karşılama alanı.
*   Sayfa yüklendiğinde metinlerin şık bir fade-up (aşağıdan yukarı beliren) animasyonla girmesi.
*   Ana "Call to Action" (Rezervasyon/Yol Tarifi) butonunun her cihazda başparmak erişim alanında (Thumb Zone) sabitlenmesi.

### 2.2. Dinamik Menü Izgarası (Grid)
*   Headless CMS'den gelen verilerin (Ürün Adı, Fiyat, İçerik, Etiketler) CSS Grid kullanılarak gazete mizanpajı mantığında dizilmesi.
*   Kullanıcı aşağı kaydırdıkça menü kategorilerinin ekrana yapışması (Sticky Headers).
*   Glütensiz, Vegan gibi diyet etiketleri için minimal SVG ikon veya rozet tasarımlarının kodlanması.

## 3. ULAŞIM, HARİTA VE LOKASYON ENTEGRASYONLARI

Kullanıcıların mekana fiziksel olarak en hızlı şekilde ulaşabilmesi için statik bir haritadan fazlası kodlanacaktır:

*   **Akıllı Harita API Entegrasyonu:** Müşteri cihazına göre otomatik olarak Google Maps veya Apple Maps uygulamasına rota çizen dinamik butonlar.
*   **Transit ve Taksi Yönlendirmeleri:** Sadece özel araçlar için değil; bulundukları noktadan sarı taksi çağırmak isteyenler için **Uber derin bağlantıları (Deep Links)** ve şehirlerarası seyahat eden / otogar üzerinden transit geçen müşteriler için toplu taşıma bağlantılı lokasyon algoritmaları entegre edilecektir.
*   **Google İşletme Profili Senkronizasyonu:** Sitedeki adres, Google Maps üzerindeki verilerle arka planda eşzamanlı çalışacak şekilde kurgulanacaktır.

## 4. YEREL SEO VE SEMANTİK KODLAMA

Arama motorlarında bölgesel olarak öne çıkmak için görsel arayüzün arkasında şu yapılar kurulacaktır:

*   **JSON-LD Şemaları:** `LocalBusiness`, `Restaurant` ve `Menu` şemaları. (Arama motorlarına "Biz buradayız, menümüz ve fiyatlarımız bunlar" demenin makine dilindeki yolu).
*   **Semantik HTML5 Tag'leri:** Ekran okuyucular (Erişilebilirlik - A11y) ve arama botları için içeriklerin `<article>`, `<section>`, `<nav>` gibi doğru etiketlerle kodlanması.
*   **Meta Etiketleri:** İlçe ve mahalle bazlı hedeflemeler için dinamik OpenGraph (OG) ve Twitter Card etiketlerinin oluşturulması.

## 5. TEST, PERFORMANS VE YAYIN

*   **Kalite Kontrol (QA):** Playwright ile otomatik cihaz testleri (farklı mobil ekranlarda tipografik taşmaların kontrolü).
*   **Dağıtım (Deployment):** Vercel veya Cloudflare Pages küresel CDN ağı üzerinden sunucu yanıt süresinin (TTFB) 50ms altına düşürülmesi.
*   **Performans Hedefi:** Lighthouse testlerinde %95+ performans, erişilebilirlik ve SEO skorları garanti edilecektir.