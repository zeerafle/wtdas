<script setup>
import { ref, watch } from "vue";
import { useTasksStore } from "../stores/tasksStores.js";

const emit = defineEmits(["update:show"]);
const props = defineProps(["show", "taskId"]);
const close = () => emit("update:show", false);

const isDroppedDown = ref(false);
const currentStatus = ref("Update status");
const activeStatus = ref("Belum");

const setStatus = (status) => {
  currentStatus.value = status;
  activeStatus.value = status;
  isDroppedDown.value = false;
};

const taskStore = useTasksStore();
const task = ref(null);

watch(props, (newProps) => {
  if (newProps.taskId) {
    task.value = taskStore.getTaskById(newProps.taskId);
  }
});
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
          v-html="task.guide"
        ></div>
        <!--        status update-->
        <div
          class="px-4 sm:p-6 font-serif text-sm relative inline-flex rounded-md gap-1"
        >
          <span class="inline-flex items-center p-1">Status</span>
          <button
            class="inline-flex items-center rounded-r-md bg-gray-100 p-1 hover:bg-gray-200 gap-2"
            @click="isDroppedDown = !isDroppedDown"
          >
            <span>{{ currentStatus }}</span>
            <font-awesome-icon :icon="['fas', 'chevron-up']" />
          </button>
          <div
            v-if="isDroppedDown"
            class="absolute bottom-0 right-0 flex flex-col p-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 w-36 gap-2 transition-all"
          >
            <button
              :class="{
                'bg-amber-50 text-prairie-sand font-serif px-3 py-1 rounded-xl':
                  activeStatus === 'Belum',
              }"
              @click="setStatus('Belum')"
            >
              Belum
            </button>
            <button
              :class="{
                'bg-amber-50 text-prairie-sand font-serif px-3 py-1 rounded-xl':
                  activeStatus === 'Selesai',
              }"
              @click="setStatus('Selesai')"
            >
              Selesai
            </button>
            <button
              :class="{
                'bg-amber-50 text-prairie-sand font-serif px-3 py-1 rounded-xl':
                  activeStatus === 'Menunggu',
              }"
              @click="setStatus('Menunggu')"
            >
              Menunggu
            </button>
          </div>
        </div>
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
