"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled
        ? "bg-white/96 shadow-[0_1px_24px_rgba(10,31,92,0.08)] backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Logo HMTI"
              width={80}
              height={80}
              className="rounded-[10px] group-hover:scale-105 transition-transform"
            />
            <span className="font-display font-extrabold text-[1.15rem] text-[var(--color-navy-900)] tracking-tight">
              HMTI FT UNSIKA
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#beranda" className="nav-link">Beranda</Link>
            <Link href="/#profil" className="nav-link">Profil</Link>
            <Link href="https://pikahmtiftunsika.great-site.net/index.php" className="nav-link">Pika</Link>
            <Link href="/#informasi" className="nav-link">Informasi Mahasiswa</Link>
            <Link href="/#berita" className="nav-link">Berita</Link>
            <Link href="/#aspirasi" className="btn-gold text-sm py-2 px-5 ml-2">Aspirasi</Link>
          </div>

          {/* Mobile hamburger - CSS Only Implementation */}
          <details className="md:hidden group relative z-50">
            <summary
              className={`p-2 rounded-lg transition-colors cursor-pointer list-none flex items-center justify-center ${isScrolled ? "text-[var(--color-navy-800)] hover:bg-[var(--color-navy-50)]" : "text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                }`}
              style={{ listStyle: 'none' }}
            >
              <svg className="w-6 h-6 group-open:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="w-6 h-6 hidden group-open:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </summary>

            {/* Dropdown content */}
            <div className="absolute right-0 top-full mt-4 w-[calc(100vw-3rem)] max-w-sm bg-white rounded-2xl shadow-xl px-4 pb-4 animate-in fade-in slide-in-from-top-4 duration-200">
              <div className="pt-4 flex flex-col gap-1">
                <Link href="/#beranda" className="py-2.5 px-3 rounded-lg text-[var(--color-navy-800)] font-medium hover:bg-[var(--color-navy-50)] transition">Beranda</Link>
                <Link href="/profil" className="py-2.5 px-3 rounded-lg text-[var(--color-navy-800)] font-medium hover:bg-[var(--color-navy-50)] transition">Profil</Link>
                <Link href="/#aspirasi" className="py-2.5 px-3 rounded-lg text-[var(--color-navy-800)] font-medium hover:bg-[var(--color-navy-50)] transition">Aspirasi</Link>
                <Link href="/#informasi" className="py-2.5 px-3 rounded-lg text-[var(--color-navy-800)] font-medium hover:bg-[var(--color-navy-50)] transition">Informasi Mahasiswa</Link>
                <Link href="/#berita" className="py-2.5 px-3 rounded-lg text-[var(--color-navy-800)] font-medium hover:bg-[var(--color-navy-50)] transition">Berita</Link>
                <Link href="/#aspirasi" className="btn-gold text-center mt-2">Aspirasi</Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
