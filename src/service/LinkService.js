class LinkService {

  links = [
    { id: 0, label: 'Home', link: 'http://localhost:3000#'},
    { id: 1, label: 'Tous les films', link: 'http://localhost:3000#all-movies' },
    { id: 2, label: 'Ajouter un film', link: 'http://localhost:3000#add-movie' },
  ];

  getLinks() {
    return this.links
  }

  getLink(url) {
    return this.links.find(link => link.link === url);
  }
}

export default LinkService;
