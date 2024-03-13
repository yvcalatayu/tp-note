
<template>
  <nav>
    <router-link v-for="link in links" :key="link.id" :to="link.link" @click="handleLinkClick(link.link)">{{ link.label }}</router-link>
  </nav>
</template>

<script>
import LinkService from '../services/LinkService.js';

export default {
    data() {
        return {
            links: new LinkService().getLinks()
        };
    },
    methods: {
        handleLinkClick(url) {
            const links = new LinkService()
            const clickedLink = links.getLink(url)

            this.$emit('clear-movies');
            this.$emit('hide-form');

            if (clickedLink.id === 1) {
                this.$emit('show-movies');
            } else if (clickedLink.id === 2) {
                this.$emit('show-form');
            }

            if (clickedLink) {
                document.querySelector('h1').innerText = clickedLink.label;
            }
        }
    }
};
</script>
