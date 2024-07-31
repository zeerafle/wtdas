<script setup>
import { computed } from "vue";
import VueMermaidString from "vue-mermaid-string";
import endent from "endent";
import DialogItem from "./DialogItem.vue";

const diagram = computed(() => endent`
  graph TB
    burncd["Burn CD"]
    fcskripsi["FC Skripsi"]
    fcsuratkti["Submit KTI ke perpus Unmul"]
    jilidskripsi["Jilid skripsi"]
    revisidosen["Revisi dosen pembimbing"]
    revisisekdekan["Revisi sekertaris Dekan"]
    skbebaspustakateknik["Sumbang buku & \nSkripsi ke perpus Teknik"]
    ttddekanskripsi["Tanda tangan Dekan"]
    ttddospemskripsi["Tanda tangan dosen pembimbing"]
    ttdkaprodiskripsi["Paraf kaprodi"]
    ttdkeaslianskripsi["Tanda tangan bermaterai"]
    ttdskripsi["Skripsi jadi"]
    skl["Surat Keterangan Lulus (SKL)"]
    ttdbukukaprodi["Tanda tangan kaprodi di\nform sumbang buku perpus Teknik"]

    revisidosen --> revisisekdekan
    revisisekdekan --> jilidskripsi
    jilidskripsi --> ttddospemskripsi
    ttddospemskripsi --> ttdkaprodiskripsi
    jilidskripsi --> ttdkeaslianskripsi
    ttdkaprodiskripsi ---> ttddekanskripsi
    ttdkeaslianskripsi --> ttddekanskripsi
    ttddekanskripsi --> ttdskripsi
    ttdskripsi --> burncd
    ttdskripsi ----> fcskripsi
    ttdskripsi --> fcsuratkti
    ttdbukukaprodi --> skbebaspustakateknik
    burncd ---> skbebaspustakateknik

    fcskripsi --> skbebaspustakateknik
    fcsuratkti ----> skl
    skbebaspustakateknik --> skl
    
    click revisisekdekan
    click revisidosen
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
  <div class="w-full overflow-auto p-10">
    <VueMermaidString :value="diagram" :options="{ securityLevel: 'loose', theme:theme }" @node-click="nodeClick"
      class="w-full h-auto transform scale-100" />
  </div>
  <DialogItem id="revisidosen" />
</template>
