
<template>
  <div id="app">
    <navbar :links="links"></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import LinkService from './services/LinkService.js';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
      links: new LinkService().getLinks(),
    };
  },
};
</script>

