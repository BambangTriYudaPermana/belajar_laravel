/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

const Home = require('./pages/Home.vue').default
const About = require('./pages/About.vue').default
const NotFound = require('./pages/NotFound.vue').default
// const { default: VueRouter } = require('vue-router');

const routes = [
    {
        path : '/home',
        component : Home
    },
    {
        path : '/about',
        component : About
    },
    {
        path : '*', //ketika mengetikan sembarang url
        component : NotFound
    }
]

const router = new VueRouter({
    mode : 'history',
    routes
})

const app = new Vue({
    el: '#app',
    data: {
        title : 'Belajar Laravel Vue'
    },
    router
});

const body = new Vue({
    el : '#isi',
    data : {
        judul : 'ini judul guys',
        nama : 'Bambang'
    }
});

