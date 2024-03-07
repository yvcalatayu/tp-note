import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import { createRouter, createWebHistory } from 'https://unpkg.com/vue-router@4.0.0/dist/vue-router.esm-browser.js';
import Navbar from './src/view/navbar.js';
import Home from './src/view/Home.js';
import AllMovies from './src/view/AllMovies.js'; 
import AddMovie from './src/view/AddMovie.js'; 

const app = createApp({});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/all-movies', component: AllMovies },
    { path: '/add-movie', component: AddMovie },
  ],
});

app.use(router);
app.component('navbar', Navbar);

app.mount('#app');
