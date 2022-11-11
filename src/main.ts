import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from '@/store';
import router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import VueI18n from './language';
import api from '@/api';
import '@/permission';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { permission } from '@/directives/permission'
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$api = api;
app.provide("$api", api);
app.directive('permission', permission)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueI18n)
app.mount('#app')
