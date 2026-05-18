import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@hmtiftunsika',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v11a7 7 0 0 1-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hmti_unsika?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/18a3ixpg9o/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/HmtiUnsika',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hmti-ft-unsika-579b96360?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@hmtiftunsika4709?si=LjUjxkh8jykqCIQm',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 7.1C2.5 7.1 2.3 5.4 3.1 4.6 4.1 3.5 5.2 3.5 5.8 3.4 8.5 3.2 12 3.2 12 3.2s3.5 0 6.2.2c.6.1 1.7.1 2.7 1.2.8.8 1 2.5 1 2.5s.2 2 .2 4v1.8c0 2-.2 4-.2 4s-.2 1.7-1 2.5c-1 1.1-2.3 1.1-2.9 1.2-3 .3-6.1.3-6.1.3s-3.5 0-6.2-.2c-.6-.1-1.7-.1-2.7-1.2-.8-.8-1-2.5-1-2.5s-.2-2-.2-4v-1.8c0-2 .2-4 .2-4z" />
        <path d="M9.8 15l6.3-3.6-6.3-3.6z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/6289671027586',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M16 15c-1 .5-1.5.5-2 .5s-1.5-.5-2.5-1.5-1.5-2-1.5-2.5.5-1 .5-2-1-3-1.5-3-.5-.5-1-.5-.5 0-1 .5-.5 1-1.5 2.5.5 3.5 1.5 5 2.5 3 4 3.5 1.5.5 2.5.5 1-.5 1-1 .5-1.5 1-1.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy-950)] text-white/65">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo.png" alt="HMTI Logo" width={38} height={38} className="rounded-[10px]" />
              <span className="font-display font-extrabold text-white text-[1.1rem]">
                HMTI
              </span>
            </div>
            <p className="text-[0.87rem] leading-[1.75] mb-[1.25rem]">
              Himpunan Mahasiswa Teknik Industri FT Unsika — No Best Way, But Always A Better Way
            </p>
            <div className="text-[0.83rem] leading-[1.8]">
              <div>📍 Universitas Singaperbangsa Karawang</div>
              <div>Jl. HS.Ronggo Waluyo, Puseurjaya, Telukjambe Timur, Karawang, Jawa Barat 41361, Indonesia</div>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="font-display font-bold text-white text-[0.92rem] mb-[1.25rem] tracking-[0.02em]">
              Navigasi
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#beranda" className="text-[0.87rem] hover:text-[var(--color-gold-500)] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#profil" className="text-[0.87rem] hover:text-[var(--color-gold-500)] transition-colors">
                  Profil Himpunan
                </Link>
              </li>
              <li>
                <Link href="/#aspirasi" className="text-[0.87rem] hover:text-[var(--color-gold-500)] transition-colors">
                  Aspirasi
                </Link>
              </li>
              <li>
                <Link href="#informasi" className="text-[0.87rem] hover:text-[var(--color-gold-500)] transition-colors">
                  Informasi Mahasiswa
                </Link>
              </li>
              <li>
                <Link href="https://pikahmtiftunsika.great-site.net/index.php" className="text-[0.87rem] hover:text-[var(--color-gold-500)] transition-colors">
                  Pika
                </Link>
              </li>
              <li>
                <Link href="#berita" className="text-[0.87rem] hover:text-[var(--color-gold-500)] transition-colors">
                  Berita
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-bold text-white text-[0.92rem] mb-[1.25rem]">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-2.5 mb-6">
              <a href="https://wa.me/6289671027586" className="text-[0.87rem] flex items-center gap-[0.5rem] hover:text-[var(--color-gold-500)] transition-colors">
                <span>💬</span> WhatsApp
              </a>
              <a href="hmti.unsika@gmail.com" className="text-[0.87rem] flex items-center gap-[0.5rem] hover:text-[var(--color-gold-500)] transition-colors">
                <span>✉️</span> hmti.unsika@gmail.com
              </a>
            </div>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className="w-[36px] h-[36px] rounded-[9px] bg-white/10 flex items-center justify-center text-[0.95rem] hover:bg-[rgba(245,158,11,0.25)] transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="divider mb-6"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[0.82rem]">© 2026 HMTI. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-5">
            <Link href="#" className="text-[0.82rem] hover:text-[var(--color-gold-500)] transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-[0.82rem] hover:text-[var(--color-gold-500)] transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
