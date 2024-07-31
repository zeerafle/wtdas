<script setup>
import { computed } from "vue";
import VueMermaidString from "vue-mermaid-string";
import endent from "endent";
import DialogItem from "./DialogItem.vue";

const diagram = computed(() => endent`
  flowchart TD
    revisidosen[Revisi dosen pembimbing]
    click revisidosen
`)

const nodeClick = (nodeId) => {
  console.log(nodeId, "click");
  const modalElement = document.getElementById(nodeId);
  if (modalElement) {
    modalElement.showModal();
  }
}
</script>

<template>
  <VueMermaidString :value="diagram" :options="{ securityLevel: 'loose' }" @node-click="nodeClick"/>
  <DialogItem id="revisidosen"/>
</template>
