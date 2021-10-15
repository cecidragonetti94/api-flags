<template>
  <div class="text-center">
    <h3>Filter by continent</h3>
    <div class="btn-group mb-3">
      <button class="btn btn-dark" @click="filter('Americas')" >AM</button>
      <button class="btn btn-dark" @click="filter('Europe')">EU</button>
      <button class="btn btn-dark" @click="filter('Asia')">AS</button>
      <button class="btn btn-dark" @click="filter('Oceania')">OC</button>
      <button class="btn btn-dark" @click="filter('Africa')">AF</button>
      <button class="btn btn-dark" @click="filter('')">ALL</button>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
export default {
    setup() {
        const store = useStore()

        const filter = (region) => {
        store.dispatch('regionFilter', region)
        }
        return {filter}
    }
};
</script>

<style>
</style>