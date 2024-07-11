<script>
export default {
    name: "CardFilm",
    props: {
        infoFilm: Object,
    },
    methods:{
        vote(){
            return Math.ceil(this.infoFilm.vote_average / 2);
        }
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
                <li>Voto: {{ vote() }}</li>
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