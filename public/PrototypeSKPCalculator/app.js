(function () {
  "use strict";

  const categoryListEl = document.getElementById("categoryList");
  const totalScoreEl = document.getElementById("totalScore");
  const statusTextEl = document.getElementById("statusText");
  const statusGapEl = document.getElementById("statusGap");
  const progressBarEl = document.getElementById("progressBar");
  const rekapStatusEl = document.getElementById("rekapStatus");
  const jenjangEl = document.getElementById("jenjang");
  const angkatanLamaEl = document.getElementById("angkatanLama");
  const downloadBtn = document.getElementById("downloadBtn");
  const downloadNote = document.getElementById("downloadNote");

  // ---------- Render tabel kegiatan ----------
  SKP_CATEGORIES.forEach((cat) => {
    const catEl = document.createElement("div");
    catEl.className = "category";

    const head = document.createElement("div");
    head.className = "category__head";
    head.innerHTML = `
      <span class="category__num">${String(cat.no).padStart(2, "0")}</span>
      <span class="category__title">${cat.title}</span>
      <span class="category__subtotal" data-subtotal="${cat.no}">0 skor</span>
    `;
    catEl.appendChild(head);

    const colHead = document.createElement("div");
    colHead.className = "item-row item-row--head";
    colHead.innerHTML = `
      <span></span><span>Kegiatan</span><span>Skor satuan</span><span>Jumlah</span><span>Tautan bukti</span><span>Skor</span>
    `;
    catEl.appendChild(colHead);

    cat.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <span class="item-row__letter">${item.letter}</span>
        <span class="item-row__label">${item.label}<small>${item.satuan}</small></span>
        <span class="item-row__skor">${item.skor}</span>
        <span class="item-row__qty">
          <input type="number" min="0" step="1" value="0" data-row="${item.row}" data-skor="${item.skor}" data-cat="${cat.no}" aria-label="Jumlah untuk ${item.label}" />
        </span>
        <span class="item-row__bukti">
          <input type="text" placeholder="Link sertifikat/dokumen" data-bukti-row="${item.row}" aria-label="Tautan bukti untuk ${item.label}" />
        </span>
        <span class="item-row__score" data-score-for="${item.row}">0</span>
      `;
      catEl.appendChild(row);
    });

    categoryListEl.appendChild(catEl);
  });

  const qtyInputs = Array.from(document.querySelectorAll('input[type="number"][data-row]'));
  const buktiInputs = Array.from(document.querySelectorAll('input[type="text"][data-bukti-row]'));

  // ---------- Hitung skor tiap baris/kategori/total dari input saat ini ----------
  // catSubtotals dan itemScores dikeyakan pada nomor kategori & nomor baris template
  // agar bisa dipakai ulang persis sama saat mengisi file Excel (bukan mengandalkan
  // rumus SUM di dalam file, yang nilainya bisa basi/stale di sebagian aplikasi).
  function computeState() {
    const catSubtotals = {};
    const itemScores = {};
    let total = 0;

    qtyInputs.forEach((input) => {
      let qty = parseInt(input.value, 10);
      if (isNaN(qty) || qty < 0) qty = 0;
      const skor = parseFloat(input.dataset.skor);
      const rowScore = qty * skor;
      itemScores[input.dataset.row] = rowScore;

      const cat = input.dataset.cat;
      catSubtotals[cat] = (catSubtotals[cat] || 0) + rowScore;
      total += rowScore;
    });

    return { catSubtotals, itemScores, total };
  }

  // ---------- Hitung ulang & perbarui tampilan ----------
  function recalc() {
    const { catSubtotals, itemScores, total } = computeState();

    Object.keys(itemScores).forEach((row) => {
      const scoreEl = document.querySelector(`[data-score-for="${row}"]`);
      if (scoreEl) scoreEl.textContent = itemScores[row].toLocaleString("id-ID");
    });

    Object.keys(catSubtotals).forEach((cat) => {
      const el = document.querySelector(`[data-subtotal="${cat}"]`);
      if (el) el.textContent = `${catSubtotals[cat].toLocaleString("id-ID")} skor`;
    });

    totalScoreEl.textContent = total.toLocaleString("id-ID");

    const threshold = angkatanLamaEl.checked
      ? SKP_THRESHOLDS.angkatanLama
      : SKP_THRESHOLDS[jenjangEl.value];

    const pct = Math.min(100, Math.round((total / threshold) * 100));
    progressBarEl.style.width = pct + "%";

    if (total >= threshold) {
      rekapStatusEl.classList.add("ok");
      statusTextEl.innerHTML = `Sudah memenuhi ambang minimal <strong>${threshold}</strong> SKP. Selamat!`;
    } else {
      rekapStatusEl.classList.remove("ok");
      const gap = threshold - total;
      statusTextEl.innerHTML = `Minimal <strong>${threshold}</strong> SKP &mdash; masih membutuhkan <strong>${gap.toLocaleString("id-ID")}</strong> poin lagi.`;
    }

    return total;
  }

  qtyInputs.forEach((input) => input.addEventListener("input", recalc));
  jenjangEl.addEventListener("change", recalc);
  angkatanLamaEl.addEventListener("change", recalc);
  recalc();

  // ---------- Unduh Excel dari template ----------
  downloadBtn.addEventListener("click", async () => {
    downloadBtn.disabled = true;
    downloadNote.textContent = "Menyiapkan file…";
    downloadNote.className = "note";

    try {
      const nama = document.getElementById("nama").value.trim();
      const npm = document.getElementById("npm").value.trim();
      const dosen = document.getElementById("dosen").value.trim();

      const resp = await fetch("assets/template.xlsx");
      if (!resp.ok) throw new Error("Template tidak ditemukan di assets/template.xlsx");
      const buffer = await resp.arrayBuffer();

      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(buffer);
      const ws = workbook.getWorksheet("SKP TI") || workbook.worksheets[0];

      ws.getCell("E12").value = nama;
      ws.getCell("E13").value = npm;
      ws.getCell("E16").value = dosen;
      // Sel identitas tidak digabung (merge) di template asli, jadi kita rentangkan
      // areanya sampai kolom I supaya teks nama/dosen yang panjang tidak terpotong
      // atau menabrak kolom lain saat file dibuka.
      ["12", "13", "16"].forEach((r) => {
        const range = `E${r}:I${r}`;
        if (!ws.getCell(`E${r}`).isMerged) ws.mergeCells(range);
      });

      const { catSubtotals, itemScores, total } = computeState();

      // Skor tiap kegiatan (kolom H) — ditulis sebagai angka biasa.
      qtyInputs.forEach((input) => {
        ws.getCell(`H${input.dataset.row}`).value = itemScores[input.dataset.row] || 0;
      });

      // Tautan bukti (kolom I) — mengganti catatan contoh bawaan template
      // dengan tautan yang benar-benar diisi pengguna (atau dikosongkan jika belum ada).
      buktiInputs.forEach((input) => {
        ws.getCell(`I${input.dataset.buktiRow}`).value = input.value.trim();
      });

      // Sub-jumlah tiap kategori (kolom H, baris "Sub Jumlah") — ditulis sebagai
      // angka pasti, BUKAN rumus SUM bawaan template. Alasannya: rumus itu menyimpan
      // nilai cache dari contoh lama di template, dan sebagian aplikasi (mis. yang
      // tidak auto-recalculate saat membuka file) akan menampilkan angka lama itu
      // meski isinya sudah kita ubah. Menulis angka langsung menghindari masalah ini
      // sepenuhnya, di aplikasi mana pun file dibuka.
      SKP_CATEGORIES.forEach((cat) => {
        ws.getCell(`H${cat.subtotalRow}`).value = catSubtotals[cat.no] || 0;
      });

      // Jumlah Skor Akhir SKP (E82). Rumus resmi template menjumlahkan sub-jumlah
      // Kategori 4 (LKTI, sel H45) dua kali — kami hitung ulang dari total yang benar.
      ws.getCell("E82").value = total;

      const outBuffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([outBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const safeName = nama ? nama.replace(/[^a-z0-9]+/gi, "_") : "Mahasiswa";
      a.href = url;
      a.download = `Berita_Acara_SKP_${safeName}.xlsx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      downloadNote.textContent = "Berhasil diunduh.";
      downloadNote.className = "note success";
    } catch (err) {
      console.error(err);
      downloadNote.textContent = "Gagal membuat file: " + err.message;
      downloadNote.className = "note error";
    } finally {
      downloadBtn.disabled = false;
    }
  });
})();
