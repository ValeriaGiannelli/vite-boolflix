<script>
import AppHeader from './components/AppHeader.vue'

// import axios
import axios from "axios"

// import store
import {store} from './store.js'

export default {
  components: {
      AppHeader,
  },
  data(){
    return{
      store,
    }
  },
  methods:{
    // metodo che farà la chiamata per prendere il film
    getMovie(){
      // metto in una variabile l'url
      let endPoint = store.apiURL;

      if(store.searchTitle !== ''){
        endPoint += `${store.searchTitle}`
      }

      axios.get(endPoint)
      .then(result => {
        console.log(result.data.results);
        store.filmList = result.data.results;
      })
    }
  },

  created(){
    this.getMovie();
  }
}
</script>

<template>
  <AppHeader @searchMovie="getMovie"/>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

</style>
