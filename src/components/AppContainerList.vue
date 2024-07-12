<script>
// importo lo store
import {store} from '../store.js';

import CardFilm from './CardFilm.vue'
import CardSerie from './CardSerie.vue'

export default {
    name: "AppContainerList",
    components: {
        CardFilm,
        CardSerie,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <!-- schermata iniziale -->
    <!-- <div class="start_page" :class="{'hidden' : store.searchTitle}">
        <h1>Ricerca il tuo film o serie tv</h1>
    </div> -->

    <!-- divisione della ricerca -->
    <!-- <div :class="{'hidden' : !store.searchTitle}"> -->
        <h2>Film</h2>
        <div class="container">
            
            <!-- card dei film ripresa dal componente CardMovie -->
            <CardFilm v-for="film in store.filmList" :key="film.id" :infoFilm="film"/>

        </div>

        <h2>Serie</h2>
        <div class="container">
            
            <!-- card dei film ripresa dal componente CardSerie -->
            <CardSerie v-for="serie in store.serieList" :key="serie.id" :infoSerie="serie"/>

        </div>
    <!-- </div> -->
   

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

// .start_page{
//     background-color: gray;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     h1{
//         font-size: 50px;
//     }
// }

h2{
    font-size: 50px;
    padding-left: 20px;
    background-color:brown;
}

.container{
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 40px;
    padding:20px;
}

.hidden{
    display:none;
}
</style>