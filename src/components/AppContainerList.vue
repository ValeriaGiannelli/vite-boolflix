<script>
// importo lo store
import {store} from '../store.js';

import CardDesign from './CardDesign.vue'

export default {
    name: "AppContainerList",
    components: {
        CardDesign,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="container">
        <!-- card dei film ripresa dal componente CardDesign -->
        <CardDesign v-for="film in store.filmList" :key="film.id" :infoFilm="film"/>

    </div>

</template>

<style lang="scss" scoped>
.container{
    flex-wrap: wrap;
    gap: 10px
}
</style>