import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'
import SnippetList from './components/SnippetList.vue'
import NewSnippet from './components/NewSnippet.vue'
import SnippetView from './components/SnippetView.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: SnippetList },

    { path: '/login', component: Login },
    { path: '/register', component: Register },

    { path: '/profile/:userid', component: Profile, props: true },

    { path: '/snippets', component: SnippetList },
    { path: '/snippets/new', component: NewSnippet },
    { path: '/snippet/:snippetid', component: SnippetView, props: true }
]

export default new VueRouter({ mode: 'history', routes })