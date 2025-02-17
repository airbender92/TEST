<template>
<div>
    <p>{{ user.name }}</p>
    <p>{{ user.age }}</p>
    <p>{{ nameRef }}</p>
    <button @click="changeName">ChangeName</button>
    <CustomInput 
        v-model="name2"
        v-model:modelValueAge="age2"
    />
</div>

</template>

<script lang="ts" setup>

import { reactive, ref, toRef, toRefs } from 'vue';
import CustomInput from '../components/CustomInput.vue';

const user = reactive({
    name: 'John',
    age: 2
})

// toRef 用于从一个响应式对象中创建一个单独的响应式引用。即使原对象的属性被删除，这个引用仍然保持响应式。
const nameRef = toRef(user, 'name')

// toRefs 用于将一个响应式对象的所有属性转换为响应式引用，并返回一个包含这些引用的对象。常用于在解构响应式对象时保持属性的响应式
const { name, age} = toRefs(user)

const name2 = ref('hell')
const age2 = ref(0)

const changeName = () => {
    nameRef.value = 'Jane';
    age.value = 20

}

</script>