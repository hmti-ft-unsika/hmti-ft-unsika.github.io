# Kalkulator IPK & IPS — Teknik Industri UNSIKA

Website statis untuk menghitung IPS per semester dan IPK kumulatif mahasiswa Teknik Industri UNSIKA, mengikuti kurikulum 2024 dan skala penilaian UNSIKA (A = 4,00, turun 0,25 tiap tingkat).

Dibangun dengan HTML/CSS/JS murni (tanpa build tool), sehingga bisa langsung di-deploy ke GitHub Pages dan bisa diinstall sebagai aplikasi di Android (PWA).

## Struktur folder

```
pika-ipk/
├── index.html          -> halaman utama
├── manifest.json        -> konfigurasi PWA (nama, ikon, warna)
├── sw.js                -> service worker (cache offline)
├── .nojekyll             -> supaya GitHub Pages tidak memproses via Jekyll
└── assets/
    ├── css/style.css
    ├── js/app.js         -> data kurikulum + logika perhitungan
    └── img/              -> logo UNSIKA, HMTI, Sahitya Ardaya, ikon PWA
```

## Cara deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `kalkulator-ipk`.
2. Upload seluruh isi folder ini ke repo tersebut (lewat GitHub Desktop, web upload, atau `git`):

   ```bash
   git init
   git add .
   git commit -m "Kalkulator IPK & IPS Teknik Industri UNSIKA"
   git branch -M main
   git remote add origin https://github.com/USERNAME/kalkulator-ipk.git
   git push -u origin main
   ```

3. Di repo GitHub, buka **Settings → Pages**.
4. Pada bagian **Source**, pilih branch `main` dan folder `/ (root)`.
5. Klik **Save**. Tunggu 1–2 menit, GitHub akan memberi link seperti:

   ```
   https://USERNAME.github.io/kalkulator-ipk/
   ```

6. Buka link itu — website sudah live.

> Catatan: PWA (install ke HP, mode offline) hanya aktif kalau diakses lewat **HTTPS**. GitHub Pages sudah otomatis HTTPS, jadi tidak perlu setting tambahan.

## Cara install di Android (PWA)

Setelah website live di GitHub Pages:

1. Buka link website-nya di **Chrome** (Android).
2. Chrome akan menampilkan banner "Install Aplikasi" di halaman (atau tombol otomatis di address bar).
3. Tekan **Install** — aplikasi akan muncul di homescreen HP seperti aplikasi biasa, lengkap dengan ikon logo HMTI.
4. Aplikasi tetap bisa dibuka meski koneksi internet lemah/offline, karena file-nya sudah di-cache oleh service worker.

Kalau banner install tidak muncul otomatis, mahasiswa juga tetap bisa install manual lewat menu **⋮ (titik tiga) → Tambahkan ke layar Utama / Install aplikasi** di Chrome.

## Mengubah data kurikulum

Semua data mata kuliah, SKS, mata kuliah pilihan, dan skala bobot nilai ada di satu file:

```
assets/js/app.js
```

Cari bagian `kurikulum`, `mkPilihan`, dan `skalaNilai` di bagian atas file untuk mengubah data sesuai kebutuhan (misalnya kalau ada revisi kurikulum).

## Kontak

Himpunan Mahasiswa Teknik Industri (HMTI) — Fakultas Teknik UNSIKA
Kabinet Sahitya Ardaya
