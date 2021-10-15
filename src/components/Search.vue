<template>
<input type="text" placeholder="Enter countrie" class="form-control my-3" v-model="text" @keyup="processInput">  
</template>

<script>
import { ref } from '@vue/reactivity'
import {useStore} from 'vuex'
export default {
setup() {
    const text = ref('')
    const store = useStore()
    const processInput = () => {
        
        store.dispatch('nameFilter',text.value)
    }
    return {text, processInput}
}
}
</script>

<style>

</style>