# Kalkulator SKP — Teknik Industri UNSIKA

Website statis untuk menghitung Satuan Kredit Prestasi (SKP) mahasiswa sesuai
Keputusan Rektor UNSIKA Nomor 9/UN64/KPT/2024, dan mengekspor hasilnya ke
Berita Acara Verifikasi SKP dalam format Excel (`.xlsx`) — memakai layout dan
format yang sama persis dengan template resmi Prodi Teknik Industri.

Seluruhnya berjalan di browser (tidak butuh server/backend), jadi bisa
di-hosting gratis lewat **GitHub Pages**.

## Struktur file

```
skp-calculator/
├── index.html          # halaman utama
├── style.css            # tampilan
├── app.js                # logika hitung skor + ekspor Excel
├── data.js               # daftar kategori & skor (dari lampiran SK Rektor)
├── assets/
│   └── template.xlsx     # template resmi Berita Acara SKP (jangan diubah namanya)
└── README.md
```

## Cara deploy ke GitHub Pages

1. Buat repository baru di GitHub (misalnya `kalkulator-skp-ti`).
2. Unggah semua file di folder ini (pertahankan strukturnya — file
   `assets/template.xlsx` **harus** ikut diunggah, karena situs membacanya
   langsung saat tombol unduh ditekan).
   - Lewat web: buka repo → **Add file → Upload files** → seret semua file/folder.
   - Lewat command line:
     ```bash
     git init
     git add .
     git commit -m "Kalkulator SKP TI UNSIKA"
     git branch -M main
     git remote add origin https://github.com/<username>/<nama-repo>.git
     git push -u origin main
     ```
3. Di repo GitHub, buka **Settings → Pages**.
4. Pada **Build and deployment → Source**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu **Save**.
6. Tunggu 1–2 menit, situs akan aktif di:
   `https://<username>.github.io/<nama-repo>/`

## Cara pakai

1. Isi Nama, NPM, Dosen Verifikasi, dan jenjang (Sarjana/Diploma) di bagian
   **Identitas Mahasiswa**.
2. Isi jumlah/frekuensi tiap kegiatan yang pernah diikuti pada bagian
   **Daftar Kegiatan** — skor tiap baris dan total langsung terhitung otomatis.
3. Klik **Unduh Excel (.xlsx)** untuk mengunduh Berita Acara Verifikasi SKP
   yang sudah terisi, siap dicetak/dilampirkan ke komisi skripsi.

## Menambah atau mengubah bobot skor

Semua kategori dan skor didefinisikan di `data.js`. Jika Prodi/Rektorat
memperbarui pedoman SKP, cukup ubah angka `skor` atau tambah/ubah `items`
pada file tersebut — tampilan dan perhitungan akan menyesuaikan otomatis.

## Catatan

- Kolom H21–H78 pada `template.xlsx` (skor tiap kegiatan) diisi otomatis dari
  input di website; kolom lain (uraian, syarat dokumen) tidak diubah supaya
  format resmi tetap terjaga.
- Rumus **Jumlah Skor Akhir SKP** (sel `E82`) pada template asli menjumlahkan
  sub-total Kategori 4 (Lomba Karya Ilmiah, sel `H45`) dua kali. Skrip ini
  memperbaikinya secara otomatis pada file yang diunduh agar totalnya akurat.
