# Mwinda – Site de Réservation de Taxi

Mwinda est un site web moderne et responsive permettant de réserver un taxi facilement, inspiré des applications comme Uber ou Yango.

## Fonctionnalités
- **Page d’accueil** avec présentation, menu, section "Comment ça marche", bouton de réservation, footer avec contacts et réseaux sociaux.
- **Page de réservation** avec formulaire (nom, téléphone, départ, destination, type de transport).
- **Confirmation de réservation** avec une alerte moderne (SweetAlert2).
- **Design sobre et moderne** (fond blanc, textes noirs, responsive mobile/desktop).
- **Navigation mobile** avec menu hamburger et drawer latéral.

## Technologies utilisées
- HTML5, CSS3 (Flexbox, Responsive)
- JavaScript, jQuery
- [FontAwesome](https://fontawesome.com/) pour les icônes
- [SweetAlert2](https://sweetalert2.github.io/) pour les alertes

## Structure du projet
```
/
├── index.html                # Page d’accueil (racine)
└── test/
    ├── reservation.html      # Page de réservation
    ├── style.css            # Feuilles de style
    ├── script.js            # Logique JS/jQuery
    └── js/
        ├── all.min.js       # FontAwesome (si local)
        └── sweetalert2.all.min.js # SweetAlert2 (si local)
```

## Déploiement
le site a été hebergé sur Github page

- **index.html** doit être à la racine.
- Les autres fichiers restent dans le dossier `test/`.

## Utilisation
1. Ouvrez `index.html` dans votre navigateur.
2. Cliquez sur "Réserver un taxi" pour accéder au formulaire.
3. Remplissez et validez : une alerte de confirmation s’affiche.

## Auteur
- [Panea technologies](https://github.com/Paneatechonologies)

---

**Mwinda © 2024 – Tous droits réservés**
