// ============================================
// Kalkulator IPK/IPS — Teknik Industri UNSIKA
// ============================================

const skalaNilai = {
  "A": 4.00, "A-": 3.75, "B+": 3.50, "B": 3.25, "B-": 3.00,
  "C+": 2.75, "C": 2.50, "D": 1.00, "E": 0.00
};

// Data kurikulum Teknik Industri UNSIKA 2024 (dari form KRS)
const kurikulum = {
  1: [
    ["TIN62401","Kalkulus I",3],
    ["TIN62404","Fisika I",3],
    ["TIN62407","Kimia",2],
    ["TIN62408","Anatomi dan Fisiologi",2],
    ["TIN62412","Menggambar Teknik",2],
    ["TIN62416","Pengantar Teknik Industri",2],
    ["TIN62435","Logika Pemrograman",2],
    ["USK61206","Bahasa Inggris",2],
    ["USK61303","Pancasila",2],
  ],
  2: [
    ["TIN62402","Kalkulus II",3],
    ["TIN62405","Fisika II",3],
    ["TIN62409","Teori Probabilitas",3],
    ["TIN62413","Praktikum Menggambar Teknik",1],
    ["TIN62414","Mekanika Teknik",2],
    ["TIN62415","Material Teknik",2],
    ["TIN62432","Ekologi Industri",2],
    ["USK61202","Bahasa Indonesia",2],
    ["USK61304","Kewarganegaraan",2],
  ],
  3: [
    ["TIN62403","Kalkulus III",3],
    ["TIN62406","Praktikum Fisika",1],
    ["TIN62410","Statistika",3],
    ["TIN62411","Aljabar Linier",3],
    ["TIN62422","Ergonomika",2],
    ["TIN62424","Proses Manufaktur",3],
    ["TIN62425","Praktikum Proses Manufaktur",1],
    ["TIN62443","Psikologi Industri",2],
    ["TIN62444","Pemasaran Industri",2],
  ],
  4: [
    ["TIN62417","Riset Operasi I",3],
    ["TIN62419","Analitika Data",2],
    ["TIN62423","Pengukuran dan Perancangan Sistem Kerja",2],
    ["TIN62427","Perencanaan dan Pengendalian Produksi",3],
    ["TIN62431","Keselamatan dan Kesehatan Kerja",2],
    ["TIN62433","Perilaku Organisasi",2],
    ["TIN62434","Analisis dan Pengendalian Biaya",2],
    ["USK611xx","Agama (sesuai keyakinan)",2],
    ["USK61207","Budaya Bangsa",2],
  ],
  5: [
    ["TIN62418","Riset Operasi II",3],
    ["TIN62426","Pengendalian dan Penjaminan Mutu",3],
    ["TIN62429","Sistem Rantai Pasok",2],
    ["TIN62436","Analisis dan Perancangan Sistem Informasi",2],
    ["TIN62437","Praktikum Analisis dan Perancangan Sistem Informasi",1],
    ["TIN62441","Metodologi Penelitian",2],
    ["TIN62442","Praktikum Terintegrasi",2],
    ["TIN62445","Sistem Produksi",2],
    ["TIN62446","Rekayasa Keandalan",2],
    ["TIN62448","Perancangan dan Pengembangan Produk",2],
  ],
  6: [
    ["TIN62420","Ekonomika dan Ekonomi Teknik",3],
    ["TIN62421","Simulasi Sistem",3],
    ["TIN62428","Pemodelan Sistem",2],
    ["TIN62430","Sistem Persediaan",2],
    ["TIN62438","Perancangan dan Manajemen Organisasi Industri",3],
    ["TIN62439","Perancangan Tata Letak Fasilitas",2],
    ["TIN62440","Praktikum Perancangan Tata Letak Fasilitas",1],
    ["TIN62449","Praktek Kerja Lapangan",2],
    ["USK61605","Kuliah Kerja Nyata",3],
  ],
  7: [
    ["TIN62447","Kewirausahaan",2],
    ["FTK61601","Etika Profesi",2],
    ["TIN62451","Seminar Proposal Skripsi",1],
    ["TIN62450","Tugas Akhir I (Perancangan Sistem Terpadu)",3],
    ["PILIHAN1","Mata Kuliah Pilihan I",2],
    ["PILIHAN2","Mata Kuliah Pilihan II",2],
    ["PILIHAN3","Mata Kuliah Pilihan III",2],
  ],
  8: [
    ["TIN62452","Tugas Akhir II (Skripsi)",4],
    ["PILIHAN4","Mata Kuliah Pilihan IV",2],
    ["PILIHAN5","Mata Kuliah Pilihan V",2],
  ],
};

// Daftar mata kuliah pilihan (untuk slot PILIHAN1..5 semester 7 & 8)
const mkPilihan = [
  ["TIN62453","Ergonomi Kognitif",2],
  ["TIN62454","Perancangan Berpusat pada Manusia",2],
  ["TIN62455","Analisis Multivariat",2],
  ["TIN62456","Rekayasa Kualitas",2],
  ["TIN62457","Metode Metaheuristik",2],
  ["TIN62458","Sistem Produksi Tepat Waktu",2],
  ["TIN62459","Manajemen SDM",2],
  ["TIN62460","Manajemen Proyek",2],
  ["TIN62461","Sistem Pendukung Keputusan",2],
  ["TIN62462","Pemodelan dan Rekayasa Proses Bisnis Logistik",2],
  ["TIN62463","Sistem Transportasi dan Distribusi",2],
  ["TIN62464","Sistem Dinamik",2],
  ["TIN62465","Pengantar Biomekanika Kerja",2],
  ["TIN62466","Ergonomi Makro",2],
  ["TIN62467","Sistem Manufaktur Cerdas",2],
  ["TIN62468","Rekayasa Produktivitas",2],
  ["TIN62469","Penjadwalan Produksi",2],
  ["TIN62470","Penelitian Operasional Lanjut",2],
  ["TIN62471","Manajemen Keuangan",2],
  ["TIN62472","Manajemen Strategi",2],
  ["TIN62473","Perancangan Eksperimen",2],
  ["TIN62474","Sistem Manajemen Pergudangan",2],
  ["TIN62475","Manajemen Pengadaan",2],
  ["TIN62476","Teori Pengambilan Keputusan",2],
];

let semesterCount = 0;
let modeAktif = "detail";

function buatOptionNilai(selected) {
  return `<option value="">-</option>` + Object.keys(skalaNilai).map(n =>
    `<option value="${n}" ${n === selected ? "selected" : ""}>${n}</option>`
  ).join("");
}

function buatOptionPilihan(selectedKode) {
  let opts = `<option value="">— pilih MK pilihan —</option>`;
  opts += mkPilihan.map(([kode, nama, sks]) =>
    `<option value="${kode}" data-sks="${sks}" ${kode === selectedKode ? "selected" : ""}>${nama} (${sks} sks)</option>`
  ).join("");
  return opts;
}

function gantiMode(mode) {
  modeAktif = mode;
  document.getElementById("btn-mode-detail").classList.toggle("active", mode === "detail");
  document.getElementById("btn-mode-cepat").classList.toggle("active", mode === "cepat");
  document.getElementById("detail-mode-container").style.display = mode === "detail" ? "" : "none";
  document.getElementById("cepat-mode-container").style.display = mode === "cepat" ? "" : "none";
  hitungSemua();
}

function tambahSemester() {
  semesterCount++;
  const id = semesterCount;
  const container = document.getElementById("semester-container");

  const div = document.createElement("div");
  div.className = "semester-card";
  div.id = `semester-${id}`;

  let opsiSemester = "";
  for (let i = 1; i <= 8; i++) {
    opsiSemester += `<option value="${i}">Semester ${["I","II","III","IV","V","VI","VII","VIII"][i-1]}</option>`;
  }

  div.innerHTML = `
    <div class="semester-card-head">
      <div class="left">
        <select class="pilih-semester" id="pilih-semester-${id}">
          <option value="">Pilih semester...</option>
          ${opsiSemester}
        </select>
        <button class="btn btn-primary" onclick="muatKurikulum(${id})">Muat mata kuliah</button>
      </div>
      <button class="btn btn-ghost" onclick="hapusSemester(${id})">Hapus blok ✕</button>
    </div>
    <div class="hint-checkbox">Centang kolom "Ambil" untuk mata kuliah yang benar-benar diambil semester ini.</div>
    <div class="mk-table-wrap">
      <table class="mk-table">
        <thead>
          <tr>
            <th style="width:8%">Ambil</th>
            <th class="col-kode">Kode</th>
            <th class="col-mk">Mata Kuliah</th>
            <th class="col-sks">SKS</th>
            <th class="col-nilai">Nilai</th>
            <th class="col-hapus"></th>
          </tr>
        </thead>
        <tbody id="mk-body-${id}">
          <tr><td colspan="6" class="empty-hint">Pilih semester lalu klik "Muat mata kuliah", atau tambah manual di bawah.</td></tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-soft" style="margin-top:10px;" onclick="tambahMatkulManual(${id})">+ Tambah mata kuliah manual</button>
    <div class="ips-info">IPS: <b id="ips-${id}">0.00</b></div>
  `;
  container.appendChild(div);
}

function muatKurikulum(semId) {
  const semNum = document.getElementById(`pilih-semester-${semId}`).value;
  if (!semNum) return;
  const tbody = document.getElementById(`mk-body-${semId}`);
  tbody.innerHTML = "";

  kurikulum[semNum].forEach(([kode, nama, sks]) => {
    if (kode.startsWith("PILIHAN")) {
      tambahBarisPilihan(semId);
    } else {
      tambahBarisWajib(semId, kode, nama, sks);
    }
  });
  hitungSemua();
}

function tambahBarisWajib(semId, kode, nama, sks) {
  const tbody = document.getElementById(`mk-body-${semId}`);
  const row = document.createElement("tr");
  row.innerHTML = `
    <td style="text-align:center"><input type="checkbox" class="chk-aktif" checked onchange="toggleBaris(this)"></td>
    <td class="col-kode">${kode}</td>
    <td class="col-mk"><input type="text" value="${nama}" readonly></td>
    <td class="col-sks"><input type="number" value="${sks}" readonly oninput="hitungSemua()"></td>
    <td class="col-nilai"><select onchange="hitungSemua()">${buatOptionNilai("")}</select></td>
    <td class="col-hapus"><button class="btn btn-ghost" onclick="hapusMatkul(this)">✕</button></td>
  `;
  tbody.appendChild(row);
}

function tambahBarisPilihan(semId) {
  const tbody = document.getElementById(`mk-body-${semId}`);
  const row = document.createElement("tr");
  row.innerHTML = `
    <td style="text-align:center"><input type="checkbox" class="chk-aktif" checked onchange="toggleBaris(this)"></td>
    <td class="col-kode">—</td>
    <td class="col-mk"><select class="pilihan-select" onchange="pilihMkPilihan(this)">${buatOptionPilihan("")}</select></td>
    <td class="col-sks"><input type="number" value="2" readonly oninput="hitungSemua()"></td>
    <td class="col-nilai"><select onchange="hitungSemua()">${buatOptionNilai("")}</select></td>
    <td class="col-hapus"><button class="btn btn-ghost" onclick="hapusMatkul(this)">✕</button></td>
  `;
  tbody.appendChild(row);
}

function pilihMkPilihan(sel) {
  const opt = sel.options[sel.selectedIndex];
  const sks = opt.getAttribute("data-sks");
  const row = sel.closest("tr");
  if (sks) {
    row.querySelector(".col-sks input").value = sks;
  }
  hitungSemua();
}

function tambahMatkulManual(semId) {
  const tbody = document.getElementById(`mk-body-${semId}`);
  const hint = tbody.querySelector(".empty-hint");
  if (hint) tbody.innerHTML = "";
  const row = document.createElement("tr");
  row.innerHTML = `
    <td style="text-align:center"><input type="checkbox" class="chk-aktif" checked onchange="toggleBaris(this)"></td>
    <td class="col-kode">—</td>
    <td class="col-mk"><input type="text" placeholder="Nama mata kuliah"></td>
    <td class="col-sks"><input type="number" min="0" value="2" oninput="hitungSemua()"></td>
    <td class="col-nilai"><select onchange="hitungSemua()">${buatOptionNilai("")}</select></td>
    <td class="col-hapus"><button class="btn btn-ghost" onclick="hapusMatkul(this)">✕</button></td>
  `;
  tbody.appendChild(row);
  hitungSemua();
}

function toggleBaris(chk) {
  const row = chk.closest("tr");
  row.classList.toggle("mk-nonaktif", !chk.checked);
  hitungSemua();
}

function hapusMatkul(btn) {
  const tbody = btn.closest("tbody");
  btn.closest("tr").remove();
  if (tbody.children.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-hint">Pilih semester lalu klik "Muat mata kuliah", atau tambah manual di bawah.</td></tr>`;
  }
  hitungSemua();
}

function hapusSemester(id) {
  document.getElementById(`semester-${id}`).remove();
  hitungSemua();
}

function buatTabelCepat() {
  const tbody = document.getElementById("cepat-body");
  tbody.innerHTML = "";
  const namaSemester = ["I","II","III","IV","V","VI","VII","VIII"];
  namaSemester.forEach((nama, idx) => {
    const sksDefault = kurikulum[idx + 1].reduce((a, [,,sks]) => a + sks, 0);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td style="text-align:center"><input type="checkbox" class="chk-cepat" onchange="hitungSemua()"></td>
      <td>Semester ${nama}</td>
      <td class="col-sks"><input type="number" min="0" class="sks-cepat" value="${sksDefault}" oninput="hitungSemua()"></td>
      <td class="col-nilai"><input type="number" min="0" max="4" step="0.01" class="ips-cepat" placeholder="0.00" oninput="hitungSemua()"></td>
    `;
    tbody.appendChild(row);
  });
}

function hitungSemua() {
  let totalSksSemua = 0;
  let totalBobotSemua = 0;

  if (modeAktif === "detail") {
    document.querySelectorAll(".semester-card").forEach(block => {
      const id = block.id.split("-")[1];
      const rows = block.querySelectorAll(`#mk-body-${id} tr`);
      let sksSemester = 0;
      let bobotSemester = 0;

      rows.forEach(row => {
        const chk = row.querySelector(".chk-aktif");
        if (!chk || !chk.checked) return;
        const sksInput = row.querySelector(".col-sks input");
        const nilaiSelect = row.querySelector(".col-nilai select");
        if (!sksInput || !nilaiSelect) return;
        const sks = parseFloat(sksInput.value) || 0;
        const nilai = nilaiSelect.value;
        if (!nilai) return;
        const bobot = skalaNilai[nilai] ?? 0;
        sksSemester += sks;
        bobotSemester += sks * bobot;
      });

      const ips = sksSemester > 0 ? bobotSemester / sksSemester : 0;
      const ipsEl = document.getElementById(`ips-${id}`);
      if (ipsEl) ipsEl.textContent = ips.toFixed(2);

      totalSksSemua += sksSemester;
      totalBobotSemua += bobotSemester;
    });
  } else {
    document.querySelectorAll("#cepat-body tr").forEach(row => {
      const chk = row.querySelector(".chk-cepat");
      if (!chk || !chk.checked) return;
      const sks = parseFloat(row.querySelector(".sks-cepat").value) || 0;
      const ipsVal = row.querySelector(".ips-cepat").value;
      if (ipsVal === "") return;
      const ips = parseFloat(ipsVal) || 0;
      totalSksSemua += sks;
      totalBobotSemua += sks * ips;
    });
  }

  const ipk = totalSksSemua > 0 ? totalBobotSemua / totalSksSemua : 0;
  document.getElementById("total-sks").textContent = totalSksSemua;
  document.getElementById("ipk-value").textContent = ipk.toFixed(2);
  document.getElementById("hero-total-sks").textContent = totalSksSemua;
  document.getElementById("hero-ipk").textContent = ipk.toFixed(2);
}

// inisialisasi
tambahSemester();
buatTabelCepat();
hitungSemua();
