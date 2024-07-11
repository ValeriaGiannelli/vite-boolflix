<script>
export default {
    name: "CardSerie",
    props: {
        infoSerie: Object,
    },
    methods:{
        vote(){
            return Math.ceil(this.infoSerie.vote_average / 2);
        }
    }
}
</script>

<template>
    <div class="container">
        <!-- card per i film -->
        <div class="card">
            <ul>
                <li>Titolo: {{ infoSerie.name }}</li>
                <li>Titolo originale: {{ infoSerie.original_name }}</li>
                <li> 
                    <!-- bandiera  -->
                    <img :src="infoSerie.original_language ? `/flags/${infoSerie.original_language}.png` : '/flags/country.png'" :alt="infoSerie.original_language">
                </li>
                <li>Voto: {{vote()}}</li>
            </ul>
        </div>

        <div class="poster">
            <!-- immagine poster -->
            <img :src="infoSerie.poster_path ? `https://image.tmdb.org/t/p/w342${infoSerie.poster_path}` : '/posters/poster-holder.jpg'" :alt="infoSerie.name">
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