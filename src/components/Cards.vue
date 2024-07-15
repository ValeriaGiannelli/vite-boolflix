<script>
export default {
    name: "Cards",
    props: {
        infoSerie: Object,
        overview: String,
        titolo: String,
        titolo_originale: String,
        poster: String,
        language: String,
        votes: Number
    },
    data(){
        return{
            ratingStar: 0,
        }
    },
    methods:{
        vote(){
            return Math.ceil(this.votes / 2);
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
                <img :src="poster ? `https://image.tmdb.org/t/p/w342${poster}` : '/posters/poster-holder.jpg'" :alt="titolo">
            </div>

            <!-- informazioni sulla seria -->
            <div class="card_info" >
                <ul>
                    <!-- titolo -->
                    <li>
                        Titolo: {{ titolo }}
                    </li>

                    <!-- titolo originale -->
                    <li>
                        Titolo originale: {{ titolo_originale }}
                    </li>

                    <!-- bandiera della linigua -->
                    <li> 
                        <img :src="language ? `/flags/${language}.png` : '/flags/country.png'" :alt="language">
                    </li>

                    <!-- voto in numeri -->
                    <li>
                        Voto: {{vote()}}                        
                    </li>

                    <!-- voto in stelle -->
                    <li>
                        <!-- ciclo per 5 volte e verifico se l'indice è minore o uguale del valore di rating dato. Se minore metto la stella piena, altrimenti vuota -->
                        <font-awesome-icon v-for="index in 5" :key="index" :icon="index <= ratingStar ? ['fas', 'star'] : ['far', 'star']"/>
                    </li>

                    <!-- overview del film/serie -->
                    <li>
                        <span>Overview:</span> {{ overview }}
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