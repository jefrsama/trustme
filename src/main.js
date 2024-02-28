import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
import {i18n} from "@/stores/i18nStore";


const app = createApp(App)
app.use(i18n)
app.use(PrimeVue);
app.mount('#app')