<script>
import {store} from '../store.js';

    export default {
        name: "AppHeader",
        data(){
            return {
                store,
            }
        }
    }

</script>

<template>
    <div class="bg-dark container">
        <!-- logo -->
        <div class="logo">
            BOOLFLIX
        </div>
        <!-- input di ricerca -->
        <div>
            <input class="search-bar" type="text" placeholder="search title" v-model="store.searchTitle">
            <button @click="$emit('searchMovie')">Search</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container{
    justify-content: space-between;
}

.bg-dark{
    background-color: $primary;
    padding: 20px;
    .logo{
        color: red;
    }

    .search-bar{
        padding: 10px;
        margin-right: 10px
    }

    button{
        padding: 10px;
    }
}

</style>