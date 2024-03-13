import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';
import Navbar from './components/Navbar.vue';
import MovieCard from './components/MovieCard.vue';
import MovieForm from './components/MovieForm.vue';

const app = createApp(App);

app.component('navbar', Navbar)
   .component('movie-card', MovieCard) // Use kebab-case for component names in templates
   .component('movie-form', MovieForm); // Use kebab-case for component names in templates

app.config.globalProperties.$movies = []; // Use globalProperties to make movies accessible everywhere

app.config.globalProperties.loadMovies = function() { // Define loadMovies in globalProperties
    try {
        this.$movies = JSON.parse(localStorage.getItem('movies')) || [];
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
};

app.config.globalProperties.addMovie = function(movie) { // Define addMovie in globalProperties
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const newMovieList = [...storedMovies, { id: storedMovies.length + 1, ...movie }];
    this.$movies = newMovieList;
    localStorage.setItem('movies', JSON.stringify(newMovieList));
};

app.config.globalProperties.clearMovies = function() { // Define clearMovies in globalProperties
    this.$movies = [];
};

app.config.globalProperties.showForm = false; // Set initial value for showForm

app.config.globalProperties.showFormulaire = function() { // Define showFormulaire in globalProperties
    this.showForm = true;
};

app.config.globalProperties.hideFormulaire = function() { // Define hideFormulaire in globalProperties
    this.showForm = false;
};

app.use(router);
app.mount('#app');
