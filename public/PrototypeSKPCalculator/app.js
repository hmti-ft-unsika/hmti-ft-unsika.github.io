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
      <span></span><span>Kegiatan</span><span>Skor satuan</span><span>Jumlah</span><span>Skor</span>
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
        <span class="item-row__score" data-score-for="${item.row}">0</span>
      `;
      catEl.appendChild(row);
    });

    categoryListEl.appendChild(catEl);
  });

  const qtyInputs = Array.from(document.querySelectorAll('input[type="number"][data-row]'));

  // ---------- Hitung ulang skor ----------
  function recalc() {
    const catSubtotals = {};
    let total = 0;

    qtyInputs.forEach((input) => {
      let qty = parseInt(input.value, 10);
      if (isNaN(qty) || qty < 0) qty = 0;
      const skor = parseFloat(input.dataset.skor);
      const rowScore = qty * skor;
      const scoreEl = document.querySelector(`[data-score-for="${input.dataset.row}"]`);
      if (scoreEl) scoreEl.textContent = rowScore.toLocaleString("id-ID");

      const cat = input.dataset.cat;
      catSubtotals[cat] = (catSubtotals[cat] || 0) + rowScore;
      total += rowScore;
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

      qtyInputs.forEach((input) => {
        let qty = parseInt(input.value, 10);
        if (isNaN(qty) || qty < 0) qty = 0;
        const skor = parseFloat(input.dataset.skor);
        ws.getCell(`H${input.dataset.row}`).value = qty * skor;
      });

      // Catatan: rumus total resmi pada template menghitung sub-jumlah Kategori 4
      // (LKTI, sel H45) dua kali. Kami perbaiki di sini agar Jumlah Skor Akhir SKP
      // pada file yang diunduh sesuai dengan total yang benar.
      ws.getCell("E82").value = {
        formula: "H79+H74+H69+H67+H61+H55+H50+H45+H38+H30+H24",
      };

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
