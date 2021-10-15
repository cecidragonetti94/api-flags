<template>
  <div class="row">
    <div class="col-12" v-for="countrie in countries" :key="countrie.name">
      <Card :countrie="countrie" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore(); //con esta const accedo a todo el store

    const countries = computed(() => {
      return store.getters.topCountriesPopulation;
    });

    onMounted(async () => {
      //el dispatch ejecuta una accion de vuex
      await store.dispatch("getCountries");
      await store.dispatch("regionFilter",);
    });
    return { countries };
  },
};
</script>

<style>
</style>