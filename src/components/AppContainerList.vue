<script>
// importo lo store
import {store} from '../store.js';

// import CardFilm from './CardFilm.vue'
// import CardSerie from './CardSerie.vue'
import Cards from './Cards.vue'

export default {
    name: "AppContainerList",
    components: {
        // CardFilm,
        // CardSerie,
        Cards
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
    <div class="start_page" v-show="!store.userSearched">
        <h1>Ricerca il tuo film o serie tv</h1>
    </div>

    <!-- divisione della ricerca -->
    <div v-show="store.userSearched">
        <h2>Film</h2>
        <div class="container">
            
            <!-- card dei film ripresa dal componente CardMovie -->
            <!-- <CardFilm v-for="film in store.filmList" :key="film.id" :infoFilm="film"/> -->

            <!-- card con le info dei film -->
            <Cards v-for="film in store.filmList" :key="film.id" :titolo="film.title" :titolo_originale="film.original_title" :poster="film.poster_path" :language="film.original_language" :votes="film.vote_average" :overview="film.overview"/>

        </div>

        <h2>Serie</h2>
        <div class="container">
            
            <!-- card dei film ripresa dal componente CardSerie -->
            <!-- <CardSerie v-for="serie in store.serieList" :key="serie.id" :infoSerie="serie"/> -->

            <!-- card con le info delle serie TV -->
            <Cards v-for="serie in store.serieList" :key="serie.id" :titolo="serie.name" :titolo_originale="serie.original_name" :poster="serie.poster_path" :language="serie.original_language" :votes="serie.vote_average" :overview="serie.overview"/>

        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.start_page{
    background-color: gray;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-size: 50px;
    }
}

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