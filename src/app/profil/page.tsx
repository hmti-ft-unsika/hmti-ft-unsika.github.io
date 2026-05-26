"use client";

import { useEffect } from "react";
// Tipe Data untuk anggota
type Member = {
  name: string;
  role: string;
  image: string; // URL gambar atau path, contoh: "/images/anggota1.jpg"
  socialMedia?: string; // Link sosial media (opsional), tambahkan jika ingin gambarnya bisa di-klik
};

type Department = {
  title: string;
  members: Member[];
};

type DepartmentGroup = {
  name: string;
  head: Member;
  divisions: Department[];
};

// ==========================================
// DATA PIMPINAN & PENGAWAS
// ==========================================
const pimpinanData: Department[] = [
  {
    title: "Badan Pengawas Pengurus",
    members: [
      { name: "Arya Dwiriyanto", role: "Ketua Umum BPP", image: "/arya.png", socialMedia: "#" },
      { name: "Ulfatun Khaerunnisa", role: "Ketua Komisi A", image: "/ulfah.png", socialMedia: "https://www.instagram.com/ulfaakhrnssa__?igsh=MXBlMDlyOG1hbGJsMw==" },
      { name: "Rahma Mauliani", role: "Ketua Komisi B", image: "/rahma.png", socialMedia: "https://www.instagram.com/rhmaulii" },
      { name: "Tiara Aprilya Maulidya", role: "Komisi B", image: "/tiara.png", socialMedia: "https://www.instagram.com/tiaraamldyy_?igsh=MWwxNWhsdTUyZ3kzOQ==" },
      { name: "Yasnia Eka Putri Septiantari", role: "Ketua Komisi C", image: "/yasnia.png", socialMedia: "https://www.instagram.com/kookyiess?igsh=dmtjbHlkMjl1OXR5" },
      { name: "Rizkita Cinta Maharani", role: "Komisi C", image: "/cinta.png", socialMedia: "https://www.instagram.com/_cintamhrn?igsh=OWpkMmhzcm83YmJp" },
      { name: "Razzaq Alfaghar Suseno Chandra", role: "Ketua Komisi D", image: "/razzaq.png", socialMedia: "https://www.instagram.com/0jaack?igsh=MWJjNmtyM24yOWMxMw==" },
      { name: "Bintang Rifki Iza Ramadhan", role: "Komisi D", image: "/kuple.png", socialMedia: " https://www.instagram.com/bintangizaarn?igsh=MTEya2c2Y2NjcWR0NA%3D%3D&utm_source=qr" },
    ],
  },
  {
    title: "Box Office",
    members: [
      { name: "Rafi Adi Prapta Taufik", role: "Direktur Utama", image: "/rafi.png", socialMedia: "https://www.instagram.com/rfadprpta_" },
      { name: "Abigael Kadensi Simbolon", role: "Sekretaris", image: "/bigel.png", socialMedia: "https://www.instagram.com/kadensia07" },
      { name: "Siti Nurul Nuraeni", role: "Bendahara", image: "/sitrul.png", socialMedia: "https://www.instagram.com/sit.sto0ne936" },
    ],
  },
];

// ==========================================
// DATA DEPARTEMEN & DIVISI
// ==========================================
const departemenData: DepartmentGroup[] = [
  {
    name: "Departemen Pendidikan dan Riset",
    head: { name: "Chintia Istiqomah Handayani", role: "Kepala Departemen", image: "/chintia.png", socialMedia: "https://www.instagram.com/chntst_" },
    divisions: [
      {
        title: "Divisi Pendidikan",
        members: [
          { name: "Faris Audah Ramadhan", role: "Kepala Divisi Pendidikan", image: "/atep.png", socialMedia: "https://www.instagram.com/ateparis_?igsh=MWNwM3l2enA0Y3h6aw==" },
          { name: "Abdillah Cendekia Pabe", role: "Anggota", image: "/abe.png", socialMedia: "https://www.instagram.com/cndekiapabe?igsh=MXE0aHhvN2Vkdmxtdw==" },
          { name: "Nasywa Amelia Azzahra", role: "Anggota", image: "/nasywa.png", socialMedia: "https://www.instagram.com/nsyw.azrr?igsh=MTc2MHJicDF4M29zdA==" },
          { name: "Ahmad Junior Syahputra", role: "Anggota", image: "/jun.png", socialMedia: "https://www.instagram.com/ahmdjuniorr_?igsh=aDVjbWo1ZWhkY3Zr" },
          { name: "Mutiara Nurliza Darmawan", role: "Anggota", image: "/muti.png", socialMedia: "https://www.instagram.com/mutiaranlzd?igsh=MXRodGN1Nmt4a3J0Zw==" },
          { name: "Aupan Nazmi", role: "Anggota", image: "/aupan.png", socialMedia: "https://www.instagram.com/auf4nn_?igsh=MW5xZHVsbTdhMGhraQ==" },
        ],
      },
      {
        title: "Divisi Riset",
        members: [
          { name: "Jaya Hardiansyah", role: "Kepala Divisi Riset", image: "/jaya.png", socialMedia: "https://www.instagram.com/jayyyyyddiii_?igsh=MXkwb3BlbW5ld3NmMQ==" },
          { name: "Hepi Hanapian", role: "Anggota", image: "/hepi.png", socialMedia: "https://www.instagram.com/hhanapian?igsh=YjI2cmJ4ZDUxeTlk" },
          { name: "Kartika Zefanya Doloksaribu", role: "Anggota", image: "/jepa.png", socialMedia: "https://www.instagram.com/zefanyaatk?igsh=MWJ6M2J4dWs0ZGN2Mw==" },
          { name: "Nur Rachmadiah", role: "Anggota", image: "/diah.png", socialMedia: "https://www.instagram.com/rhmaadiah?igsh=MTE3YTYxeW8yMTdpYg==" },
          { name: "Dzakiyah Husna", role: "Anggota", image: "/dzakiyah.png", socialMedia: "https://www.instagram.com/dzhsn_307?igsh=MTRyNWl3djZ1YWpscA==" },
          { name: "Trisera Sujono", role: "Anggota", image: "/sera.png", socialMedia: "https://www.instagram.com/serasujono?igsh=MWt5azZ2OGF5aWhoMw==" },
          { name: "Albert Natagama", role: "Anggota", image: "/albert.png", socialMedia: "https://www.instagram.com/al.chii_?igsh=aXB6cXh5M3Njcm1j" },
        ],
      },
    ],
  },
  {
    name: "Departemen Kewirausahaan",
    head: { name: "Najwa Anisa", role: "Kepala Departemen", image: "/wawa.png", socialMedia: "https://www.instagram.com/najwaniisa" },
    divisions: [
      {
        title: "Divisi Industri Kreatif",
        members: [
          { name: "Yufadzli Sebastian", role: "Kepala Divisi Industri Kreatif", image: "/bas.png", socialMedia: "https://www.instagram.com/faadzzli_/" },
          { name: "Rahma Ningsih", role: "Anggota", image: "/ningsih.png", socialMedia: "https://www.instagram.com/_rngng_/" },
          { name: "Azzam Akbar Attamimi", role: "Anggota", image: "/azzam.png", socialMedia: "https://www.instagram.com/azzam_attamimi/" },
          { name: "Muhammad Fauzan", role: "Anggota", image: "/pojan.png", socialMedia: "https://www.instagram.com/sipojaaan/" },
          { name: "Alfa Hilman Handika", role: "Anggota", image: "/al.png", socialMedia: "https://www.instagram.com/alfhiilmn._/" },
          { name: "Naura Azzahra Nuraini Fahur", role: "Anggota", image: "/naura.png", socialMedia: "https://www.instagram.com/nauraazzhr?igsh=MWhhbDFxb2Jybndzcg%3D%3D" },
        ],
      },
      {
        title: "Divisi Project",
        members: [
          { name: "Anwar Hidayat", role: "Kepala Divisi Project", image: "/dayat.png", socialMedia: "https://www.instagram.com/anwrhdyt?igsh=MXcyZHZnNWE2cWd3ag==" },
          { name: "Prayuda Purwoko", role: "Anggota", image: "/yuda.png", socialMedia: "https://www.instagram.com/prayudapr?igsh=MWw0bzBzMnRkazBpcg==" },
          { name: "Dini Tri Rahayu S", role: "Anggota", image: "/dini.png", socialMedia: "https://www.instagram.com/ddinnnniiii?igsh=MWFvYnd1NHk4b3Z6aA==" },
          { name: "Muhammad Alvin Wiranegara", role: "Anggota", image: "/alvin.png", socialMedia: "https://www.instagram.com/alvinnnnn.w0?igsh=MWQ4YW9vd3BwOHF4YQ==" },
          { name: "Bernadeta Adjeng Permata Defi", role: "Anggota", image: "/adjeng.png", socialMedia: "https://www.instagram.com/adjengpd_?igsh=ZWtyaXRwZnpsYXk%3D&utm_source=qr" },
          { name: "Muhamad Fikri Yandrizal", role: "Anggota", image: "/pikri.png", socialMedia: "http://instagram.com/ynd14_" },
          { name: "Bagas Satrio Wibowo", role: "Anggota", image: "/bagas.png", socialMedia: "https://www.instagram.com/strioobagas?igsh=eWtsajBxOHdtZm0%3D&utm_source=qr" },
        ],
      },
    ],
  },
  {
    name: "Departemen Eksternal",
    head: { name: "Sultan Fakhri", role: "Kepala Departemen", image: "/slaw.png", socialMedia: "https://www.instagram.com/suultaaan.f" },
    divisions: [
      {
        title: "Divisi Hubungan Luar",
        members: [
          { name: "Muhamad Haidil Akbar", role: "Kepala Divisi Hubungan Luar", image: "/haidil.png", socialMedia: "https://www.instagram.com/hadlakbr?igsh=MTR2Nm5xeTNqOHdlNA==" },
          { name: "Rangga Putra Dayana", role: "Anggota", image: "/rangga.png", socialMedia: "https://www.instagram.com/ranqqaputra" },
          { name: "Muhammad Gema Dzulfa", role: "Anggota", image: "/gema.png", socialMedia: "https://www.instagram.com/s.cumm__?igsh=MXBhdXdmaDhwaGRmeA==" },
          { name: "Yanuar Adhari", role: "Anggota", image: "/aden.png", socialMedia: "https://www.instagram.com/yanuaradharii?igsh=OGxpdHF3OThnbnln" },
          { name: "Hafiz Iskandar", role: "Anggota", image: "/hafiz.png", socialMedia: "https://www.instagram.com/haaaaaaaf_?igsh=cWRhcjc1eGltN202" },
          { name: "Muhammad Jovan Saputra", role: "Anggota", image: "/jopan.png", socialMedia: "https://www.instagram.com/saputjovan?igsh=cm1lYnlzc3FqOTd5" },
          { name: "Syifa Aulia Asyabila", role: "Anggota", image: "/sipa.png", socialMedia: "https://www.instagram.com/fllnflz?igsh=MWNkaG9nemdhYnRxNw%3D%3D&utm_source=qr" },
        ],
      },
      {
        title: "Divisi Kominfo",
        members: [
          { name: "Faiz Ahdi Abdillah", role: "Kepala Divisi Kominfo", image: "/faiz.png", socialMedia: "https://www.instagram.com/faizahdii?igsh=MXRuM3h4bWsycHVqbw==" },
          { name: "Kevin Pramudya Firdaus", role: "Anggota", image: "/kevin.png", socialMedia: "https://www.instagram.com/i_kevin_you?igsh=MXFvZHlyYmFrZ3l5YQ==" },
          { name: "Fikryl Anbiya Dreitama", role: "Anggota", image: "/pikril.png", socialMedia: "https://www.instagram.com/yapikril" },
          { name: "Adinda Abdurahman Putri", role: "Anggota", image: "/dinda.png", socialMedia: "https://www.instagram.com/adindaaape?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
          { name: "Kroniquel Halasson", role: "Anggota", image: "/well.png", socialMedia: "https://www.instagram.com/qellpd_?igsh=MWl5OG13NDF3bDRqeQ==" },
          { name: "Wina Fitri Hasanah", role: "Anggota", image: "/wina.png", socialMedia: "https://www.instagram.com/wnfirn?igsh=NG56NDc0Y2N4a3cx" },
        ],
      },
    ],
  },
  {
    name: "Departemen Aspirasi",
    head: { name: "Muhammad Wibawasakti Gumilang", role: "Kepala Departemen", image: "/saka.png", socialMedia: "https://www.instagram.com/sakgumilang" },
    divisions: [
      {
        title: "Divisi Pelayanan Mahasiswa",
        members: [
          { name: "Taofiq Dwi Hermanto", role: "Kepala Divisi Pelayanan Mahasiswa", image: "/topik.png", socialMedia: "https://www.instagram.com/taofiqdh_?igsh=bTRlMmhvaDlueXVx" },
          { name: "Adam Rizki Fauzan", role: "Anggota", image: "/adam.png", socialMedia: "https://www.instagram.com/adamrrf_?igsh=MXE3cHZ2dnZ4ZXBpNA==" },
          { name: "Mafiroh Indah Wulandari", role: "Anggota", image: "/vivi.png", socialMedia: "https://www.instagram.com/___mfrwl?igsh=MTQ3Z2NhZW0zZXE4cA==" },
          { name: "Wilda Khairunnisa", role: "Anggota", image: "/wilda.png", socialMedia: "https://www.instagram.com/rrunnisaa_?igsh=dWV6emQydjlpZGx1" },
          { name: "Nisa Endika", role: "Anggota", image: "/eca.png", socialMedia: "https://www.instagram.com/nnisae._?igsh=MWR6NXlibzNybjNicQ==" },
          { name: "Shelvina Camelia Putri", role: "Anggota", image: "/el.png", socialMedia: "https://www.instagram.com/shelviinaaa_?igsh=OWwxZzVhOW00YjBu" },
          { name: "Jeremy Andrew Fernando", role: "Anggota", image: "/jeremy.png", socialMedia: "https://www.instagram.com/jeremyaf_?igsh=MW50MmVscXZzYTViMg==" },
        ],
      },
      {
        title: "Divisi Pengembangan Minat Bakat",
        members: [
          { name: "Rafa Hafidz", role: "Kepala Divisi Pengembangan Minat dan Bakat", image: "/rafa.png", socialMedia: "https://www.instagram.com/rafahfidz?igsh=MTJtNDQyaTB2angwdA%3D%3D&utm_source=qr" },
          { name: "Salman Alfarisi", role: "Anggota", image: "/mabes.png", socialMedia: "https://www.instagram.com/salman_alfrsy05?igsh=MWEyYWJxNmJqMHU5aw==" },
          { name: "Lusia Ira Widya", role: "Anggota", image: "/lusi.png", socialMedia: "http://instagram.com/lusiairaa" },
          { name: "Dzaki Ibrahim Isa", role: "Anggota", image: "/dzaki.png", socialMedia: "https://www.instagram.com/zkibrhmm" },
          { name: "Essaf Rasio Wicaksono", role: "Anggota", image: "/esap.png", socialMedia: "https://www.instagram.com/esapppppp?igsh=MXYyZHJvaXF1ZXhucg%3D%3D&utm_source=qr" },
          { name: "Salman Rizqi", role: "Anggota", image: "/macil.png", socialMedia: "https://www.instagram.com/slmanrzq_?igsh=MW1zYjhzbGhzMDJpcw==" },
          { name: "Rheifa Aqeela Danish", role: "Anggota", image: "/qeela.png", socialMedia: "http://instagram.com/adrheyy_" },
        ],
      },
    ],
  },
];


// Komponen MemberCard yang menerima data anggota
const MemberCard = ({ member }: { member: Member }) => {
  // Konten gambar (dengan animasi hover jika ada link)
  const imageContent = member.image ? (
    <img
      src={member.image}
      alt={member.name}
      className={`w-full h-full object-cover ${member.socialMedia ? "hover:scale-110 transition-transform duration-300" : ""}`}
    />
  ) : (
    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-400 overflow-hidden relative">
        {member.socialMedia ? (
          <a href={member.socialMedia} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
            {imageContent}
          </a>
        ) : (
          imageContent
        )}
      </div>
      <h4 className="font-display font-bold text-[var(--color-navy-900)] text-center text-[0.95rem]">
        {member.name}
      </h4>
      <p className="text-[0.8rem] text-gray-500 mt-1 text-center">{member.role}</p>
    </div>
  );
};

export default function ProfilPage() {
  // Animasi scroll reveal
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
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
        <div className="text-center reveal">
          <span className="section-label">Struktur Organisasi</span>
          <h1 className="section-title text-4xl md:text-5xl mt-3 mb-6">
            Susunan Pengurus
          </h1>
          <div className="w-[50px] h-[4px] bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-[1.05rem] leading-[1.75]">
            Kenali lebih dekat sosok-sosok di balik layar Himpunan Mahasiswa Teknik Industri yang mendedikasikan diri untuk memajukan himpunan.
          </p>
        </div>
      </div>

      {/* Pimpinan Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-20">
        <h2 className="font-display font-extrabold text-[2rem] text-[var(--color-navy-900)] text-center mb-12 reveal">
          Pimpinan & Pengawas
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {pimpinanData.map((dept, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 reveal reveal-delay-1">
              <h3 className="font-display font-bold text-[1.25rem] text-[var(--color-gold-500)] mb-6 text-center border-b border-gray-100 pb-4">
                {dept.title}
              </h3>
              <div className="flex flex-col items-center gap-6">
                {dept.members.length > 0 && (
                  <div className="inline-block">
                    <MemberCard member={dept.members[0]} />
                  </div>
                )}
                {dept.members.length > 1 && (
                  <div className="flex flex-wrap justify-center gap-6 w-full">
                    {dept.members.slice(1).map((member, i) => (
                      <MemberCard key={i + 1} member={member} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departemen Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="font-display font-extrabold text-[2rem] text-[var(--color-navy-900)] text-center mb-12 reveal">
          Departemen & Divisi
        </h2>
        <div className="flex flex-col gap-12">
          {departemenData.map((deptGroup, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 reveal reveal-delay-2">
              <h3 className="font-display font-extrabold text-[1.4rem] text-[var(--color-navy-800)] mb-8 text-center bg-gray-50 py-4 rounded-xl">
                {deptGroup.name}
              </h3>

              {/* Kepala Departemen */}
              <div className="flex flex-col items-center mb-10">
                <div className="inline-block">
                  <MemberCard member={deptGroup.head} />
                </div>
              </div>

              {/* Divisi di Bawah Departemen */}
              <div className="grid md:grid-cols-2 gap-8">
                {deptGroup.divisions.map((divisi, divIdx) => (
                  <div key={divIdx} className="bg-gray-50/50 rounded-[20px] p-6 border border-gray-100">
                    <h4 className="font-display font-bold text-[1.1rem] text-[var(--color-gold-500)] mb-6 text-center border-b border-gray-100 pb-3">
                      {divisi.title}
                    </h4>
                    <div className="flex flex-col items-center gap-6">
                      {divisi.members.length > 0 && (
                        <div className="inline-block">
                          <MemberCard member={divisi.members[0]} />
                        </div>
                      )}
                      {divisi.members.length > 1 && (
                        <div className="grid grid-cols-2 gap-4 w-full">
                          {divisi.members.slice(1).map((member, i) => (
                            <MemberCard key={i + 1} member={member} />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
