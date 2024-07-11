<script>
export default {
    name: "CardDesign",
    props: {
        infoFilm: Object,
    },
}
</script>

<template>
    <div class="container">
        <div class="card">
            <ul>
                <li>Titolo: {{ infoFilm.title }}</li>
                <li>Titolo originale: {{ infoFilm.original_title }}</li>
                <li> 
                    <img  :src="`/flags/${infoFilm.original_language}.png`" onerror="src='/flags/country.png'" :alt="infoFilm.original_language">
                </li>
                <li>Voto: {{ infoFilm.vote_average }}</li>
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