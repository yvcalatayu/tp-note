export default {
    data() {
      return {
        newMovie: {
          id: null,
          title: '',
          description: '',
          image: ''
        },
        errors: {
          name: '',
          description: ''
        },
        showForm: false
      };
    },
    methods: {
      resetForm() {
        this.newMovie = { id: null, title: '', description: '', image: '' };
        this.errors = { name: '', description: '' };
        this.showForm = false;
      },
      validateForm() {
        this.errors = { name: '', description: '' };
  
        if (!this.newMovie.title || this.newMovie.title.length < 5 || this.newMovie.title.length > 30) {
          this.errors.name = 'Le nom doit comporter entre 5 et 30 caractères';
        }
  
        if (!this.newMovie.description || this.newMovie.description.length < 30) {
          this.errors.description = 'La description doit comporter au moins 30 caractères';
        }
  
        return !this.errors.name && !this.errors.description;
      },
      addMovie() {
        if (this.validateForm()) {
          this.$emit('add-movie', { ...this.newMovie });
          this.resetForm();
        }
      }
    },
    template: `
      <div>
        <form @submit.prevent="addMovie">
          <div>
            <label for="title">Nom du film:</label>
            <input type="text" id="title" v-model="newMovie.title" :class="{ 'box-error': errors.description }">
            <div class="text-error">{{ errors.name }}</div>
          </div>
          <div>
            <label for="description">Description:</label>
            <textarea id="description" v-model="newMovie.description" :class="{ 'box-error': errors.description }"></textarea>
            <div class="text-error">{{ errors.description }}</div>
          </div>
          <div>
            <label for="image">Image URL:</label>
            <input type="text" id="image" v-model="newMovie.image">
          </div>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    `
  };
  