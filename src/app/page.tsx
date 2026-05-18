"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const programKerjaList = [
  {
    title: "BINDES (IVD)",
    category: "Hubungan Luar & Riset",
    desc: "Program bina desa yang berfokus pada inovasi teknologi FarmShield untuk pengendalian hama ramah lingkungan serta sosialisasi motivasi pendidikan tinggi bagi siswa kelas XII.",
    linkText: "Selengkapnya",
    link: "https://www.instagram.com/binadesa_hmtiftunsika2026?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    title: "SYNERGY",
    category: "Pendidikan & Riset",
    desc: "Seminar nasional dengan fokus pada perkembangan sains dan teknologi, seperti Internet of Things (IoT), Big Data, Robotika, dan Artificial Intelligence (AI).",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "IEC",
    category: "Pendidkan",
    desc: "Rangkaian kegiatan pengenalan akademik, organisasi, dan pengembangan soft skill mahasiswa Teknik Industri FT Unsika yang dikemas dalam tiga tahap: Pra-IEC, Seminar, dan Camp Utama.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "Ipedia",
    category: "Pendidikan",
    desc: "Konten edukatif melalui Instagram dan TikTok mengenai peminatan, prospek kerja, dan perangkat lunak di lingkup Teknik Industri.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "MC",
    category: "Pendidikan",
    desc: "Program pelatihan pengembangan minat mahasiswa dalam mempelajari software pendukung akademik dan keterampilan digital di bawah bimbingan mentor berpengalaman.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "Sikap",
    category: "Pendidikan",
    desc: "Wadah pengembangan soft skill organisasi, kepanitiaan, dan kesekretariatan melalui forum diskusi serta uji kompetensi untuk mengukur kemampuan peserta.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "Kastrat",
    category: "Riset",
    desc: "Program pengkajian isu strategis yang dilakukan melalui tahap pemilihan masalah, riset data tervalidasi, diskusi evaluasi, hingga publikasi hasil kajian di media sosial.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "T2I",
    category: "Riset",
    desc: "Pelatihan mengenai cara membuat Karya Tata Tulis Ilmiah.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "Pika",
    category: "Riset",
    desc: "Sistem basis data berbasis website terpadu yang menyediakan materi perkuliahan, panduan akademik, dan software pendukung bagi mahasiswa Teknik Industri FT Unsika dalam satu wadah terstruktur.",
    linkText: "Akses Pika",
    link: "https://pikahmtiftunsika.great-site.net/index.php",
  },
  {
    title: "BPC",
    category: "Industri Kreatif",
    desc: "Kompetisi pengembangan ide bisnis inovatif dan strategis bagi mahasiswa yang mencakup tahap penyusunan proposal, presentasi final, hingga implementasi bisnis berkelanjutan.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "DEM",
    category: "Industri Kreatif",
    desc: "Program edukasi kewirausahaan berbasis konten video yang diproduksi secara terstruktur dan didistribusikan melalui platform media sosial.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "IEE",
    category: "Industri Kreatif",
    desc: "Program pelatihan dan pengembangan kewirausahaan bagi mahasiswa Teknik Industri FT Unsika yang diimplementasikan melalui kegiatan Expo untuk menumbuhkan jiwa wirausaha.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "SNK",
    category: "Industri Kreatif",
    desc: "Program seminar yang berfokus pada pemberian pemahaman mengenai pentingnya Inovasi dan Creative thinking.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "IndusMart",
    category: "Project",
    desc: "Program kerja bidang penjualan produk melalui sub-program Marketplace dan TIPO yang bertujuan untuk menambah pemasukan serta mendukung operasional organisasi HMTI FT Unsika.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "Interkom",
    category: "Kominfo",
    desc: "Program publikasi informasi terpadu melalui berbagai platform resmi HMTI FT Unsika yang mencakup sub-kegiatan HMTI Bangga, BIDCOM 26, IPK 26, dan HMTIVERSE bagi mahasiswa serta masyarakat umum.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "SKI",
    category: "Hubungan Luar",
    desc: "Program kunjungan langsung ke perusahaan bagi mahasiswa aktif Teknik Industri FT Unsika untuk mengobservasi proses produksi secara nyata di lapangan.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "BENCHMARKING ",
    category: "Hubungan Luar",
    desc: " Pertemuan dan diskusi untuk bertukar informasi serta menjalin hubungan antara pengurus HMTI FT Unsika dengan kampus atau instansi lain yang berada di luar Universitas Singaperbangsa Karawang.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "Aksara TI",
    category: "Pelayanan Mahasiswa",
    desc: "Program pelayanan aspirasi mahasiswa Teknik Industri FT Unsika yang memfasilitasi penyampaian kritik, saran, dan keluhan secara daring maupun luring guna menghubungkan mahasiswa dengan pihak civitas akademika.",
    linkText: "Selengkapnya",
    link: "/#aspirasi",
  },
  {
    title: "INDUSIGHT",
    category: "Pelayanan Mahasiswa",
    desc: "Sarana penyediaan dan penyaluran informasi terpadu terkait kompetisi, beasiswa, pelatihan, hingga magang bagi mahasiswa Teknik Industri FT Unsika melalui berbagai platform digital resmi.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "RISE",
    category: "Pelayanan Mahasiswa",
    desc: "Program seminar dan pelatihan strategis bagi mahasiswa Teknik Industri FT Unsika untuk meningkatkan kesiapan menghadapi seleksi beasiswa melalui pemahaman persyaratan hingga teknik penulisan esai.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "Dies Natalis",
    category: "Pengembangan Minat & Bakat",
    desc: "Dies Natalis HMTI FT Unsika, dengan rangkaian berupa: I-ACT (Industrial Care in Action), Santunan, dan Industrial Festival Vol. 2.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "IETSC",
    category: "Pengembangan Minat & Bakat",
    desc: "Wadah pelatihan mahasiswa Teknik Industri FT Unsika yang mencakup berbagai bidang seni dan olahraga, mulai dari cabang atletik, e-sports, hingga desain kreatif.",
    linkText: "Selengkapnya",
    link: "#",
  },
  {
    title: "POSE",
    category: "Pengembangan Minat & Bakat",
    desc: "Program rutin tahunan sebagai sarana mahasiswa Teknik Industri FT Unsika untuk menyalurkan dan mengembangkan potensi nonakademik melalui berbagai perlombaan di bidang olahraga dan seni.",
    linkText: "Selengkapnya",
    link: "#",
  }
];

// ==========================================
// DATA KABINET
// Silakan ubah data di bawah ini jika berganti periode/kabinet
// ==========================================
const kabinetData = {
  periode: "2026/2027",
  namaKabinet: "Kabinet Sahitya Ardaya",
  logo: "/jo.png",
  deskripsi: (
    <>
      <strong>Kabinet Sahitya Ardaya</strong> adalah wadah pergerakan HMTI FT Unsika 2026 yang berlandaskan pada pondasi kebersamaan yang selaras dan harmonis tanpa membeda-bedakan <strong>(Sahitya)</strong> sebagai input utamanya, guna melahirkan kekuatan hati, daya juang, dan energi progresif <strong>(Ardaya)</strong> sebagai output-nya. Melalui alur berpikir yang matang, kabinet ini berkomitmen membangun keselarasan internal sebagai hal fundamental untuk menciptakan energi kolektif yang kuat, yang kemudian dimanifestasikan menjadi aksi nyata demi mewujudkan kebermanfaatan luas bagi seluruh mahasiswa Teknik Industri FT Unsika.
    </>
  ),
};

// ==========================================
// DATA AGENDA BULANAN (KALENDER DIGITAL)
// Silakan ubah data di bawah ini setiap bulan untuk update proker
// ==========================================
const agendaBulanIni = {
  bulan: "Bulan Mei",
  tahun: "2026",
  kegiatan: [
    {
      id: 1,
      tanggal: "4",
      hari: "Senin",
      nama: "Open Recruitment IVD",
      deskripsi: "Panitia Pelaksana",
      highlight: false
    },
    {
      id: 2,
      tanggal: "15",
      hari: "Jum'at",
      nama: "Open Recruitment BPC & SNK",
      deskripsi: "Panitia Pelaksana",
      highlight: false
    },
    {
      id: 3,
      tanggal: "17",
      hari: "Selasa",
      nama: "Open Registration SIKAP",
      deskripsi: "Pendaftaran",
      highlight: true
    },
    {
      id: 4,
      tanggal: "-",
      hari: "-",
      nama: "Mentorship Class Batch I",
      deskripsi: "Pelaksanaan Acara",
      highlight: false
    },
    {
      id: 5,
      tanggal: "-",
      hari: "-",
      nama: "I-Pedia",
      deskripsi: "Edukasi Video",
      highlight: false
    },
    {
      id: 6,
      tanggal: "-",
      hari: "-",
      nama: "Kastrat",
      deskripsi: "Publikasi Kajian",
      highlight: false
    },
    {
      id: 7,
      tanggal: "-",
      hari: "-",
      nama: "PIKA",
      deskripsi: "Kebutuhan Akademik",
      highlight: false
    },
    {
      id: 8,
      tanggal: "-",
      hari: "-",
      nama: "DEM",
      deskripsi: "Edukasi Video",
      highlight: false
    },
    {
      id: 9,
      tanggal: "-",
      hari: "-",
      nama: "IndusMart",
      deskripsi: "Merchandise HMTI",
      highlight: false
    },
    {
      id: 10,
      tanggal: "-",
      hari: "-",
      nama: "BIDCOM 26",
      deskripsi: "Informasi",
      highlight: false
    },
    {
      id: 11,
      tanggal: "-",
      hari: "-",
      nama: "IPK 26",
      deskripsi: "Informasi",
      highlight: false
    },
    {
      id: 12,
      tanggal: "-",
      hari: "-",
      nama: "HMTI Bangga",
      deskripsi: "Ucapan",
      highlight: false
    },
    {
      id: 13,
      tanggal: "23",
      hari: "Sabtu",
      nama: "Benchmarking",
      deskripsi: "Studi Banding",
      highlight: false
    },
    {
      id: 14,
      tanggal: "-",
      hari: "-",
      nama: "Aksara TI",
      deskripsi: "Layanan Pengaduan",
      highlight: false
    },
    {
      id: 15,
      tanggal: "-",
      hari: "-",
      nama: "Indusight",
      deskripsi: "Informasi",
      highlight: false
    },
    {
      id: 16,
      tanggal: "-",
      hari: "-",
      nama: "IESTC",
      deskripsi: "Pelatihan",
      highlight: false
    },
  ]
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAspirasiSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Ambil data teks
      const nama = formData.get('nama')?.toString() || "";
      const email = formData.get('email')?.toString() || "";
      const aspirasi = formData.get('aspirasi')?.toString() || "";

      // Validasi Email Mahasiswa UNSIKA
      if (!email.endsWith('@student.unsika.ac.id')) {
        alert("Mohon gunakan email mahasiswa yang valid (@student.unsika.ac.id)");
        setIsLoading(false);
        return;
      }

      // Ambil file lampiran
      const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
      const file = fileInput?.files?.[0];

      let base64File = "";
      let fileName = "";

      // Proses konversi file ke Base64 jika ada file
      if (file) {
        const reader = new FileReader();
        base64File = await new Promise((resolve, reject) => {
          reader.onload = () => {
            const result = reader.result as string;
            resolve(result.split(',')[1]);
          };
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file);
        });
        fileName = `${nama.replace(/\s+/g, '_')}_${file.name}`;
      }

      const payload = {
        nama: nama,
        email: email,
        aspirasi: aspirasi,
        fileData: base64File,
        fileName: fileName,
      };

      // GUNAKAN LINK NEW DEPLOY TERBARU KAMU DI SINI
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwR2plMXGamKc9VZBBY4aswp_fXZ61XxvGJfErvdIf1eOXJVoaB5dO7ic6BNUkCiJ_D/exec';

      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Sukses! Aspirasi Kamu berhasil terkirim.");
        form.reset();
      } else {
        throw new Error("Server merespon dengan status: " + response.status);
      }

    } catch (error) {
      console.error("Detail Error:", error);
      alert("Terjadi kesalahan. Pastikan koneksi internet stabil.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    // Check if IntersectionObserver is supported
    if (typeof window !== "undefined" && !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section id="beranda" className="hero-bg min-h-screen flex items-center pt-20">
        <div className="hero-grid"></div>

        {/* Sparkles */}
        <div className="sparkle absolute" style={{ top: "18%", left: "8%", color: "#f59e0b", fontSize: "1.4rem", opacity: 0.7 }}>✦</div>
        <div className="sparkle sparkle-2 absolute" style={{ top: "35%", right: "12%", color: "#fbbf24", fontSize: "1rem", opacity: 0.5 }}>✦</div>
        <div className="sparkle sparkle-3 absolute" style={{ bottom: "25%", left: "20%", color: "#f59e0b", fontSize: "0.8rem", opacity: 0.6 }}>✦</div>
        <div className="sparkle absolute" style={{ top: "60%", right: "25%", color: "#fff", fontSize: "0.6rem", opacity: 0.3 }}>✦</div>

        {/* Decorative circle */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "420px", height: "420px", borderRadius: "50%", border: "1px solid rgba(245,158,11,0.15)" }}></div>
        <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(245,158,11,0.1)" }}></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f59e0b", display: "inline-block" }}></span>
              <span className="font-body text-[0.8rem] font-medium text-[var(--color-gold-400)] tracking-[0.06em]">Himpunan Mahasiswa Teknik Industri FT Unsika</span>
            </div>

            <h1 className="font-display font-extrabold text-white text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.1] tracking-[-0.02em] mb-[1.5rem]">
              No Best Way,<br />
              <span className="text-[var(--color-gold-500)]">But Always</span><br />
              A Better Way
            </h1>

            <p className="text-white/70 text-[1.05rem] leading-[1.75] max-w-[480px] mb-[2.5rem]">
              HMTI FT Unsika adalah wadah pengembangan potensi mahasiswa Teknik Industri FT Unsika yang berkomitmen menciptakan inovasi, kolaborasi, dan kontribusi nyata bagi bangsa.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/#aspirasi" className="btn-gold">Aspirasi</Link>
              <Link href="#profil" className="btn-outline">Tentang Kami</Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/12">
              <div>
                <div className="font-display font-extrabold text-[1.9rem] text-[var(--color-gold-500)]">68</div>
                <div className="text-[0.82rem] text-white/55 mt-[2px]">Anggota Khusus</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-[1.9rem] text-[var(--color-gold-500)]">23</div>
                <div className="text-[0.82rem] text-white/55 mt-[2px]">Program Kerja</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-[1.9rem] text-[var(--color-gold-500)]">4</div>
                <div className="text-[0.82rem] text-white/55 mt-[2px]">Departemen</div>
              </div>
            </div>
          </div>

          {/* Right: agenda moved to section#informasi */}
          <div className="hidden lg:block" />
        </div>

        {/* Wave bottom */}
        <div className="absolute -bottom-[2px] left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* TENTANG HIMPUNAN */}
      <section id="profil" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="reveal">
              <span className="section-label">Tentang Kami</span>
              <h2 className="section-title text-4xl md:text-5xl mt-3 mb-6">BERSAMA UNTUK <br />BERDAMPAK</h2>
              <div style={{ width: "50px", height: "4px", background: "linear-gradient(90deg,#f59e0b,#fbbf24)", borderRadius: "2px", marginBottom: "1.75rem" }}></div>
              <p className="text-gray-700 leading-[1.85] mb-[1.25rem] text-[1.02rem]">
                HMTI FT Unsika berdiri sejak 1996 sebagai himpunan mahasiswa yang menaungi seluruh sivitas akademika jurusan teknik industri. Kami hadir untuk menjadi jembatan antara dunia akademik dan industri, mendorong setiap anggota untuk tumbuh secara intelektual, sosial, dan profesional.
              </p>
              <p className="text-gray-700 leading-[1.85] text-[1.02rem] mb-[2rem]">
                Dengan semangat kolaborasi dan inovasi, kami terus berupaya memberikan dampak positif melalui program kerja yang terstruktur, kompetisi bertaraf nasional, serta forum diskusi yang membuka wawasan seluas-luasnya.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#dce8ff] text-[#1a3a8f] text-[0.78rem] font-semibold py-[0.4rem] px-[0.9rem] rounded-full">Inovasi</span>
                <span className="bg-[#dce8ff] text-[#1a3a8f] text-[0.78rem] font-semibold py-[0.4rem] px-[0.9rem] rounded-full">Kolaborasi</span>
                <span className="bg-[#fef3c7] text-[#d97706] text-[0.78rem] font-semibold py-[0.4rem] px-[0.9rem] rounded-full">Kepemimpinan</span>
                <span className="bg-[#fef3c7] text-[#d97706] text-[0.78rem] font-semibold py-[0.4rem] px-[0.9rem] rounded-full">Pengabdian</span>
              </div>

              <Link href="/profil" className="btn-navy">Profil Lengkap →</Link>
            </div>

            {/* Visual */}
            <div className="reveal reveal-delay-2 relative">
              {/* Main card */}
              <div style={{ background: "linear-gradient(135deg,#0a1f5c,#1a3a8f)", borderRadius: "24px", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "rgba(245,158,11,0.1)" }}></div>
                <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "120px", height: "120px", borderRadius: "50%", background: "rgba(255,255,255,0.04)" }}></div>

                <h3 className="font-display font-extrabold text-[var(--color-gold-500)] text-[1.05rem] tracking-[0.05em] uppercase mb-[1.25rem]">Visi & Misi</h3>

                <div className="mb-[1.75rem]">
                  <div className="text-[0.75rem] text-white/45 font-semibold tracking-[0.08em] uppercase mb-[0.5rem]">Visi</div>
                  <p className="text-white/90 leading-[1.7] text-[0.95rem]">&quot;Mewujudkan HMTI FT Unsika sebagai poros pengembangan diri
                    mahasiswa Teknik Industri FT Unsika yang responsif, progresif dan

                    berdaya guna&quot;</p>
                </div>

                <div>
                  <div className="text-[0.75rem] text-white/45 font-semibold tracking-[0.08em] uppercase mb-[0.75rem]">
                    Misi<br />Panca Guna
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-start gap-[0.6rem]"><span className="text-[var(--color-gold-500)] text-[0.9rem] mt-[1px]">▸</span><span className="text-white/75 text-[0.88rem] leading-[1.6]">Memperkuat internal HMTI FT Unsika yang responsif, progresif,dan berdaya guna</span></div>
                    <div className="flex items-start gap-[0.6rem]"><span className="text-[var(--color-gold-500)] text-[0.9rem] mt-[1px]">▸</span><span className="text-white/75 text-[0.88rem] leading-[1.6]">Membentuk mahasiswa/i teknik industri FT Unsika yang inklusifdan responsif terhadap HMTI FT Unsika guna mengembangkan mahasiswa/i Teknik Industri FT Unsika</span></div>
                    <div className="flex items-start gap-[0.6rem]"><span className="text-[var(--color-gold-500)] text-[0.9rem] mt-[1px]">▸</span><span className="text-white/75 text-[0.88rem] leading-[1.6]">Menyediakan wadah pengembangan diri yang inklusif sekaligus menjadi ruang representatif yang responsif dalam menampung aspirasi serta menunjang kebutuhan mahasiswa/i Teknik Industri FT Unsika demi terwujudnya kesejahteraan mahasiswa</span></div>
                    <div className="flex items-start gap-[0.6rem]"><span className="text-[var(--color-gold-500)] text-[0.9rem] mt-[1px]">▸</span><span className="text-white/75 text-[0.88rem] leading-[1.6]">Membangun komunikasi yang harmonis dengan seluruh elemen internal maupun eksternal demi menghadirkan kebermanfaatan nyata bagi mahasiswa/i Teknik Industri FT Unsika</span></div>
                    <div className="flex items-start gap-[0.6rem]"><span className="text-[var(--color-gold-500)] text-[0.9rem] mt-[1px]">▸</span><span className="text-white/75 text-[0.88rem] leading-[1.6]">Mewujudkan nilai pengabdian bagi mahasiswa teknik industri FT Unsika guna terciptanya kebermanfaatan masyarakat dan rasa kepedulian mahasiwa/i Teknik Industri FT Unsika terhadap masyarakat sekitar</span></div>
                  </div>
                </div>
              </div>

              {/* Floating mini card */}
              <div className="absolute -top-[20px] -right-[24px] bg-white rounded-2xl py-[1.1rem] px-[1.3rem] shadow-[0_8px_40px_rgba(10,31,92,0.14)] min-w-[160px] hidden lg:block">
                <div className="text-[0.72rem] text-gray-400 font-semibold tracking-[0.06em] uppercase">Didirikan</div>
                <div className="font-display font-extrabold text-[1.6rem] text-[var(--color-navy-900)] leading-[1.1]">1996</div>
                <div className="text-[0.78rem] text-gray-500 mt-[2px]">30 Tahun Bergerak</div>
              </div>
            </div>
          </div>

          {/* Kabinet Info */}
          <div className="mt-20 max-w-4xl mx-auto reveal">
            <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10 hover:shadow-md transition-shadow">
              <div className="w-48 h-48 shrink-0 rounded-full flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-[var(--color-navy-50)] to-white border border-gray-100 shadow-inner">
                {/* Logo Image */}
                <img src={kabinetData.logo} alt={`Logo ${kabinetData.namaKabinet}`} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('bg-gray-100'); }} />
                {/* Fallback icon if image not found */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 -z-10">
                  <span className="text-[2rem] mb-1">🦁</span>
                  <span className="text-[0.6rem] uppercase tracking-wider">Logo Kabinet</span>
                </div>
              </div>
              <div>
                <span className="section-label mb-2 block">Kabinet {kabinetData.periode}</span>
                <h2 className="font-display font-extrabold text-[2.2rem] text-[var(--color-navy-900)] mb-4 leading-tight">{kabinetData.namaKabinet}</h2>
                <p className="text-gray-600 leading-relaxed text-[1rem]">
                  {kabinetData.deskripsi}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMASI MAHASISWA */}
      <section id="informasi" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14 reveal">
            <span className="section-label">Layanan Kami</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3 mb-4">Informasi Mahasiswa</h2>
            <p className="text-gray-500 max-w-[520px] mx-auto text-[1rem] leading-[1.75]">Akses berbagai sumber daya dan informasi yang dirancang khusus untuk mendukung perjalanan akademik dan karier Anda.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {/* Card 1: Akademis */}
            <div className="info-card reveal reveal-delay-1 opacity-50 grayscale pointer-events-none">
              <div className="card-icon bg-[#dce8ff]">📋</div>
              <h3 className="font-display font-bold text-[var(--color-navy-900)] mb-[0.5rem] text-[1rem]">Akademis</h3>
              <p className="text-[0.85rem] text-gray-500 leading-[1.65]">Jadwal kuliah, kurikulum, kalender akademik, dan panduan tugas akhir.</p>
              {/*<Link href="#" className="text-[0.8rem] font-semibold text-[var(--color-navy-700)] mt-4 inline-block tracking-[0.02em]">Lihat →</Link>*/}
              <div className="text-[0.8rem] font-semibold text-gray-400 mt-4 inline-block tracking-[0.02em]">Segera Hadir</div>
            </div>

            {/* Card 2: Beasiswa */}
            <div className="info-card reveal reveal-delay-2 opacity-50 grayscale pointer-events-none">
              <div className="card-icon bg-[#fef3c7]">🎓</div>
              <h3 className="font-display font-bold text-[var(--color-navy-900)] mb-[0.5rem] text-[1rem]">Beasiswa</h3>
              <p className="text-[0.85rem] text-gray-500 leading-[1.65]">Info beasiswa dalam dan luar negeri, persyaratan, serta panduan pendaftaran.</p>
              {/*<Link href="#" className="text-[0.8rem] font-semibold text-[var(--color-navy-700)] mt-4 inline-block tracking-[0.02em]">Lihat →</Link>*/}
              <div className="text-[0.8rem] font-semibold text-gray-400 mt-4 inline-block tracking-[0.02em]">Segera Hadir</div>
            </div>

            {/* Card 3: Lomba */}
            <div className="info-card reveal reveal-delay-3 opacity-50 grayscale pointer-events-none">
              <div className="card-icon bg-[#d1fae5]">🏆</div>
              <h3 className="font-display font-bold text-[var(--color-navy-900)] mb-[0.5rem] text-[1rem]">Lomba</h3>
              <p className="text-[0.85rem] text-gray-500 leading-[1.65]">Kompetisi nasional dan internasional bidang teknik, sains, dan inovasi terkini.</p>
              {/*<Link href="#" className="text-[0.8rem] font-semibold text-[var(--color-navy-700)] mt-4 inline-block tracking-[0.02em]">Lihat →</Link>*/}
              <div className="text-[0.8rem] font-semibold text-gray-400 mt-4 inline-block tracking-[0.02em]">Segera Hadir</div>
            </div>

            {/* Card 4: Prestasi */}
            <div className="info-card reveal reveal-delay-4">
              <div className="card-icon bg-[#fce7f3]">🌟</div>
              <h3 className="font-display font-bold text-[var(--color-navy-900)] mb-[0.5rem] text-[1rem]">Prestasi</h3>
              <p className="text-[0.85rem] text-gray-500 leading-[1.65]">Pencapaian mahasiswa Teknik Industri Unsika.</p>
              <Link href="#" className="text-[0.8rem] font-semibold text-[var(--color-navy-700)] mt-4 inline-block tracking-[0.02em]">Lihat →</Link>
            </div>

            {/* Card 5: E-Library */}
            <div className="info-card reveal reveal-delay-5" style={{ borderColor: "#e0e9ff", background: "linear-gradient(135deg,#f0f4ff,#fff)" }}>
              <div className="card-icon bg-[#c7d2fe]">📚</div>
              <h3 className="font-display font-bold text-[var(--color-navy-900)] mb-[0.5rem] text-[1rem]">Pika</h3>
              <p className="text-[0.85rem] text-gray-500 leading-[1.65]">Koleksi modul, jurnal, dan materi pembelajaran digital eksklusif untuk mahasiswa.</p>
              <Link href="https://pikahmtiftunsika.great-site.net/index.php" className="text-[0.8rem] font-bold text-[var(--color-gold-500)] mt-4 inline-block tracking-[0.02em]">Akses →</Link>
            </div>
          </div>

          {/* AGENDA BULANAN */}
          <div className="mt-12 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg" style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}>📅</div>
              <div>
                <div className="font-display font-bold text-[var(--color-navy-900)] text-[1rem]">Agenda Program Kerja</div>
                <div className="text-[0.75rem] text-gray-400">{agendaBulanIni.bulan} {agendaBulanIni.tahun}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {agendaBulanIni.kegiatan.map((item) => (
                <div key={item.id} className={`flex items-center gap-3 px-4 py-3 rounded-xl border h-full ${item.highlight
                  ? 'bg-[rgba(245,158,11,0.08)] border-[rgba(245,158,11,0.35)]'
                  : 'bg-gray-50 border-gray-200'
                  }`}>
                  <div className="flex flex-col items-center justify-center w-11 h-11 rounded-lg" style={{
                    background: item.highlight ? 'linear-gradient(135deg,#f59e0b,#d97706)' : '#e5e7eb'
                  }}>
                    <span className={`text-[0.6rem] font-bold uppercase tracking-wider ${item.highlight ? 'text-white/90' : 'text-gray-500'}`}>{item.hari}</span>
                    <span className={`font-display text-[1rem] font-extrabold leading-tight ${item.highlight ? 'text-white' : 'text-[var(--color-navy-900)]'}`}>{item.tanggal}</span>
                  </div>
                  <div>
                    <div className={`text-[0.82rem] font-semibold ${item.highlight ? 'text-[var(--color-gold-500)]' : 'text-[var(--color-navy-900)]'}`}>{item.nama}</div>
                    <div className="text-[0.72rem] text-gray-400">{item.deskripsi}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Program Kerja */}
      <section className="py-20 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 reveal">
            <span className="section-label">Informasi Program Kerja 2026/2027 HMTI FT Unsika</span>
            <h2 className="section-title text-4xl md:text-5xl mt-3">23 Program HMTI</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programKerjaList.map((program, index) => {
              const titleMatch = program.title.match(/(.*?)\s(\(.*?\))/);
              const delayClass = `reveal-delay-${(index % 5) + 1}`;

              return (
                <div key={index} id={program.title.toLowerCase()} className={`event-big p-8 reveal ${delayClass} flex flex-col h-full`}>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="bg-[rgba(245,158,11,0.2)] border border-[rgba(245,158,11,0.35)] inline-flex items-center gap-2 py-[0.35rem] px-[0.9rem] rounded-full mb-5 self-start">
                      <span className="text-[0.7rem] font-bold text-[var(--color-gold-400)] tracking-[0.1em] uppercase">{program.category}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-white text-[2rem] tracking-[-0.02em] mb-3">
                      {titleMatch ? (
                        <>
                          {titleMatch[1]} <span className="text-[var(--color-gold-500)]">{titleMatch[2]}</span>
                        </>
                      ) : (
                        program.title
                      )}
                    </h3>
                    <p className="text-white/65 text-[0.92rem] leading-[1.8] mb-7 flex-grow">
                      {program.desc}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center mt-auto pt-2">
                      <Link href={program.link} className="btn-gold text-sm py-2.5 px-5">{program.linkText}</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BERITA & EVENT */}
      <section id="berita" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="reveal">
              <span className="section-label">Terbaru</span>
              <h2 className="section-title text-4xl md:text-5xl mt-3">Berita & Kegiatan</h2>
            </div>
            <Link href="/berita" className="btn-navy self-start sm:self-auto reveal">Semua Berita →</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="news-card block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group reveal reveal-delay-1">
              <div className="relative h-[180px] w-full bg-gray-200">
                <Image src="/logo.png" alt="News Image" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5"></div>
                <div className="absolute top-3 left-3 bg-[var(--color-gold-500)] text-white text-[0.7rem] font-bold py-1 px-3 rounded-full tracking-[0.05em] uppercase z-10 shadow-sm">-</div>
              </div>
              <div className="p-6">
                <div className="text-[0.78rem] text-gray-400 mb-2.5">-</div>
                <h4 className="font-display font-bold text-[var(--color-navy-900)] text-[1rem] leading-[1.45] mb-2.5 group-hover:text-[var(--color-gold-500)] transition-colors">-</h4>
                <p className="text-[0.84rem] text-gray-500 leading-[1.65] mb-5">-</p>
                <span className="text-[0.82rem] font-semibold text-[var(--color-navy-700)] group-hover:text-[var(--color-gold-500)] transition-colors inline-flex items-center gap-1.5">Baca Selengkapnya <span>→</span></span>
              </div>
            </Link>

            {/* News Card 2 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="news-card block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group reveal reveal-delay-2">
              <div className="relative h-[180px] w-full bg-gray-200">
                <Image src="/logo.png" alt="News Image" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5"></div>
                <div className="absolute top-3 left-3 bg-[var(--color-navy-700)] text-white text-[0.7rem] font-bold py-1 px-3 rounded-full tracking-[0.05em] uppercase z-10 shadow-sm">-</div>
              </div>
              <div className="p-6">
                <div className="text-[0.78rem] text-gray-400 mb-2.5">-</div>
                <h4 className="font-display font-bold text-[var(--color-navy-900)] text-[1rem] leading-[1.45] mb-2.5 group-hover:text-[var(--color-gold-500)] transition-colors">-</h4>
                <p className="text-[0.84rem] text-gray-500 leading-[1.65] mb-5">-</p>
                <span className="text-[0.82rem] font-semibold text-[var(--color-navy-700)] group-hover:text-[var(--color-gold-500)] transition-colors inline-flex items-center gap-1.5">Baca Selengkapnya <span>→</span></span>
              </div>
            </Link>

            {/* News Card 3 */}
            <Link href="#" target="_blank" rel="noopener noreferrer" className="news-card block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group reveal reveal-delay-3">
              <div className="relative h-[180px] w-full bg-gray-200">
                <Image src="/logo.png" alt="News Image" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/5"></div>
                <div className="absolute top-3 left-3 bg-[var(--color-gold-500)] text-white text-[0.7rem] font-bold py-1 px-3 rounded-full tracking-[0.05em] uppercase z-10 shadow-sm">-</div>
              </div>
              <div className="p-6">
                <div className="text-[0.78rem] text-gray-400 mb-2.5">-</div>
                <h4 className="font-display font-bold text-[var(--color-navy-900)] text-[1rem] leading-[1.45] mb-2.5 group-hover:text-[var(--color-gold-500)] transition-colors">-</h4>
                <p className="text-[0.84rem] text-gray-500 leading-[1.65] mb-5">-</p>
                <span className="text-[0.82rem] font-semibold text-[var(--color-navy-700)] group-hover:text-[var(--color-gold-500)] transition-colors inline-flex items-center gap-1.5">Baca Selengkapnya <span>→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* KOTAK ASPIRASI */}
      <section id="aspirasi" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-[var(--color-navy-900)] to-[var(--color-navy-700)] rounded-[28px] p-[clamp(2.5rem,5vw,4.5rem)] text-center relative overflow-hidden reveal">
            <div className="absolute -top-[60px] -right-[60px] w-[280px] h-[280px] rounded-full bg-[rgba(245,158,11,0.1)]"></div>
            <div className="absolute -bottom-[80px] -left-[40px] w-[240px] h-[240px] rounded-full bg-[rgba(255,255,255,0.03)]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="font-body text-[0.78rem] font-bold tracking-[0.12em] uppercase text-[var(--color-gold-500)] block mb-4">Sampaikan Suara Anda</span>
              <h2 className="font-display font-extrabold text-white text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.02em] mb-5 leading-[1.15]">Aksara TI</h2>
              <p className="text-white/65 mx-auto mb-8 text-[1rem] leading-[1.75]">Tuliskan permasalahan dan aspirasi yang ingin disampaikan</p>

              <form onSubmit={handleAspirasiSubmit} className="flex flex-col gap-4 text-left">
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama Lengkap"
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold-500)] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Mahasiswa (@student.unsika.ac.id)"
                  pattern=".*@student\.unsika\.ac\.id$"
                  title="Gunakan email berakhiran @student.unsika.ac.id"
                  required
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold-500)] transition-colors"
                />
                <textarea
                  name="aspirasi"
                  placeholder="Saran atau Aspirasi"
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-gold-500)] transition-colors resize-none"
                ></textarea>

                {/* Input Lampiran */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <label htmlFor="lampiran" className="text-white/70 text-[0.85rem] ml-1">Lampiran Bukti/Dokumen (Opsional)</label>
                  <input
                    type="file"
                    id="lampiran"
                    name="lampiran"
                    accept="image/*,.pdf,.doc,.docx"
                    className="w-full bg-white/10 border border-white/20 text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:bg-[var(--color-gold-500)] file:text-white hover:file:bg-[var(--color-gold-600)] rounded-xl px-3 py-2.5 outline-none transition-colors cursor-pointer"
                  />
                  <span className="text-white/40 text-[0.75rem] ml-1">Format: JPG, PNG, PDF, DOCX (Max 5MB)</span>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-gold py-3.5 mt-2 flex justify-center items-center font-bold text-[1rem] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Mengirim..." : "Kirim Suara Saya"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
