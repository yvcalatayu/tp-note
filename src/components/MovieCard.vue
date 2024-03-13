<template>
  <div class="movie-card">
    <h2>{{ movie.title }}</h2>
    <p>{{ truncatedDescription }}</p>
    <img :src="movie.image" alt="Movie Poster">
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  computed: {
    truncatedDescription() {
      return this.movie.description.substring(0, 20) + '...';
    },
  },
};
</script>
