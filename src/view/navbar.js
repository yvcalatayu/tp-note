import LinkService from '../service/LinkService.js';

export default {
  data() {
    return {
      links: [],
      movies: []
    };
  },
  created() {
    this.links = new LinkService().getLinks();
  },
  template: `
    <nav>
      <a v-for="link in links" 
        :key="link.id" 
        :href="link.link" 
        @click="handleLinkClick(link.link)">{{ link.label }}
      </a>
    </nav>
  `,

  methods: {
    handleLinkClick(url) {
      const links = new LinkService()
      const clickedLink = links.getLink(url);

      this.$emit('hide-form');
      let page
      // Mettre à jour la page active
      if (clickedLink.id === 1) {
        page = 'all-movies';
        this.$emit('show-movies');
      } else if (clickedLink.id === 2) {
        page = 'add-movies';
        this.$emit('show-form');
      } else {
        page = 'home';
      }
  
      if (clickedLink) {
        document.querySelector('h1').innerText = clickedLink.label;
      }
      console.log('page', page);
      this.$emit('page-changed', page);
    }
  }
};
