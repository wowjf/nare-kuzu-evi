# RESTORAN PROJESİ: BACKEND MİMARİ VE ENTEGRASYON KAPSAMI

Bu belge, projenin veri yönetimini, dış servis bağlantılarını ve sunucu tarafı operasyonlarını tanımlar. Sistem, aylık bakım maliyetlerini minimize eden ve güvenliği en üst düzeye çıkaran "Serverless" (Sunucusuz) mimari üzerine inşa edilecektir.

## 1. VERİ YÖNETİMİ VE HEADLESS CMS

Geleneksel ve hantal veritabanları (MySQL, PHPMyAdmin vb.) yerine, doğrudan içerik dağıtım ağına (CDN) bağlı, yüksek güvenlikli bir Headless CMS kullanılacaktır.
*   **Menü Veritabanı (Şemalar):** Kategoriler, ürün isimleri, güncel fiyatlar ve etiketler (vegan, şefin tavsiyesi) yapılandırılmış JSON verisi olarak tutulacaktır.
*   **Tetikleyici (Webhook) Mantığı:** Panelde yapılan bir fiyat veya ürün değişikliği, sunucuda otomatik bir "build" (yeniden derleme) işlemi tetikler. Sistem yeni verileri alıp saniyeler içinde sayfaları statik olarak günceller. Bu mimari, sitenin her ziyaretçide veritabanına bağlanıp yavaşlamasını engeller.

## 2. API VE DIŞ SERVİS ENTEGRASYONLARI

Restoranın fiziksel konumunu dijital ulaşım ağlarıyla bağlayan dinamik yönlendirme servisleri arka planda şu şekilde kurgulanacaktır:

*   **Google Business Profile (GBP) API:** Restoranın anlık çalışma saatleri, resmi tatil/bayram kapanışları doğrudan doğrulanmış işletme profilinizden okunarak sitenin "footer" (alt bilgi) kısmıyla gerçek zamanlı senkronize edilir.
*   **Şehir İçi Ulaşım ve Taksi Yönlendirmeleri:** Kullanıcı "Taksi Çağır / Yol Tarifi Al" butonuna bastığında, müşterinin bulunduğu cihaz koordinatları alınarak parametrik linkler üretilir. Özellikle bölgedeki şehir içi hareketlilik göz önüne alınarak, Uber uygulaması üzerinden doğrudan sarı taksi çağrılmasını sağlayan derin bağlantı (deep-linking) uç noktaları kodlanacaktır.
*   **Şehirlerarası Ulaşım ve Transit Algoritmaları:** Erbaa lokasyonuna dışarıdan gelen müşteri trafiğini (transit veya ziyaretçi) doğru yönlendirebilmek kritik bir detaydır. Samsun - Erbaa hattı gibi güzergahlarda, Obilet üzerinden Erektaş Turizm veya Erbaa Seyahat gibi firmalarla terminale inen yolcuların, otogardan restorana en kısa yoldan ulaşmasını sağlayacak (yaya veya araçlı) dinamik harita rotalama algoritmaları API katmanında tanımlanacaktır. 

## 3. SERVERLESS VE EDGE MİMARİSİ

*   **Edge Functions (Sınır Fonksiyonları):** Ziyaretçinin konumuna göre anlık çalışan küçük kod parçacıklarıdır. Kullanıcının cihazına en yakın sunucu düğümünde (node) çalışarak harita ve yönlendirme verilerini sıfır gecikmeyle (latency) iletir.
*   **Mail ve İletişim Servisleri:** İleride eklenebilecek olası bir iletişim veya toplu organizasyon talep formu için, sunucu barındırma gerektirmeyen güvenli e-posta yönlendirme API'leri (Resend, SendGrid) kullanılacaktır.

## 4. GÜVENLİK VE ALTYAPI MALİYET OPTİMİZASYONU

*   **Saldırı Koruması (DDoS & Injection):** Arka planda sürekli çalışan geleneksel bir sunucu (Apache/Nginx) olmadığı ve sayfalar önceden derlendiği için sitenin hacklenmesi veya SQL Injection gibi saldırılara maruz kalması teknik olarak imkansız hale getirilmiştir.
*   **Sıfır Sunucu Maliyeti:** Tüm altyapı Vercel veya Cloudflare gibi modern platformların ücretsiz katmanlarına (free-tier) rahatlıkla sığacağı için, geleneksel hosting veya sunucu kiralama ücretleri ortadan kalkar.