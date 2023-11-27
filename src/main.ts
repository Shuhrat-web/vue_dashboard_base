import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Routes from './app/lib/routes/Routes'
import Toast,{ PluginOptions } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaHome,HiUserGroup,HiBookOpen,HiCalendar  } from "oh-vue-icons/icons";

addIcons(FaHome,HiUserGroup,HiBookOpen,HiCalendar );


const app = createApp(App)

const options:PluginOptions = {
    // You can set your default options here
};
app.use(Routes)
app.use(Toast,options);
app.component("v-icon", OhVueIcon);
app.mount('#app')
