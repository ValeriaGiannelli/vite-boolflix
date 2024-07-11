<script>
export default {
    name: "CardDesign",
    props: {
        infoFilm: Object,
    },
    data(){
        return{
            imgFlag: "en.png",
        }
    },
    methods:{
        getImagePath: function(imgPath){
            return new URL(`../assets/img/${imgPath}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="card">
            <ul>
                <li>Titolo: {{ infoFilm.title }}</li>
                <li>Titolo originale: {{ infoFilm.original_title }}</li>
                <li>Lingua: {{ infoFilm.original_language }}
                    <img  :scr="getImagePath(imgFlag)"  alt="">
                    <img  scr="../assets/img/en.png"  alt="">
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