import Vue from 'vue'
import Router from 'vue-router'
import PaginaPrincipal from './views/PaginaPrincipal.vue'
import PaginaContexto from './views/PaginaContexto.vue'
import PaginaProposito from './views/PaginaProposito'
import PaginaEstudia from './views/PaginaEstudia'
import PaginaPerfil from './views/PaginaPerfil'
import PaginaJuegos from './views/PaginaJuegos'
import RuletaPep from './views/RuletaPep'
import PaginaPal from './views/PaginaPal'
import login from './views/login'
import registro from './views/registro'
import registroPal from './views/registroPal'
import loginPal from './views/loginPal'
import PaginaTyping2 from './views/PaginaTS'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: PaginaPrincipal
        },
        {
            path: '/Contexto',
            name: 'contexto',
            component: PaginaContexto
        },
        {
            path: '/Proposito',
            name: 'proposito',
            component: PaginaProposito
        },
        {
            path: '/TypingSpeed',
            name: 'typing',
            component: PaginaTyping2
        },
        {
            path: '/Estudia',
            name: 'estudia',
            component: PaginaEstudia
        },
        {
            path: '/Perfil',
            name: 'perfil',
            component: PaginaPerfil
        },
        {
            path: '/Juegos',
            name: 'juegos',
            component: PaginaJuegos
        },
        {
            path: '/RuletaPep',
            name: 'RuletaPep',
            component:RuletaPep
        },
        {
            path: '/Palabra',
            name: 'palabra',
            component: PaginaPal
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/registro',
            name: 'registro',
            component: registro
        },
        {
            path: '/registroPal',
            name: 'registroPal',
            component: registroPal
        },
        {
            path: '/loginPal',
            name: 'loginPal',
            component: loginPal
        }
    ]
})