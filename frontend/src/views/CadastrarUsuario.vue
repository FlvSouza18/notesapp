<template>
    <div class="form-wrapper">
        <h3>Crie sua conta no MyNotes</h3>
        <form @submit.prevent="register" action="">
            <div v-if="errors" class="errors">
                <p v-for="(error, field) in errors" :key="field">
                    {{error[0]}}
                </p>
            </div>
            <input type="text" v-model="form.usuario" placeholder="Seu usuario"><br>
            <input type="password" v-model="form.senha" placeholder="Sua senha"><br>
            <input type="password" v-model="form.senha_novamente" placeholder="Sua senha novamente"><br>
            <button>Cadastrar</button>
            <router-link to="/login" class="link">Logar-se</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CadastrarUsuario",
        data(){
            return {
                form: {
                    usuario: '',
                    senha: '',
                    senha_novamente: ''
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