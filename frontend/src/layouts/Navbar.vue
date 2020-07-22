<template>
    <div class="navbar">
        Bem Vindo {{usuario.nome}}
        <a href="" @click="deslogar">Deslogar</a>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        props: {
            usuario: Object
        },
        methods: {
            deslogar() {
                console.log('deslogar');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        height: 50px;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        line-height: 50px;
        background-color: #1f5d6b;
        color: #FFF;
        padding: 0 15px;
        text-align: right;
        transition: font-weight 0.3s;

    a {
        color: #FFF;
    }

    }
</style>