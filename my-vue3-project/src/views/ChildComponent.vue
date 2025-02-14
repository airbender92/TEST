<template>
    <div>
        <!-- 这里是因为子组件并没显式的声明DefineProps,所以两个属性都在attrs -->
        {{ $attrs.extra }}
        {{ $attrs.message }}
        <!-- 在模板中，我们使用 v-on="$attrs" 指令将 $attrs 中的所有事件监听器绑定到 <button> 元素上。当点击按钮时，会触发父组件中的 handleClick 方法。 -->
        <button v-on="$attrs">click</button>
    </div>
    <slot></slot>
    <slot name="header"></slot>

    <!-- 作用域插槽允许子组件向父组件传递数据，父组件可以根据这些数据自定义插槽内容的渲染。 -->
    <slot name="withname" :data="subMessage"></slot>
</template>

<script lang="ts" setup>
import { useAttrs, ref } from 'vue'

const attrs = useAttrs();

const subMessage =ref('Data from child')

</script>