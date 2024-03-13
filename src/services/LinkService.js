export default class LinkService {
    getLinks() {
      return [
        { id: 0, label: 'Home', link: '/' },
        { id: 1, label: 'All Movies', link: '/allMovies' },
        { id: 2, label: 'Add Movie', link: '/addMovie' },
      ];
    }
  
    getLink(url) {
      return this.getLinks().find(link => link.link === url);
    }
  }
  