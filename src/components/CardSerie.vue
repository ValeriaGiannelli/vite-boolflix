<script>
export default {
    name: "CardSerie",
    props: {
        infoSerie: Object,
    },
    data(){
        return{
            ratingStar: 0,
        }
    },
    methods:{
        vote(){
            return Math.ceil(this.infoSerie.vote_average / 2);
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
    <!-- contenitore -->
    <div class="container card">
        <!-- contenitore di entrambe le facce della card -->
        <div class="card_all">
            <!-- card per i film -->
            <div class="poster">
                <!-- immagine poster -->
                <img :src="infoSerie.poster_path ? `https://image.tmdb.org/t/p/w342${infoSerie.poster_path}` : '/posters/poster-holder.jpg'" :alt="infoSerie.name">
            </div>

            <!-- informazioni sulla seria -->
            <div class="card_info" >
                <ul>
                    <li>Titolo: {{ infoSerie.name }}</li>
                    <li>Titolo originale: {{ infoSerie.original_name }}</li>
                    <li> 
                        <!-- bandiera  -->
                        <img :src="infoSerie.original_language ? `/flags/${infoSerie.original_language}.png` : '/flags/country.png'" :alt="infoSerie.original_language">
                    </li>

                    <li>Voto: {{vote()}}
                        <!-- ciclo per 5 volte e verifico se l'indice è minore o uguale del valore di rating dato. Se minore metto la stella piena, altrimenti vuota -->
                        <font-awesome-icon v-for="index in 5" :key="index" :icon="index <= ratingStar ? ['fas', 'star'] : ['far', 'star']"/>
                    </li>
                </ul>
            </div>

            
        </div>
        
    </div>

</template>

<style lang="scss" scoped>

//le condizioni per il flip della card sono su general

.card_info{
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