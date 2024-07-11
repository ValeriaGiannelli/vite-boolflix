<script>
export default {
    name: "CardDesign",
    props: {
        infoFilm: Object,
    }
}
</script>

<template>
    <div class="container">
        <div class="card">
            <ul>
                <li>Titolo: {{ infoFilm.title }}</li>
                <li>Titolo originale: {{ infoFilm.original_title }}</li>
                <li>Lingua: {{ infoFilm.original_language }}</li>
                <li>Voto: {{ infoFilm.vote_average }}</li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.card{
    width: 200px;
    height: 400px;
}
</style>