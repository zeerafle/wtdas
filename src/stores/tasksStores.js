import { defineStore } from "pinia";
import MarkdownIt from "markdown-it";
import { useLocalStorage } from "@vueuse/core";

const markdown = new MarkdownIt();

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: useLocalStorage("tasks", [
      {
        content: "Panduan",
        id: "welcome",
        guide: "",
        status: "Belum",
      },
      {
        content: "Beli buku yang direkomendasikan Prodi",
        quantity: 1,
        id: "belibuku",
        guide: "",
        status: "Belum",
      },
      {
        content: "Bukti telah mengisi Tracer Study Mahasiswa",
        quantity: 1,
        id: "buktits",
        status: "Belum",
      },
      {
        content:
          "Burn CD yang isinya file skripsi yang sudah ditandatangai (docx dan pdf), file paper (docx dan pdf), pas foto berwarna",
        require: ["ttdskripsi", "pasfoto"],
        id: "burncd",
        status: "Belum",
      },
      {
        content: "Fotocopy Ijazah terakhir yang sudah dilegalisir",
        quantity: 1,
        id: "fcijazah",
        status: "Belum",
      },
      {
        content:
          "Fotocopy halaman judul, halaman pengesahan, halaman pernyataan keaslian skripsi, dan halaman abstrak berbahasa Inggris",
        quantity: 1,
        require: ["ttdskripsi"],
        id: "fcskripsi",
        status: "Belum",
      },
      {
        content:
          "Fotocopy slip UKT 2 Semester terakhir yang sudah dilegalisisr di bagian keuangan",
        quantity: 1,
        id: "fcslipukt",
        status: "Belum",
      },
      {
        content:
          "Fotocopy surat bukti Penyerahan Karya Tulis dari Perpustakaan Universitas Mulawarman",
        quantity: 1,
        require: ["jilidttdskripsi", "pasfoto"],
        id: "fcsuratkti",
        status: "Belum",
      },
      {
        content: "Jilid skripsi di copy center",
        require: ["revisidosen", "revisisekdekan"],
        id: "jilidskripsi",
        status: "Belum",
      },
      {
        content: "KHS dari semester awal sampai semester akhir (Asli)",
        id: "khsfull",
        status: "Belum",
      },
      {
        content: "KHS Semester pendek yang pernah ditempuh (Asli)",
        id: "khspendek",
        status: "Belum",
      },
      {
        content: "Nilai PKL & Nilai KKN (Asli)",
        id: "nilaipklkkn",
        status: "Belum",
      },
      {
        content:
          "Pas foto terbaru hitam putih ukuran 3x4, memakai jas, berdasi, tidak memakai kaca mata & kedua telinga dapat terlihat",
        quantity: 3,
        id: "pasfoto",
        status: "Belum",
      },
      {
        content: "Revisi dosen pembimbing",
        id: "revisidosen",
        guide: "",
        status: "Belum",
      },
      {
        content: "Revisi sekertaris Dekan",
        id: "revisisekdekan",
        status: "Belum",
      },
      {
        content:
          "Surat Keterangan Bebas Pustaka & Surat Bukti Penyerahan Skripsi dari Perpustakaan Fakultas Teknik (Asli)",
        require: ["ttdbukukaprodi", "jilidttdskripsi", "burncd"],
        id: "skbebaspustakateknik",
        status: "Belum",
      },
      {
        content:
          "Minta tanda tangan Kaprodi di lembar 'Sumbangan Buku dari KPS' (minta di Perpustakaan Teknik)",
        require: ["belibuku"],
        id: "ttdbukukaprodi",
        status: "Belum",
      },
      {
        content: "Minta tanda tangan Dekan",
        require: ["ttdkaprodiskripsi", "ttdkeaslianskripsi"],
        id: "ttddekanskripsi",
        status: "Belum",
      },
      {
        content: "Minta tanda tangan kedua dosen pembimbing",
        require: ["jilidskripsi"],
        id: "ttddospemskripsi",
        status: "Belum",
      },
      {
        content: "Minta paraf kaprodi",
        require: ["ttddospemskripsi"],
        id: "ttdkaprodiskripsi",
        status: "Belum",
      },
      {
        content:
          "Tanda tangan bermaterai di lembar pernyataan keaslian Skripsi",
        require: ["jilidskripsi"],
        id: "ttdkeaslianskripsi",
        status: "Belum",
      },
      {
        content:
          "Skripsi yang sudah ditandatangani oleh dospem, dekan, dan tanda tangan bermaterai di lembar pernyataan keaslian",
        require: ["ttddekanskripsi"],
        id: "ttdskripsi",
        status: "Belum",
      },
    ]),
  }),
  getters: {
    getTasks: (state) => state.tasks,
    getTaskById: (state) => {
      return (id) => state.tasks.find((task) => task.id === id);
    },
  },
  actions: {
    async fetchMarkdown(taskId, markdownFile) {
      const response = await fetch(markdownFile);
      const text = await response.text();
      const task = this.getTaskById(taskId);
      task.guide = markdown.render(text);
    },
    updateTaskStatus(id, status) {
      const task = this.getTaskById(id);
      if (task) {
        task.status = status;
      } else {
        console.error(`Task with id ${id} not found.`);
      }
    },
  },
});
