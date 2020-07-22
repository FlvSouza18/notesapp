<template>
    <div id="default-layout">
     <navbar :usuario="usuario"/>
        <router-view />
    </div>
</template>

<script>
    import Navbar from "./Navbar";
    export default {
        name: "PadraoLayout",
        components: {Navbar},
        data(){
            return  {
                usuario: {}
            }
        }
    }
</script>

<style lang="scss" scoped>
    #default-layout{
        padding-top: 50px;
    }
</style>