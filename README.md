# dotnet_e-commerce_demo

.NET 9 + React + TypeScript ile geliştirilmiş tam yığın e-ticaret uygulaması.

## Proje Yapısı

```
dotnet_e-commerce.sln
API/         # .NET 9 Web API (Backend)
Client/      # React + TypeScript + Vite (Frontend)
```

## Başlangıç

### Gereksinimler

- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- [Node.js (>=18.x)](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) veya [npm](https://www.npmjs.com/)

### Backend (API) Kurulumu

```sh
cd API
dotnet restore
dotnet ef database update   # Eğer EF Core migration kullanıyorsanız
dotnet run
```

API varsayılan olarak `http://localhost:5032` adreslerinde çalışır.

### Frontend (Client) Kurulumu

```sh
cd Client
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Özellikler

- JWT ile kimlik doğrulama
- Ürün listeleme ve detayları
- Sepet yönetimi
- Modern React (Vite, TypeScript, MUI)
- Entity Framework Core ile SQLite veritabanı

