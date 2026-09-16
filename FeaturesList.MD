# RESTORAN PROJESİ: ÖZELLİKLER LİSTESİ (FEATURES LIST)

Bu belge, web sitesinin canlıya alındığında barındıracağı tüm kullanıcı arayüzü, yönetim paneli ve arka plan işlevlerini listeler. Tüm özellikler, 10.000$'lık bütçe dahilinde performanstan ödün vermeden kurgulanmıştır.

## 1. Müşteri Deneyimi (Ön Yüz Özellikleri)

*   **Akıllı Menü Navigasyonu:** Kullanıcı menüde aşağı indikçe kategorilerin (Başlangıçlar, İçecekler vb.) ekranın üst kısmına yapışarak (sticky header) hızlı geçiş imkanı sunması.
*   **Dinamik Diyet Etiketleri:** Ürün isimlerinin yanında yer alan "Vegan", "Glütensiz", "Acı", "Şefin Tavsiyesi" gibi rozetlerin şık ve okunabilir vektörel (SVG) ikonlarla belirtilmesi.
*   **Sarı Taksi Entegrasyonu:** Özellikle şehir içi ulaşımı tercih eden müşteriler için, bulundukları konumu baz alarak tek tıkla Uber üzerinden sarı taksi çağırma uygulamasını tetikleyen derin bağlantı (deep-link) butonu.
*   **Transit Yolcu Yönlendirmesi:** Obilet üzerinden Erektaş Turizm, Erbaa Seyahat gibi otobüs firmalarıyla otogara inen yolcular için, terminalden restorana en kısa yaya veya araç rotasını çizen dinamik harita bağlantısı.
*   **Sıfır Gecikmeli Sayfa Yüklenmesi (Zero-Latency):** Kullanıcı tıklamadan hemen önce (hover durumunda) gideceği sayfanın arka planda yüklenerek ekranlar arası geçişin bir mobil uygulama kadar akıcı (instant) olması.

## 2. Yönetim Paneli (Sanity Headless CMS Özellikleri)

*   **Zahmetsiz Fiyat Güncelleme:** Tasarımı veya kodu bozma riski olmadan, basit bir form ekranından menüdeki ürün isimlerinin ve fiyatlarının anında değiştirilebilmesi.
*   **Kategori Yönetimi:** Mevsimsel menü değişikliklerinde yeni kategorilerin (örn. "Yazlık İçecekler") panelden saniyeler içinde eklenip, yayından kaldırılabilmesi.
*   **Duyuru ve Uyarı Bandı (Announcement Bar):** Bayram, resmi tatil veya özel etkinlik günlerinde sitenin en üst kısmında belirecek olan duyuru metninin panelden kolayca aktif/pasif edilebilmesi.

## 3. Teknik ve Yerel SEO Özellikleri (Arka Plan)

*   **Google İşletme Profili Senkronizasyonu:** Sitedeki alt bilgide (footer) yer alan saatlerin ve adresin, işletmenin Google Haritalar'daki verileriyle tutarlı çalışması.
*   **Görünmez Veri Şemaları (JSON-LD):** Arama motoru botlarının restoranın menüsünü, fiyat aralığını ve lokasyonunu eksiksiz anlayıp yerel arama sonuçlarında (Rich Snippets) öne çıkarmasını sağlayan yapılandırılmış veri mimarisi.
*   **Otomatik Görüntü Optimizasyonu:** Menüye eklenebilecek olası marka logoları veya vektörel grafiklerin sistem tarafından otomatik olarak sıkıştırılıp WebP/AVIF formatına dönüştürülmesi.
*   **%100 Güvenlik:** Sitenin sunucu tarafı statik olarak oluşturulduğu için veritabanı çökmesi veya dışarıdan hacklenme ihtimalinin sıfıra indirilmesi.