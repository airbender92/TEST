
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
        
        <component :is="componentMap[currentComponent]"></component>
     </div>
     <AsyncComponent />
     <div ref="myDiv">mydiv</div>
     <div>{{ counter2.counter2 }}</div>
     <p>Widow Width: {{ windowSize.width }}</p>
     <p>Widow Height: {{ windowSize.height }}</p>
     <ModalDemo />
     <p v-highlight:color="'yellow'">This text</p>
     <p v-highlight.light="'yellow'">This text2</p>
</template>


<script setup lang="ts">

import { 
    ref, 
    defineAsyncComponent, 
    onBeforeMount,
    onMounted, 
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount
} from 'vue'

import MyLocalComponent from '../components/MyLocalComponent.vue';
// $attrs 包含了父组件传递给子组件但没有在子组件的 props 选项中声明的所有属性。
import ChildComponent from './ChildComponent.vue'

import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

import ModalDemo from '../components/ModalDemo.vue';

import { useCounter } from '../hooks/useCounter'
import { useWindowSize } from '../hooks/useWindowSize';

const AsyncComponent = defineAsyncComponent(() => import('./AsyncComponent.vue'));

const counter2 = useCounter(0);
const windowSize = useWindowSize();

// 创建一个组件映射对象
const componentMap = {
    ComponentA,
    ComponentB
};

const currentComponent = ref<'ComponentA' | 'ComponentB'>('ComponentA')

let timer: ReturnType<typeof setInterval>;
    const count = ref(0)

const myDiv = ref<HTMLElement | null>(null);

const handleClick = () => {
    console.log('Clicked in parent')
}

// 在组件挂载到 DOM 之前调用。此时模板编译已经完成，但 DOM 元素还未实际插入页面。
onBeforeMount(() => {
    // 可以在这里进行一些初始化操作，但此时无法访问 DOM
    console.log('Before mounting component')
   
})

// 在组件挂载到 DOM 之后调用。此时组件的 DOM 元素已经插入到页面中，可以进行 DOM 操作。
onMounted(() => {
    console.log('conection mounted')
    if(myDiv.value) {
        myDiv.value.style.color ='red'
    }
})

// 在组件的数据发生变化，DOM 重新渲染之前调用。可以在这个钩子中获取到更新前的数据和 DOM 状态。
onBeforeUpdate(() => {
    console.log('Before updating component')
    // 此时可以访问更新前的 DOM 和数据
})

onUpdated(() => {
    console.log('Component updated');
    // 此时可以访问更新后的 DOM
})

onBeforeUnmount(() => {
  console.log('Before unmounting component');
  clearInterval(timer); // 清理定时器
});

timer = setInterval(() => {
    count.value++;
}, 1000)

</script>