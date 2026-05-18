"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// ==========================================
// DATA BERITA
// ==========================================
const beritaList = [
  {
    id: 1,
    date: "-",
    title: "-",
    desc: "-",
    category: "-",
    icon: "🎯",
    bgGradient: "linear-gradient(135deg,#1a3a8f,#3a5fc0)",
    tagBg: "bg-[var(--color-gold-500)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  },
  {
    id: 2,
    date: "-",
    title: "-",
    desc: "-",
    category: "-",
    icon: "🏅",
    bgGradient: "linear-gradient(135deg,#065f46,#047857)",
    tagBg: "bg-[var(--color-navy-700)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  },
  {
    id: 3,
    date: "-",
    title: "-",
    desc: "-",
    category: "-",
    icon: "🤝",
    bgGradient: "linear-gradient(135deg,#7c2d12,#9a3412)",
    tagBg: "bg-[var(--color-gold-500)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  },
  {
    id: 4,
    date: "-",
    title: "-",
    desc: "-",
    category: "-",
    icon: "🏭",
    bgGradient: "linear-gradient(135deg,#4c1d95,#6d28d9)",
    tagBg: "bg-[var(--color-gold-500)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  },
  {
    id: 5,
    date: "-",
    title: "-",
    desc: "-",
    category: "-",
    icon: "🎙️",
    bgGradient: "linear-gradient(135deg,#b45309,#d97706)",
    tagBg: "bg-[var(--color-navy-900)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  },
  {
    id: 6,
    date: "-",
    title: "-",
    desc: "-",
    category: "-",
    icon: "🤲",
    bgGradient: "linear-gradient(135deg,#1e3a8a,#1e40af)",
    tagBg: "bg-[var(--color-gold-500)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  },
  {
    id: 7,
    date: "-",
    title: "-",
    desc: "-",
    category: "-",
    icon: "📌",
    bgGradient: "linear-gradient(135deg,#047857,#064e3b)",
    tagBg: "bg-[var(--color-gold-500)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  }
  // CONTOH: Cara menambahkan berita baru, hapus tanda /* dan */ untuk mengaktifkan
  /*
  {
    id: 7,
    date: "10 April 2025",
    title: "Judul Berita Baru Anda",
    desc: "Deskripsi singkat mengenai kegiatan atau berita terbaru yang ingin ditampilkan.",
    category: "INFO",
    icon: "📌",
    bgGradient: "linear-gradient(135deg,#047857,#064e3b)",
    tagBg: "bg-[var(--color-gold-500)]",
    tagText: "text-white",
    image: "/logo.png",
    link: "#"
  }
  */
];

export default function BeritaPage() {
  // ==========================================
  // PENGATURAN PAGINATION (HALAMAN)
  // ==========================================
  // State untuk menyimpan halaman yang sedang aktif
  const [currentPage, setCurrentPage] = useState(1);

  // Ubah angka ini untuk mengatur berapa berita yang tampil per halaman
  // Saat ini diset 3 agar contoh pagination terlihat, Anda bisa ubah jadi 6 atau 9
  const itemsPerPage = 3;

  // Menghitung total halaman (Jumlah Berita / itemsPerPage, dibulatkan ke atas)
  const totalPages = Math.ceil(beritaList.length / itemsPerPage);

  // Menentukan berita mana yang akan ditampilkan di halaman saat ini
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBerita = beritaList.slice(startIndex, startIndex + itemsPerPage);

  // Fungsi untuk berpindah halaman
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll otomatis ke atas saat pindah halaman
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* HEADER SECTION */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <span className="section-label mb-3 inline-block">Informasi Terkini</span>
          <h1 className="font-display font-extrabold text-[clamp(2.2rem,4vw,3.2rem)] text-[var(--color-navy-900)] leading-tight mb-4">
            Berita & Kegiatan HMTI
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-[1.05rem] leading-relaxed">
            Ikuti perkembangan terbaru, pencapaian, dan kegiatan menarik yang diselenggarakan oleh Himpunan Mahasiswa Teknik Industri FT UNSIKA.
          </p>
        </div>
      </section>

      {/* BERITA GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menggunakan currentBerita (berita yang sudah dipotong sesuai halaman) */}
            {currentBerita.map((berita) => (
              <Link key={berita.id} href={berita.link || "#"} target="_blank" rel="noopener noreferrer" className="news-card block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="relative h-[200px] w-full bg-gray-200">
                  <Image src={berita.image || "/logo.png"} alt={berita.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5"></div>
                  <div className={`absolute top-4 left-4 ${berita.tagBg} ${berita.tagText} text-[0.7rem] font-bold py-1.5 px-3.5 rounded-full tracking-[0.05em] uppercase z-10 shadow-sm`}>
                    {berita.category}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-[0.8rem] text-gray-500 mb-3">
                    <span>📅</span>
                    <span>{berita.date}</span>
                  </div>
                  <h4 className="font-display font-bold text-[var(--color-navy-900)] text-[1.1rem] leading-[1.4] mb-3 group-hover:text-[var(--color-gold-500)] transition-colors">
                    {berita.title}
                  </h4>
                  <p className="text-[0.88rem] text-gray-600 leading-[1.7] mb-6">
                    {berita.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[0.85rem] font-bold text-[var(--color-navy-700)] group-hover:text-[var(--color-gold-500)] transition-colors">
                    Baca Selengkapnya <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* KONTROL PAGINATION */}
          {/* Hanya tampilkan pagination jika total halaman lebih dari 1 */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center gap-2">
              {/* Tombol Previous */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[var(--color-navy-900)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ←
              </button>

              {/* Nomor Halaman */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold transition-colors ${currentPage === page
                    ? "bg-[var(--color-navy-900)] text-white"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[var(--color-navy-900)]"
                    }`}
                >
                  {page}
                </button>
              ))}

              {/* Tombol Next */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[var(--color-navy-900)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
