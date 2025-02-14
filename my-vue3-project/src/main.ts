import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 全局注册的组件可以在整个应用的任何地方使用，无需在每个组件中单独引入。通常在 main.ts 中进行全局注册。
import MyGlobalComponent from './components/MyGlobalComponent.vue'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia)
app.use(router)

app.component('MyGlobalComponent', MyGlobalComponent)

app.mount('#app');
