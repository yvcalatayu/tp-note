class LinkService {
  getLinks() {
    return [
      { id: 1, label: 'Tous les films', link: '/all-movies' },
      { id: 2, label: 'Ajouter un film', link: '/add-movie' },
    ];
  }

  getLink(url) {
    return {};
  }
}

export default LinkService;
