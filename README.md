# 🚀 Dotnet E-Commerce Demo

**.NET 9 (Backend)** ve **React + TypeScript (Frontend)** ile geliştirilmiş, **Bulut Tabanlı (Cloud Native)** tam yığın e-ticaret uygulaması.

Bu proje **Google Cloud Platform** üzerinde canlı olarak çalışmaktadır. Modern yazılım geliştirme prensiplerine ve **Clean Architecture** yapısına uygun olarak tasarlanmıştır.

## 🔗 Canlı Demo (Live Links)

| Servis | URL | Durum |
| :--- | :--- | :--- |
| **Frontend** (Firebase) | [https://dotnet-ecommerce-demo.web.app](https://dotnet-ecommerce-demo.web.app) | 🟢 Aktif |
| **Backend API** (Cloud Run) | [https://dotnet-ecommerce-demo-815860080202.europe-west3.run.app/api/](https://dotnet-ecommerce-demo-815860080202.europe-west3.run.app/api/) | 🟢 Aktif |
| **Swagger UI** | *Sadece Development ortamında aktiftir* | 🟡 Dev Only |

## 🛠 Teknolojiler ve Mimari

### Backend (.NET 9)
* **Framework:** ASP.NET Core Web API
* **Veritabanı:** PostgreSQL (Entity Framework Core)
* **Kimlik Doğrulama:** .NET Identity (JWT Auth)
* **Containerization:** Docker
* **Cloud:** Google Cloud Run (Serverless Deployment)

### Frontend (React)
* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite
* **UI Kütüphanesi:** Material UI (MUI)
* **State Management:** Redux Toolkit
* **HTTP Client:** Axios
* **Hosting:** Firebase Hosting

## 📂 Proje Yapısı

```bash
dotnet_e-commerce.sln
├── API/                 # .NET 9 Web API + Dockerfile
└── Client/              # React + Vite Projesi
```

## 🚀 Yerel Kurulum (Local Development)

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler
- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (LTS Sürümü)
- [PostgreSQL](https://www.postgresql.org/) (veya Docker üzerinde çalışan bir instance)

### 1. Backend Kurulumu (API)

1.  `API` klasörüne gidin.
2.  `appsettings.json` dosyasındaki `ConnectionStrings` bölümünü kendi yerel PostgreSQL sunucunuza göre düzenleyin.
3.  Veritabanını oluşturun ve migration'ları uygulayın:

```bash
cd API
dotnet restore
dotnet ef database update
dotnet run
```

### 2. Frontend Kurulumu (Client)

1.  `Client` klasörüne gidin.
2.  Bağımlılıkları yükleyin ve projeyi başlatın:

```bash
cd Client
npm install
npm run dev
```

## ☁️ Yayına Alma (Deployment) Mimarisi

Bu proje, CI/CD süreçlerine uygun modern bir bulut mimarisine sahiptir.

### Backend (Google Cloud Run)
Backend projesi **Docker** kullanılarak container haline getirilmiştir.
1.  `Dockerfile` ile imaj oluşturulur.
2.  Kod GitHub'a pushlandığında Google Cloud Build tetiklenir (veya manuel build alınır).
3.  **Cloud Run** servisi yeni versiyonu otomatik olarak yayına alır (Serverless).

### Frontend (Firebase Hosting)
Frontend projesi statik dosyalar halinde derlenir ve CDN üzerinden sunulur.

**Deploy Komutları:**
```bash
cd Client
npm run build      # Vite ile production build (dist klasörü oluşturur)
firebase deploy    # Dosyaları Firebase Hosting'e yükler
```

## ✨ Özellikler

* 🔐 **Kimlik Doğrulama:** JWT (JSON Web Token) tabanlı güvenli giriş ve kayıt sistemi.
* 🛒 **Sepet Yönetimi:** Redux Toolkit ile dinamik sepet işlemleri (ekle, çıkar, miktar güncelle).
* 📦 **Sipariş Süreci:** Çok adımlı (Checkout Wizard) sipariş ekranı (Adres -> Ödeme -> Özet).
* 💳 **Ödeme Entegrasyonu:** Mock (Test) ödeme sistemi.
* 📱 **Responsive Tasarım:** Mobil ve masaüstü uyumlu modern arayüz (Material UI).
* 🌍 **Hata Yönetimi:** Merkezi hata yakalama ve kullanıcı dostu hata mesajları.

## 📝 Lisans

Bu proje [MIT](LICENSE) lisansı ile lisanslanmıştır.