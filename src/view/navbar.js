import LinkService from '../service/LinkService.js';

export default {
  data() {
    return {
      links: new LinkService().getLinks(),
    };
  },
  template: `
    <nav>
      <a href="#">Home</a>
      <a v-for="link in links" 
        :key="link.id" 
        :href="link.link" 
        @click="handleLinkClick(link.label)">{{ link.label }}
      </a>
    </nav>
  `,
  methods: {
    handleLinkClick(label) {
      document.querySelector('h1').innerText = label;
    },
  },
};
