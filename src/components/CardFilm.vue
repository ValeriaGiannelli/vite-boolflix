<script>
export default {
    name: "CardFilm",
    props: {
        infoFilm: Object,
    },
    data(){
        return{
            ratingStar:0,
            // emptyStar:0,
        }
    },
    methods:{
        vote(){
            return Math.ceil(this.infoFilm.vote_average / 2);
        },
        displayStar(){
            this.ratingStar = this.vote();
            // this.emptyStar = 5 - this.vote();
        }
    },
    mounted(){
        this.displayStar();
    }
}

</script>

<template>

    <div class="container card">
        <!-- contenitore di entrambe le facce della card -->
        <div class="card_all">

            <div class="poster" >
                <!-- immagine poster -->
                <img :src="infoFilm.poster_path ? `https://image.tmdb.org/t/p/w342${infoFilm.poster_path}` : '/posters/poster-holder.jpg'" :alt="infoFilm.title">
            </div>

            <!-- informazioni sul film -->
            <div class="card_info">
                <ul>
                    <!-- titolo -->
                    <li>
                        <span>Titolo:</span> {{ infoFilm.title }}
                    </li>

                    <!-- titolo originale -->
                    <li>
                        <span>Titolo originale:</span> {{ infoFilm.original_title }}
                    </li>

                    <!-- bandiera della linigua -->
                    <li>
                        <img  :src="infoFilm.original_language ? `/flags/${infoFilm.original_language}.png` : '/flags/country.png'" :alt="infoFilm.original_language">
                    </li>

                    <!-- voto in numeri -->
                    <li>
                        <span>Voto:</span> {{ vote() }}
                    </li>

                    <!-- voto in stelle -->
                    <li> 
                        <!-- ciclo per 5 volte e verifico se l'indice è minore o uguale del valore di rating dato. Se minore metto la stella piena, altrimenti vuota -->
                        <font-awesome-icon v-for="index in 5" :key="index" :icon="index <= ratingStar ? ['fas', 'star'] : ['far', 'star']"/>


                    </li>
                    
                    <!-- overview del film/serie -->
                    <li>
                        <span>Overview:</span> {{ infoFilm.overview }}
                    </li>
                    
                </ul>
            </div>

        </div>
        
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *; 

// le condizioni per il flip della card sono su general

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