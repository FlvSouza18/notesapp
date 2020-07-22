<template>
    <div class="form-wrapper">
        <h3>Criar conta para o MyNotes</h3>
        <form @submit.prevent="login" action="">
            <div v-if="errors" class="errors">
                <p v-for="(error, field) in errors" :key="field">
                    {{error[0]}}
                </p>
            </div>
            <input type="text" v-model="form.username" placeholder="Your username"><br>
            <input type="password" v-model="form.password" placeholder="Your password"><br>
            <button>Login</button>
            <router-link to="/register" class="link">Click here to register</router-link>
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
                errors: {}
            }
        },
        methods: {
            login(){

            }
        }
    }
</script>

<style scoped>

</style>