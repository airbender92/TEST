
<template>

    <div>Connection</div>
    <!-- 在模板中可以直接使用全局注册的组件： -->
    <MyGlobalComponent />
    <!-- 局部注册的组件只能在注册它的组件内部使用。在需要使用组件的文件中进行局部注册 -->
    <MyLocalComponent />
    <!-- 在父组件中，我们向 ChildComponent 传递了一个 message, extra 属性和一个 click 事件监听器。 -->
    <ChildComponent message="hello" extra="Extra data" 
        @click="handleClick"
    >
        this is the default slot content
        <template #header>
            this is the header slot content
        </template>

        <template #withname="{data}">
           作用域插槽 {{ data }}
        </template>
    </ChildComponent>


    <!-- 动态组件允许在运行时动态切换要渲染的组件。 -->
     <div>
        <button @click="currentComponent = 'ComponentA'">Show A</button>
        <button @click="currentComponent = 'ComponentB'">Show B</button>
        
        <component :is="currentComponent"></component>
     </div>
     <AsyncComponent />
</template>


<script setup lang="ts">

import { ref, defineAsyncComponent } from 'vue'

import MyLocalComponent from '../components/MyLocalComponent.vue';
// $attrs 包含了父组件传递给子组件但没有在子组件的 props 选项中声明的所有属性。
import ChildComponent from './ChildComponent.vue'

import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'
const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'));


defineOptions({
    ComponentA,
    ComponentB,
})

const currentComponent = ref('ComponentA')

const handleClick = () => {
    console.log('Clicked in parent')
}


</script>