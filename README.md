## Conseils/Consignes

- Le projet peut être réalisé par 2 au maximum
- Le travail devra être rendu via un repo GIT de votre choix (github ou codefirst)
- Le projet sera réalisé en vueJS
- Pensez composant : on découpe la page en composant, chacun ayant UNE responsabilité
- À chaque modification du sujets, pensez à regarder TOUTES les modifications qui peuvent vous donner des idées, indices, solutions etc...

## Sujet du TP

1) Créer une classe `LinkService`, ayant pour méthode `getLinks()` qui retourne un tableau de { `id(int)`, `label(string)`, `link(string)` }
2) Créer un composant `Navbar` qui affichera une liste de lien : un lien Home et un lien pour chaque élément retourné par la méthode `getLinks` (le routing en VueJS n'ayant pas été vu, vous pouvez utiliser des liens sous la forme `http:localhost:3000#link`)
3) Dans la classe `LinkService` ajoutez la méthode `getLink(url)` qui retourne le lien avec l'URL passée en paramètre
4) Au clic sur chaque lien, le H1 de la page devra afficher le libellé du lien cliqué
5) La méthode `getLinks()` présente dans la classe `LinkService` devra être bouchonnée avec un lien "Tous les films", "Ajouter un film"
6) Mettre en place un modèle pour gérer des films (Movie). Un Movie est composé d'un ID, d'un titre, d'une description et d'une image (champ texte représentant un lien vers une image)
7) Créer un composant "MovieCard" qui prendra en propriété un Movie et affichera les différentes informations (sauf l'id) . La description ne devra être affichée que sur les 20 premiers caractères
8) Au clic sur le lien "Tous les films", il faudra afficher une liste de film qui est issue d'un bouchon au format JSON
9) Au clic sur le lien "Ajouter un film", afficher un formulaire permettant d'ajouter un Movie { id, name, description, image }. Le résultat sera affiché sur la page "Tous les films"
10) Mettre en place une vérification d'erreur dans le formulaire d'ajout de Movie (champs obligatoires, name 5 caractères mini / 30 caractères maxi, description 30 caractères mini) pour chaque champ (message d'erreur + mise en avant du champ correspondant)
11) Créer une classe générique `ApiService` permettant de faire des appels de type GET ou POST qui retourneront des données au format JSON (cette classe doit fonctionner peu importe l'URL et le verbe utilisés)
12) Ajout un champ de recherche sur la liste de tous les films. Lorsque l'utilisateur saisi un caractère, la liste des films se filtre si une correspondance est trouvée dans le titre du film
13) Sur le composant "MovieCard", ajouter un bouton permettant d'indiquer si le film a été vu ou non. Si on clic sur le bouton alors le titre du fil passera en vert (`color: green`)

## Bonus

1) Mette en place un routing propre grâce à VueJS (doc : https://router.vuejs.org/)
2) Stocker les Movies ajouté via le formulaire dans le localstorage
3) Sur la page "Tous les films" afficher les films issus du bouchon + ceux issus du localstorage

## Aide

- Un stub/bouchon est une méthode permettant d'intégrer des données factices dans une application. Comme par exemple avec un fichier JSON.
- L'image du film devra être affichée dans une balise img
- Sur un `input` l'évènement permettant de détecter un changement se nomme `change`