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

app.directive('highlight', {
    mounted(el, binding) {
        const styleProperty = binding.arg || 'backgroundColor';
        // 支持修饰符
        // binding.arg：获取指令的参数，例如 v-highlight:color 中的 color。
        // binding.modifiers：获取指令的修饰符，例如 v-highlight.light 中的 light
        if(binding.modifiers.light) {
            el.style[styleProperty] = `light${binding.value}`;
        } else {
            el.style[styleProperty] = binding.value;
        }
    }
})

app.mount('#app');
