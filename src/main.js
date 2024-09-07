import { createApp } from 'vue'
import { pinia } from "./stores";
import App from './App.vue'
import './css/theme.scss'
import router from "./routes";


const app = createApp(App)

app.use(router);
app.use(pinia);
app.mount('#app');
