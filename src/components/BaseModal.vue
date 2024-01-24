<script setup>
import { onMounted, ref, watch } from "vue";
import MarkdownIt from "markdown-it";

const emit = defineEmits(["update:show"]);
const props = defineProps(["show", "markdownFile"]);
const close = () => emit("update:show", false);

const markdown = new MarkdownIt();
const markdownContent = ref("");

const fetchAndRenderMarkdown = async () => {
  const response = await fetch(props.markdownFile);
  const text = await response.text();
  markdownContent.value = markdown.render(text);
  console.log(props.markdownFile);
};

onMounted(fetchAndRenderMarkdown);

watch(() => props.markdownFile, fetchAndRenderMarkdown);
</script>

<template>
  <div
    v-if="show"
    class="fixed z-10 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="flex items-end justify-center min-h-screen">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        @click="close"
      ></div>

      <div
        class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-sm sm:w-full box-content m-4 sm:m-0 max-w-screen max-h-screen overflow-x-hidden overflow-y-auto"
      >
        <div
          id="markdown-content"
          class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
          v-html="markdownContent"
        ></div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <slot name="footer">
            <button
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-50 text-base font-medium font-serif text-prairie-sand hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              @click="close"
            >
              Tutup
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
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
  color: #1f2937;
}

#markdown-content h2 {
  font-family: "MedievalSharp", cursive;
  font-size: 2rem;
  color: #fbbf24;
}
</style>
