import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Routes from './app/lib/routes/Routes'
import Toast,{ PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHome,HiUserGroup,HiBookOpen,HiCalendar,HiMenu,HiMenuAlt3   } from "oh-vue-icons/icons";
import { createPinia } from 'pinia';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

addIcons(FaHome,HiUserGroup,HiBookOpen,HiCalendar,HiMenu,HiMenuAlt3  );


const app = createApp(App)
const pinia = createPinia()


const options:PluginOptions = {
    // You can set your default options here
};
app.use(Routes)
app.use(pinia)
app.use(Toast,options);
app.component("v-icon", OhVueIcon);
app.component('EasyDataTable', Vue3EasyDataTable);
app.mount('#app')
