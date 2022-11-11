import { createApp,Directive } from 'vue'
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
import * as directives from '@/directives'
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string ]: Directive })[key])
})
app.config.globalProperties.$api = api;
app.provide("$api", api);
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueI18n)
app.mount('#app')
