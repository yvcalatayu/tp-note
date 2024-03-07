import LinkService from '../service/LinkService.js';

export default {
  data() {
    return {
      links: new LinkService().getLinks(),
      movies: [],
    };
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

      if(clickedLink.id == 1){
        this.$emit('show-movies');
      } else{
        this.$emit('clear-movies')
      }
  
      if (clickedLink) {
        document.querySelector('h1').innerText = clickedLink.label;
      }
    }
  }
};
