<template>
    <div>
        <button @click="isModalOpen = true">Open Modal</button>
        <!-- 使用 Teleport 将模态框内容渲染到body元素下 -->
         <Teleport to="body">
            <div v-if="isModalOpen" class="modal">
                <div class="modal-content">
                    <h2>Modal Title</h2>
                    <p>Modal content goes here</p>
                    <button @click="isModalOpen=false">Close</button>
                </div>
            </div>
         </Teleport>
    </div>
</template>

<script lang="ts" setup>

import {ref} from 'vue'

const isModalOpen = ref(false);

</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
}
</style>