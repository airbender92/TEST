<template>
    <div>Home</div>
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>

    <div :class="{active: isActive, 'text-danger': hasError}">
        This is a sample text
    </div>

    <div :class="classObject">this is another sample</div>

    <div class="static" :class="[activeClass, errorClass, {'success-text': !hasError}]">this is xxx sample</div>

    <div :style="{color: textColor, fontSize: fontSize + 'px'}">style Sample</div>

    <div :style="styleObject">styleObject</div>
    <div :style="[baseStyle, overridingStyle]">array style</div>

    <div :style="{display: 'flex'}">flex</div>
</template>

<script lang="ts" setup>
    import {ref, computed} from 'vue';
    import { useCounterStore } from '../stores/counter'
    
    const counterStore = useCounterStore();

    const isActive = ref(true);
    const hasError = ref(false);

    const classObject = computed(() => ({
        active: isActive.value,
        'text-danger': hasError.value
    }));

    const activeClass = ref('active');
    const errorClass = ref('text-danger')

    const textColor = ref('red');
    const fontSize = ref(18)

    const styleObject = computed(() => ({
        color: textColor.value,
        fontSize: fontSize.value + 'px'
    }))

    const baseStyle = ref({
        color: 'red',
        fontSize: '16px'
    })

    const overridingStyle = ref({
        fontSize: '28px'
    })

</script>