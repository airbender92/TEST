<template>
    <div>About</div>
<!-- 通常情况下，事件是从内向外冒泡的，而 .capture 修饰符可以改变事件的传播顺序，让事件从外向内捕获。 -->
    <div @click.capture="outerClick2">
        <button @click="innerClick2">Click me2</button>
    </div>

    <div @click="outerClick">
        <button @click.stop="innerClick">Click me</button>
    </div>
    <!-- .prevent 修饰符用于阻止事件的默认行为。例如，在表单提交时，默认行为是页面会重新加载，使用 .prevent 可以阻止这种默认行为。 -->
    <form @submit.prevent="submitForm">
        <input type="text" v-model="message">
        <button type="submit">Submit</button>
    </form>
<!-- .self 修饰符表示只有当事件是在绑定该事件的元素本身触发时才会执行相应的处理函数，而不是通过冒泡或捕获从子元素传播过来的事件。 -->
    <div @click.self="divClick">
        <button @click="button3Click">Click 3</button>
    </div>

    <button @click.once="clickOnce">Click me once</button>

</template>

<script lang="ts" setup>

import { ref } from 'vue';

const message = ref('')

const submitForm = () => {
    console.log('Form submitted with message:', message.value)
}

const outerClick = () => {
    console.log('Outer div clicked')
}

const innerClick = () => {
    // 点击按钮时，只会触发 innerClick 方法，而不会触发 outerClick 方法，因为 .stop 阻止了事件冒泡到外层的 <div> 元素。
    console.log('Button Clicked')
}

// 点击按钮时，会先触发 outerClick 方法（捕获阶段），然后再触发 innerClick 方法（冒泡阶段）。
const outerClick2 = () => {
    console.log('Outer2 div clicked')
}

const innerClick2 = () => {
    console.log('2Button Clicked')
}

const divClick = () => {
    console.log('Div clicked')
}

const button3Click = () => {
    console.log('Button3 Clicked')
}

const clickOnce = () => {
  console.log('Button clicked once');
};
</script>