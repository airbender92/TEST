<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue'

const parentMsg  = ref('Message from parent');

const handleChildData = (data: string) => {
  console.log(data)
}
</script>

<template>
  <div>
    <HelloWorld :parentMessage="parentMsg" @childData="handleChildData" />
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

