# Kalkulator IPK & IPS — Teknik Industri UNSIKA

Website statis untuk menghitung IPS per semester dan IPK kumulatif mahasiswa Teknik Industri UNSIKA, mengikuti kurikulum 2024 dan skala penilaian UNSIKA (A = 4,00, turun 0,25 tiap tingkat).

Dibangun dengan HTML/CSS/JS murni (tanpa build tool), sehingga bisa langsung di-deploy ke GitHub Pages. Tampilan sudah responsive — menyesuaikan otomatis di HP (Android/iOS), tablet, maupun desktop.

## Struktur folder

```
pika-ipk/
├── index.html          -> halaman utama
├── .nojekyll             -> supaya GitHub Pages tidak memproses via Jekyll
└── assets/
    ├── css/style.css     -> termasuk breakpoint responsive untuk berbagai ukuran layar
    ├── js/app.js         -> data kurikulum + logika perhitungan
    └── img/              -> logo UNSIKA, HMTI, Sahitya Ardaya
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

## Dukungan berbagai device

Tampilan sudah dibuat responsive dari awal — layout, ukuran teks, dan tabel mata kuliah otomatis menyesuaikan lebar layar, jadi tetap nyaman dipakai di:

- HP Android/iOS (layar kecil, termasuk yang sangat sempit)
- Tablet
- Laptop/desktop

Tidak perlu setting tambahan apa pun; cukup buka link website-nya lewat browser HP (Chrome, dsb).

## Mengubah data kurikulum

Semua data mata kuliah, SKS, mata kuliah pilihan, dan skala bobot nilai ada di satu file:

```
assets/js/app.js
```

Cari bagian `kurikulum`, `mkPilihan`, dan `skalaNilai` di bagian atas file untuk mengubah data sesuai kebutuhan (misalnya kalau ada revisi kurikulum).

## Kontak

Himpunan Mahasiswa Teknik Industri (HMTI) — Fakultas Teknik UNSIKA
Kabinet Sahitya Ardaya
