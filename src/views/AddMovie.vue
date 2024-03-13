
<template>
  <div>
    <h1></h1>
    <movie-form v-if="showForm" @add-movie="addMovie"></movie-form>
  </div>
</template>

<script>
import MovieForm from '../components/MovieForm.vue';

export default {
    name: 'AddMovie',
    components: {
    MovieForm,
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    addMovie(movie) {
      // Logique pour ajouter un film
    },
  },
};
</script>
