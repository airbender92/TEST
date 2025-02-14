<template>
    <div>Home</div>
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.increment">Increment</button>
</template>

<script lang="ts" setup>
    import { useCounterStore } from '../stores/counter'

    const counterStore = useCounterStore();
</script>