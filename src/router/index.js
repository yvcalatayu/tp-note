import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddMovie from '../views/AddMovie.vue';
import AllMovies from '../views/AllMovies.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/addMovie', component: AddMovie },
    { path: '/allMovies', component: AllMovies }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
