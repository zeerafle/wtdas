import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShield, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import VueCountdown from '@chenfengyuan/vue-countdown';

library.add(faShield, faChevronUp);
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component(VueCountdown.name, VueCountdown);
app.mount("#app");
