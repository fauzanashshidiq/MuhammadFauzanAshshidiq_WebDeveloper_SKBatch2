# Sekolah Karir - Open Recruitment Landing Page (Batch 2)

Mini assignment **Web Developer - Sekolah Karir Batch 2**.

Project ini merupakan halaman _recruitment landing page section_ yang responsif untuk menampilkan daftar posisi terbuka di Sekolah Karir Batch 2, dilengkapi dengan fitur penyaringan divisi, pencarian posisi/keahlian, _progressive disclosure_ (_load more_), modal detail posisi, bagian _About Program_, _FAQ accordion_, serta _Call to Action (CTA)_.

---

**Link Live Demo:** [https://muhammad-fauzan-ashshidiq-web-devel.vercel.app/](https://muhammad-fauzan-ashshidiq-web-devel.vercel.app/)

---

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Cara Menjalankan Project

1. **Clone repository dan masuk ke direktori project:**

   ```bash
   git clone <repository-url>
   cd MuhammadFauzanAshshidiq_WebDeveloper_SKBatch2
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka URL lokal yang muncul di terminal (`http://localhost:5173`).

---

## Struktur Folder

```text
src/
├── components/
│   ├── AboutSection.jsx       # Penjelasan value proposition program
│   ├── FaqSection.jsx         # Accordion pertanyaan yang sering ditanyakan
│   ├── Footer.jsx             # Footer halaman
│   ├── Navbar.jsx             # Navigasi responsif (Desktop & Mobile menu)
│   ├── RecruitmentSection.jsx # Section utama (Hero, Filter, Search, Grid, CTA)
│   ├── RoleCard.jsx           # Kartu masing-masing posisi terbuka
│   └── RoleModal.jsx          # Modal detail posisi & konfirmasi pendaftaran
├── data/
│   └── roles.js               # Mock data 29 posisi terbuka & 6 kategori divisi
├── App.jsx                    # Root layout komponen
├── index.css                  # Konfigurasi dasar Tailwind CSS
└── main.jsx                   # Entry point aplikasi React
```

---

## Keputusan Utama (Product & Technical Decisions)

1. **Penyaringan Divisi & Pencarian Real-Time (_Filter & Search_)**
   Terdapat **29 posisi terbuka** yang tersebar di **6 divisi** (_AI & Data_, _Engineering & Product_, _Creative & Content_, _Community & Growth_, _People & Culture_, serta _Operations & Admin_). Agar kandidat tidak kesulitan mencari peran yang relevan, disediakan tab filter per divisi dan kolom pencarian instan berdasarkan nama posisi maupun _skill tag_, lengkap dengan _empty state_ dan tombol _Reset Filter_.

2. **_Progressive Disclosure_ (Tombol "Tampilkan Lebih Banyak / Lebih Sedikit")**
   Menampilkan 29 kartu sekaligus pada tampilan awal akan membuat halaman terlalu panjang (terutama di perangkat _mobile_) dan membuat bagian informasi penting di bawahnya tertutup terlalu jauh. Oleh karena itu, tampilan awal dibatasi pada **6 posisi pertama** dengan kontrol _"Tampilkan Lebih Banyak"_ dan _"Tampilkan Lebih Sedikit"_.

3. **Modal Detail Posisi (`RoleModal`)**
   Setiap `RoleCard` memiliki tombol CTA _"Lamar Posisi"_ yang membuka modal ringkasan peran, tipe kerja, lokasi, serta keahlian utama sebelum mengarahkan kandidat ke formulir pendaftaran.

4. **Konteks Pendukung (_About Program_ & _FAQ_) Sebelum Bottom CTA**
   Kandidat sering kali membutuhkan konteks singkat mengenai budaya kerja dan alur seleksi sebelum memutuskan melamar. Penambahan bagian _Tentang Program_ dan _FAQ_ tepat sebelum _Bottom CTA Banner_ membantu menjawab pertanyaan umum secara langsung di halaman yang sama.

5. **Desain Responsif & Pemisahan Data dari UI**
   - Layout dirancang _mobile-first_: grid posisi beradaptasi dari `1 kolom` (mobile), `2 kolom` (tablet), hingga `3 kolom` (desktop), dilengkapi menu navigasi _dropdown_ pada layar kecil dan warna latar selang-seling (`#FAF7F2` & `slate-50`) untuk memperjelas hierarki visual antar-bagian.
   - Seluruh _mock data_ dipisahkan di `src/data/roles.js` agar komponen UI tetap bersih, modular, dan mudah dipelihara.

---

## Penggunaan AI & Tools

Pengerjaan project ini dibantu oleh **AI Coding Assistant (Google Antigravity / Gemini)** untuk:

- Menyusun dan merapikan _mock data_ deskripsi serta _skill tags_ untuk 29 posisi.
- Membantu menangani _UX/product reasoning_ (seperti solusi _progressive disclosure_ untuk menangani 29 kartu posisi dan pemilihan kontras warna latar).
- Meriksa komponen ui agar responsif dan perapian dokumentasi `README.md`.

Seluruh arsitektur komponen, _state management_, _styling_ responsif, serta alur kode dipahami, disesuaikan, dan diverifikasi secara langsung.
