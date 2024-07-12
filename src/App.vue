<script>
// import axios
import axios from "axios"

// import store
import {store} from './store.js'

import AppHeader from './components/AppHeader.vue'
import AppContainerList from './components/AppContainerList.vue'



export default {
  components: {
      AppHeader,
      AppContainerList,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    // metodo che farà partire le ricerche su entrambe le sezioni
    search(){
      this.getMovie();
      this.getSerie();
    },

    // metodo che farà la chiamata per prendere il film
    getMovie(){
      // metto in una variabile l'url
      let endPoint = store.apiURL;

      if(store.searchTitle !== ''){
        endPoint += `${store.searchTitle}`
      }

      axios.get(endPoint)
      .then(result => {
        // console.log(result.data.results);
        store.filmList = result.data.results;
      })
    },

    // metodo per le serie tv
    getSerie(){
      let endPoint = store.apiURLSerie;

      if(store.searchTitle !== ''){
        endPoint += `${store.searchTitle}`
      }
      axios.get(endPoint)
      .then(result => {
        console.log(result.data.results);
        store.serieList = result.data.results;
      })
    }
  },

  created(){
    this.search();
  }
}
</script>

<template>
  <AppHeader @searchMovie="search"/>

  <main>
    <AppContainerList />
  </main>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

main{
  background-color: gray;
}

</style>
