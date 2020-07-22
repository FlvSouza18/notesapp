import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PadraoLayout from "../layouts/PadraoLayout";
import AutenticarLayout from "../layouts/AutenticarLayout";
import Login from "../views/Login";
import CadastrarUsuario from "../views/CadastrarUsuario";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Padrao',
    redirect: '/home',
    component: PadraoLayout,
    children: [
      {
       path: 'home',
       nome: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/autenticar',
    name: '',
    component: AutenticarLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login
      },
      {
        path: 'cadastrar',
        name: 'cadastrar',
        component: CadastrarUsuario
      }
    ]
  },
    {
      path: '/login',
      redirect: '/autenticar/login'
    },
    {
      path: '/cadastrar',
      redirect: '/autenticar/cadastrar'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
