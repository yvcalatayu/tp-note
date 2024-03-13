<template>
  <div>
    <h1></h1>
    <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"></movie-card>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';

export default {
    name: 'AllMovies',
    components: {
    MovieCard,
  },
  data() {
    return {
      movies: [],
    };
  },
};
</script>
