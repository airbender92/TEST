<template>
    <div>
        <h1>{{ parentMessage }}</h1>
        <button @click="sendDataToParent">Send data to Parent</button>
        <p>{{ count }}</p>
        <button @click="increment">Increment</button>
        <p>{{ user.name }}</p>
        <button @click="changeName">ChangeName</button>

        <ul>
            <li v-for="item in items" :key="item.id">{{ item.name }}</li>
        </ul>
        <p v-if="showMessage">This message is Visible</p>
        <p>{{  fullName }}</p>
        <input type="text" v-model="inputMessage">
    </div>
</template>

<script lang="ts" setup>
import { 
    defineProps, 
    defineEmits, 
    ref, 
    reactive, 
    onMounted,
    onBeforeUnmount,
    computed,
    watch
} from 'vue'

// defineProps：用于定义组件的 props（父组件传递给子组件的数据）
const props = defineProps<{
    parentMessage: string
}>();

// defineEmits：用于定义组件的 emits（子组件向父组件触发的事件）
const emit = defineEmits<{
    (e: 'childData', data: string): void;
}>();

// ref 用于创建基本类型的响应式数据：
const count = ref(0);

const items = ref([
    {id: 1, name: 'Item1'},
    {id: 2, name: 'Item2'},
]);

const showMessage = ref(true);

const firstName = ref('John');
const lastName = ref('Doe');

const inputMessage = ref('');

watch(inputMessage, (newValue, oldValue) => {
    console.log(`InputMessaage Changed from ${oldValue} to ${newValue}`)
})

const fullName = computed(() => {
    return `${firstName.value} ${lastName.value}`
})

// reactive 用于创建对象类型的响应式数据
const user = reactive({
    name: 'John'
});

const changeName = () => {
    user.name = 'Jane'
}

const increment = () => {
    count.value++;
}

const sendDataToParent = () => {
    emit('childData', 'Data from child')
}

onMounted(() => {
    console.log('Component mounted.')
});

onBeforeUnmount(() => {
    console.log('Component will unmount')
})

</script>

<style scoped>
h1 {
    color: blue;
}

</style>