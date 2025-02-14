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

    <!-- .passive 修饰符通常用于滚动事件（如 touchmove），它告诉浏览器该事件处理函数不会调用 preventDefault() 方法来阻止默认行为，这样浏览器可以在事件处理函数执行之前就处理默认行为，从而提高滚动的流畅性。 -->
     <div @touchmove.passive="handleTouchMove" style="height: 200px; overflow: auto;">
        <p v-for="i in 100" :key="i">{{  i }}</p>
     </div>

     <input v-model="message" @keyup.enter="submitMessage" placeholder="Press Enter to submit">

     <input type="radio" id="option1" value="Option 1" v-model="selectedOption">
  <label for="option1">Option 1</label>
  <input type="radio" id="option2" value="Option 2" v-model="selectedOption">
  <label for="option2">Option 2</label>
  <p>Selected option: {{ selectedOption }}</p>


  <input type="checkbox" id="apple" value="Apple" v-model="selectedFruits">
  <label for="apple">Apple</label>
  <input type="checkbox" id="banana" value="Banana" v-model="selectedFruits">
  <label for="banana">Banana</label>
  <input type="checkbox" id="cherry" value="Cherry" v-model="selectedFruits">
  <label for="cherry">Cherry</label>
  <p>Selected fruits: {{ selectedFruits }}</p>


  <!-- 使用 .lazy 修饰符后，在输入框中输入内容时，message 的值不会立即更新，直到输入框失去焦点或按下回车键 -->
  <input v-model.lazy="message" placeholder="Type something">
  <p>You typed: {{ message }}</p>

<!-- 当用户输入的内容需要作为数字处理时，可以使用 .number 修饰符。它会尝试将输入的值转换为数字类型。 -->
  <input v-model.number="age" type="number" placeholder="Enter your age">
  <p>Your age: {{ age }}, type: {{ typeof age }}</p>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const age = ref(0);

const message = ref('')

const selectedOption = ref('');

const selectedFruits = ref<string[]>([]);

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

const handleTouchMove = () => {
    //  .passive 修饰符可以避免浏览器在处理滚动事件时的阻塞，提升用户体验。
    console.log('Touch move event')
}


const submitMessage = () => {
    console.log('Submitted Message: ', message.value)
    message.value = ''
}

</script>