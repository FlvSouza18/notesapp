<template>
    <div class="form-wrapper">
        <h3>MyNotes</h3>
        <form @submit.prevent="login" action="">
            <div v-if="errors" class="errors">
                <p v-for="(error, field) in errors" :key="field">
                    {{error[0]}}
                </p>
            </div>
            <input type="text" v-model="form.usuario" placeholder="Seu usuario"><br>
            <input type="password" v-model="form.senha" placeholder="Sua senha"><br>
            <button>Logar</button>
            <router-link to="/cadastrar" class="link">Cadastrar uma nova conta</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                form: {
                    usuario: '',
                    senha: ''
                },
                errors: null
            }
        },
        methods: {
            login(){
                console.log("Login", this.form);
            }
        }
    }
</script>

<style scoped>

</style>