export default {
  props: {
    movie: Object,
  },
  template: `
    <div class="card">
      <div class="movie">
        <h5>{{ movie.title }}</h5>
        <p>{{ truncatedDescription }}</p>
        <img :src="movie.image" alt="Movie Poster">
      </div>
    </div>
  `,
  computed: {
    truncatedDescription() {
      return this.movie.description.substring(0, 20) + '...';
    },
  },
};
