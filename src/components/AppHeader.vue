<script>
    export default {
        name: "AppHeader"
    }
</script>

<template>
    <div class="bg-dark container">

        <div class="logo">
            BOOLFLIX
        </div>
        <div>
            <input class="search-bar" type="text" placeholder="search title">
            <button>Search</button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container{
    justify-content: space-between;
}

.bg-dark{
    background-color: $primary;
    padding: 20px;
    .logo{
        color: red;
    }

    .search-bar{
        padding: 10px;
        margin-right: 10px
    }

    button{
        padding: 10px;
    }
}

</style>