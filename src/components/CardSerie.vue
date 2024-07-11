<script>
export default {
    name: "CardSerie",
    props: {
        infoSerie: Object,
    },
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
                    <img  :src="`/flags/${infoSerie.original_language}.png`" onerror="src='/flags/country.png'" :alt="infoSerie.original_language">
                </li>
                <li>Voto: {{ infoSerie.vote_average }}</li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card{
    width: 200px;
    height: 400px;
    background-color: gray;
    text-align: center;

    ul{
        list-style: none;
        img{
            width: 50px;
            height:50px;
        }
    }
}
</style>