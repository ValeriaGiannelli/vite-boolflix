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
    <h2>Film</h2>
    <div class="container">
        
        <!-- card dei film ripresa dal componente CardDesign -->
        <CardFilm v-for="film in store.filmList" :key="film.id" :infoFilm="film"/>

    </div>
    <h2>Serie</h2>
    <div class="container">
        
        <!-- card dei film ripresa dal componente CardDesign -->
        <CardSerie v-for="serie in store.filmList" :key="serie.id" :infoSerie="serie"/>

    </div>

</template>

<style lang="scss" scoped>
.container{
    flex-wrap: wrap;
    gap: 10px;
}
</style>