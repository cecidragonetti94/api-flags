<template>
  <div class="text-center">
    <h1>API Countries</h1>
     <Continent/>
     <Search/>
     <CardList/>
    
  </div>
</template>
<script>

import CardList from './components/CardList.vue'
import Continent from './components/Continent.vue'
import Search from './components/Search.vue'

export default {
  components:{
    CardList,
    Continent,
    Search
  }
}
</script>
<style>
h1{
  color:rgb(35, 78, 216);
  font-size: 70px;
  font-weight: bolder;
}
</style>