import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berita & Kegiatan - HMTI UNSIKA",
  description: "Kumpulan berita dan kegiatan terbaru dari Himpunan Mahasiswa Teknik Industri FT UNSIKA.",
};

export default function BeritaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
