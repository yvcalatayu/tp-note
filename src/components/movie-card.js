export default {
  props: {
    movie: Object,
  },
  data() {
    return {
      isWatched: false
    };
  },
  methods: {
    toggleWatched() {
      this.isWatched = !this.isWatched;
    }
  },
  template: `
    <div class="card">
      <div class="movie">
        <h5 :style="{ color: isWatched ? 'green' : 'black' }">{{ movie.title }}</h5>
        <button @click="toggleWatched">{{ isWatched ? 'Vu' : 'Non vu' }}</button>
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
