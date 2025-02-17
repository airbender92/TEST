<template>
    <div>
        <input :value="nameValue"
        @input="handleNameChange($event)"
        placeholder="Nmae">
        <input type="number" :value="ageValue" 
        @input="handleAgeChange($event)"
        placeholder="age">
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch} from 'vue'

// 定义 props, 接收 name 和 age 的modelValue
const props = defineProps<{
    modelValue: string;
    'onUpdate:modelValue'?: (value: string) => void;
    modelValueAge: number;
    'onUpdate:modelValueAge'?: (value: number) => void;
}>();

const nameValue = ref(props.modelValue)
const ageValue = ref(props.modelValueAge)

// 监听输入值的变化，并触发对应的 update 事件
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'update:modelValueAge', value:number): void;
}>();

const handleNameChange = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    if(target) {
        nameValue.value = target.value;
        emit('update:modelValue', nameValue.value)
    }
}

const handleAgeChange = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    if(target) {
        const numValue = Number(target.value);
        emit('update:modelValueAge', numValue)
    }
}

watch(() => props.modelValue, (newValue) => {
    nameValue.value = newValue;

})

watch(() => props.modelValueAge, (newValue) => {
    ageValue.value = newValue
})

</script>