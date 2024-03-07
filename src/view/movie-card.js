export default {
    props: {
      movie: Object,
    },
    template: `
      <div class="movie-card">
        <h2>{{ movie.name }}</h2>
        <p>{{ truncatedDescription }}</p>
        <img :src="movie.image" alt="Movie Poster">
      </div>
    `,
    computed: {
      truncatedDescription() {
        return this.movie.description.substring(0, 20) + '...';
      },
    },
  };
  