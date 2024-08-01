<script setup>
import { computed } from "vue";
import VueMermaidString from "vue-mermaid-string";
import endent from "endent";
import DialogItem from "./DialogItem.vue";

const diagram = computed(() => endent`
  graph TB
    burncd["Burn CD"]
    fcskripsi["Fotocopy Skripsi"]
    submitkti["Submit KTI\nke perpus Unmul"]
    jilidskripsi["Jilid skripsi"]
    revisidosen["Revisi dosen pembimbing"]
    revisisekdekan["Revisi sekertaris Dekan"]
    skbebaspustakateknik["Sumbang buku & \nSkripsi ke perpus Teknik"]
    ttddekanskripsi["Tanda tangan Dekan"]
    ttddospemskripsi["Tanda tangan\ndosen pembimbing"]
    ttdkaprodiskripsi["Paraf kaprodi"]
    ttdkeaslianskripsi["Tanda tangan bermaterai"]
    ttdskripsi["Skripsi jadi"]
    skl["Surat Keterangan Lulus (SKL)"]
    ttdbukukaprodi["Form sumbang buku"]
    scanskripsi["Scan lembaran Skripsi"]
    daftarwisuda["Daftar Wisuda"]
    wisuda["Wisuda"]

    revisidosen --> revisisekdekan
    revisisekdekan --> jilidskripsi
    jilidskripsi --> ttddospemskripsi
    ttddospemskripsi --> ttdkaprodiskripsi
    jilidskripsi --> ttdkeaslianskripsi
    ttdkaprodiskripsi ---> ttddekanskripsi
    ttdkeaslianskripsi --> ttddekanskripsi
    ttddekanskripsi --> ttdskripsi
    ttdskripsi --> scanskripsi
    scanskripsi --> burncd
    ttdskripsi --> fcskripsi
    scanskripsi -. "Jika punya scanner" .-> submitkti
    ttdbukukaprodi --> skbebaspustakateknik
    burncd ---> skbebaspustakateknik
    fcskripsi ----> skbebaspustakateknik
    burncd --> submitkti

    submitkti ----> skl
    skbebaspustakateknik --> skl

    skl --> daftarwisuda
    daftarwisuda --> wisuda
    
    click revisisekdekan
    click revisidosen
    click jilidskripsi
    click ttddospemskripsi
    click ttdkaprodiskripsi
    click ttdkeaslianskripsi
    click ttddekanskripsi
    click ttdskripsi
    click scanskripsi
    click ttdbukukaprodi
    click skbebaspustakateknik
    click burncd
    click fcskripsi
    click submitkti
    click skl
`)

const nodeClick = (nodeId) => {
  console.log(nodeId, "click");
  const modalElement = document.getElementById(nodeId);
  if (modalElement) {
    modalElement.showModal();
  }
}

const theme = computed(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  } else {
    return 'base'
  }
});

</script>

<template>
  <div class="w-full px-10 flex items-center justify-center">
    <div class="w-full max-w-4xl">
      <VueMermaidString :value="diagram" :options="{ securityLevel: 'loose', theme: theme }" @node-click="nodeClick"
        class="w-full h-auto" />
    </div>
  </div>
  <DialogItem id="revisidosen" />
  <DialogItem id="revisisekdekan" />
  <DialogItem id="jilidskripsi" />
  <DialogItem id="ttddospemskripsi" />
  <DialogItem id="ttdkaprodiskripsi" />
  <DialogItem id="ttdkeaslianskripsi" />
  <DialogItem id="ttddekanskripsi" />
  <DialogItem id="ttdskripsi" />
  <DialogItem id="scanskripsi" />
  <DialogItem id="ttdbukukaprodi" />
  <DialogItem id="skbebaspustakateknik" />
  <DialogItem id="burncd" />
  <DialogItem id="fcskripsi" />
  <DialogItem id="submitkti" />
  <DialogItem id="skl" />
</template>
