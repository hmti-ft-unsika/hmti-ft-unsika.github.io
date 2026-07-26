// Data Satuan Kredit Prestasi (SKP) — mengikuti Keputusan Rektor No. 9/UN64/KPT/2024
// dan struktur baris pada Berita Acara Verifikasi SKP (template resmi Prodi Teknik Industri).
// `row` = nomor baris pada sheet "SKP TI" di template.xlsx (tempat nilai H diisi).

const SKP_CATEGORIES = [
  {
    no: 1,
    title: "Menjadi Pengurus Organisasi Mahasiswa",
    subtotalRow: 24,
    items: [
      { letter: "a", label: "Sebagai Ketua BEM Universitas/Fakultas atau Ketua HIMA", skor: 50, satuan: "Per Tahun/Periode", row: 21 },
      { letter: "b", label: "Sebagai Wakil Ketua/Sekretaris/Bendahara", skor: 30, satuan: "Per Tahun/Periode", row: 22 },
      { letter: "c", label: "Kadiv/Koordinator/Anggota", skor: 10, satuan: "Per Tahun/Periode", row: 23 },
    ],
  },
  {
    no: 2,
    title: "Mengikuti Kegiatan Seminar",
    subtotalRow: 30,
    items: [
      { letter: "a", label: "Sebagai Presenter Oral dalam Seminar Internasional", skor: 100, satuan: "Per kegiatan", row: 26 },
      { letter: "b", label: "Sebagai Panitia Seminar Nasional", skor: 50, satuan: "Per kegiatan", row: 27 },
      { letter: "c", label: "Sebagai Peserta Seminar Internasional", skor: 30, satuan: "Per kegiatan", row: 28 },
      { letter: "d", label: "Sebagai Peserta/Anggota Seminar Nasional", skor: 20, satuan: "Per kegiatan", row: 29 },
    ],
  },
  {
    no: 3,
    title: "Mengikuti Kejuaraan",
    subtotalRow: 38,
    items: [
      { letter: "a", label: "Juara 1, 2, 3 tingkat Internasional", skor: 100, satuan: "Per kegiatan", row: 32 },
      { letter: "b", label: "Juara 1, 2, 3 tingkat Nasional", skor: 75, satuan: "Per kegiatan", row: 33 },
      { letter: "c", label: "Juara 1, 2, 3 tingkat Regional", skor: 60, satuan: "Per kegiatan", row: 34 },
      { letter: "d", label: "Juara 1, 2, 3 tingkat Kabupaten", skor: 50, satuan: "Per kegiatan", row: 35 },
      { letter: "e", label: "Termasuk 10 besar", skor: 30, satuan: "Per kegiatan", row: 36 },
      { letter: "f", label: "Mengikuti perlombaan (peserta)", skor: 20, satuan: "Per kegiatan", row: 37 },
    ],
  },
  {
    no: 4,
    title: "Mengikuti Lomba Karya Ilmiah*",
    subtotalRow: 45,
    items: [
      { letter: "a", label: "Juara 1, 2, 3 LKTI tingkat Internasional", skor: 100, satuan: "Per artikel/Proposal", row: 40 },
      { letter: "b", label: "Juara 1, 2, 3 LKTI tingkat Nasional", skor: 75, satuan: "Per artikel/Proposal", row: 41 },
      { letter: "c", label: "Juara 1, 2, 3 LKTI tingkat Regional", skor: 60, satuan: "Per artikel/Proposal", row: 42 },
      { letter: "d", label: "Juara 1, 2, 3 LKTI tingkat Kabupaten/Kota", skor: 50, satuan: "Per artikel/Proposal", row: 43 },
      { letter: "e", label: "Mengikuti perlombaan (peserta)", skor: 25, satuan: "Per artikel/Proposal", row: 44 },
    ],
  },
  {
    no: 5,
    title: "Melakukan Publikasi Karya Ilmiah (nama tercantum sebagai author)",
    subtotalRow: 50,
    items: [
      { letter: "a", label: "Berperan dalam publikasi artikel di jurnal Scopus", skor: 100, satuan: "Per artikel", row: 47 },
      { letter: "b", label: "Berperan dalam publikasi artikel di jurnal Sinta 1-3", skor: 50, satuan: "Per artikel", row: 48 },
      { letter: "c", label: "Berperan dalam publikasi artikel di jurnal Sinta 4-6", skor: 30, satuan: "Per artikel", row: 49 },
    ],
  },
  {
    no: 6,
    title: "Mengikuti Kegiatan MBKM Kompetitif",
    subtotalRow: 55,
    items: [
      { letter: "a", label: "IISMA", skor: 100, satuan: "Per semester", row: 52 },
      { letter: "b", label: "PMM", skor: 75, satuan: "Per semester", row: 53 },
      { letter: "c", label: "MBKM Kompetitif lainnya", skor: 50, satuan: "Per semester", row: 54 },
    ],
  },
  {
    no: 7,
    title: "Mengikuti Program Kreativitas Mahasiswa/Wirausaha/Hibah lainnya",
    subtotalRow: 61,
    items: [
      { letter: "a", label: "Juara Pimnas", skor: 100, satuan: "Per kegiatan", row: 57 },
      { letter: "b", label: "Lolos masuk Pimnas", skor: 75, satuan: "Per kegiatan", row: 58 },
      { letter: "c", label: "Berhasil mendapat pendanaan PKM/hibah lainnya", skor: 50, satuan: "Per kegiatan", row: 59 },
      { letter: "d", label: "Membuat Proposal", skor: 20, satuan: "Per kegiatan", row: 60 },
    ],
  },
  {
    no: 8,
    title: "Memiliki Kemampuan Bahasa Inggris*",
    subtotalRow: 67,
    items: [
      { letter: "a", label: "Skor SEP-T > 550", skor: 100, satuan: "Selama Kuliah", row: 63 },
      { letter: "b", label: "Skor SEP-T > 500", skor: 75, satuan: "Selama Kuliah", row: 64 },
      { letter: "c", label: "Skor SEP-T > 450", skor: 50, satuan: "Selama Kuliah", row: 65 },
      { letter: "d", label: "Skor SEP-T > 425", skor: 20, satuan: "Selama Kuliah", row: 66 },
    ],
  },
  {
    no: 9,
    title: "Memiliki Kemampuan Bahasa Asing Lainnya",
    subtotalRow: 69,
    items: [
      { letter: "", label: "Memiliki kemampuan bahasa asing lainnya", skor: 100, satuan: "Selama Kuliah", row: 68 },
    ],
  },
  {
    no: 10,
    title: "Berperan dalam Kepanitiaan Kegiatan Mahasiswa",
    subtotalRow: 74,
    items: [
      { letter: "a", label: "Sebagai Ketua/Wakil Ketua/Sekretaris/Bendahara", skor: 50, satuan: "Per kegiatan", row: 71 },
      { letter: "b", label: "Sebagai anggota kepanitiaan dengan peserta > 200 orang", skor: 30, satuan: "Per kegiatan", row: 72 },
      { letter: "c", label: "Sebagai asisten Praktikum", skor: 50, satuan: "Per semester", row: 73 },
    ],
  },
  {
    no: 11,
    title: "Memiliki Sertifikat Kompetensi BNSP Sesuai Bidangnya",
    subtotalRow: 79,
    items: [
      { letter: "1", label: "Sertifikat kompetensi (K3, BNSP, dsb.)", skor: 100, satuan: "Per Keahlian", row: 76 },
      { letter: "2", label: "Sertifikasi lainnya yang setara BNSP", skor: 100, satuan: "Per Keahlian", row: 77 },
      { letter: "3", label: "Sertifikat Pelatihan/Workshop/Webinar sejenis", skor: 20, satuan: "Setiap Kegiatan", row: 78 },
    ],
  },
];

// Ambang batas minimal SKP sesuai Keputusan Rektor No. 9/UN64/KPT/2024
const SKP_THRESHOLDS = {
  sarjana: 250,
  diploma: 200,
  angkatanLama: 150, // mahasiswa angkatan sebelum tahun 2021
};
