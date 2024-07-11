<script>
export default {
    name: "CardFilm",
    props: {
        infoFilm: Object,
    },
    data(){
        return{
            ratingStar:0,
        }
    },
    methods:{
        vote(){
            return Math.ceil(this.infoFilm.vote_average / 2);
        },
        displayStar(){
            this.ratingStar = this.vote();
        }
    },
    mounted(){
        this.displayStar();
    }
}

</script>

<template>
    <div class="container">
        <!-- card per i film -->
        <div class="card">
            <ul>
                <li>Titolo: {{ infoFilm.title }}</li>
                <li>Titolo originale: {{ infoFilm.original_title }}</li>
                <li> 
                    <!-- bandiera -->
                    <img  :src="infoFilm.original_language ? `/flags/${infoFilm.original_language}.png` : '/flags/country.png'" :alt="infoFilm.original_language">
                </li>
                <li>Voto: {{ vote() }}
                    <!-- ciclo per 5 volte e verifico se l'indice è minore o uguale del valore di rating dato. Se minore metto la stella piena, altrimenti vuota -->
                    <font-awesome-icon v-for="index in 5" :key="index" :icon="index <= ratingStar ? ['fas', 'star'] : ['far', 'star']"/>
                </li>
            </ul>
        </div>

        <div class="poster">
            <!-- immagine poster -->
            <img :src="infoFilm.poster_path ? `https://image.tmdb.org/t/p/w342${infoFilm.poster_path}` : '/posters/poster-holder.jpg'" :alt="infoFilm.title">
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card{

    ul{
        list-style: none;
        img{
            width: 50px;
            height:50px;
        }
    }
}

.poster{
    img{
        width: 342px;
        height: 513px;
    }
}
</style>