import { createApp } from 'vue';
import App from './welcome.vue';

//引入CSS文件
import "@/../public/css/default_color.css";
import "@/../public/css/display_style.css";
import "@/../public/css/animation.css"

createApp(App).mount('#welcome_app');