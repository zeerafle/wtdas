<script setup>
import { ref, onMounted } from "vue";
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();
const props = defineProps(["id"]);

const htmlContent = ref("")

const fetchMarkdown = async (id) => {
  const response = await fetch(`/guides/${id}.md`);
  const text = await response.text();
  htmlContent.value = markdown.render(text);
}

onMounted(() => {
  fetchMarkdown(props.id)
})
</script>

<template>
  <dialog :id="props.id" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <div id="markdown-content" v-html="htmlContent"></div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Tutup</button>
        </form>
      </div>
    </div>
  </dialog>
</template>


<style>
#markdown-content h1 {
  font-family: "MedievalSharp", cursive;
  font-size: 2.5rem;
  color: #fbbf24;
}

/* Add a media query for small screens
@media screen and (max-width: 600px) {
  #markdown-content h1 {
    font-size: 1.5rem;
  }
}
*/

#markdown-content p {
  font-family: "Libre Baskerville", serif;
  font-size: 1rem;
  padding-bottom: 1rem;
}

#markdown-content h2 {
  font-family: "MedievalSharp", cursive;
  font-size: 2rem;
  color: #fbbf24;
}

#markdown-content ul {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  list-style-type: disc;
}
</style>
