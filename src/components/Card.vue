<template>
  <div class="card mb-2">
    <div class="card-body">
      <h3 class="text-center">{{ countrie.name }}</h3>
        <p class="text-center">
            <img :src="countrie.flag" :alt="`flag-${countrie.name}`" class="img-fluid w-50"> </p>
      <p class="card-text" style="font-size: 30px">
        <span class="badge bg-success d-block mb-1"
          >Native name : {{ countrie.nativeName }}</span
        >
        <span class="badge bg-secondary p-3 d-block mb-1"
          >Population : {{ formNumber(countrie.population) }}</span
        >
        <span class="badge bg-success d-block mb-1"
          >Capital :{{ countrie.capital }}</span
        >
        <span class="badge bg-success d-block mb-1"
          >Region{{ countrie.region }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["countrie"],

setup() {
    const formNumber = (num) => {//para que la poblacion tenga .
        return new Intl.NumberFormat("de-De").format(num)
    }
    return {formNumber}
}
}
</script>

<style>
</style>