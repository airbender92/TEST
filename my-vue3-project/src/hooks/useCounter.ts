import {  ref } from 'vue'

export function useCounter<T extends number = number>(initialValue:T){
    const counter2 = ref(initialValue)

    const increment2 = () => {
        counter2.value++;
    }

    const decrement2 = () => {
        counter2.value--;
    }

    return {
        counter2,
        increment2,
        decrement2
    }

}