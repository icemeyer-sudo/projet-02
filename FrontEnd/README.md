# Sophie Bluel — Portfolio d'architecte d'intérieur

Projet réalisé dans le cadre du cours OpenClassrooms (Projet 02). Il s'agit d'un site portfolio pour Sophie Bluel, architecte d'intérieur, avec une interface d'administration permettant de gérer les réalisations.

---

## Technologies utilisées

- HTML5 / CSS3
- JavaScript vanilla (ES Modules)
- API REST (backend local)
- Font Awesome 6
- Google Fonts (Syne, Work Sans)

---

## Prérequis

Le frontend communique avec un backend local exposé sur le port **5678**.  
Assurez-vous que le serveur backend est lancé avant d'ouvrir le site.

URL de base de l'API : `http://localhost:5678/api`

---

## Lancer le projet

1. Démarrer le backend (voir le dossier `BackEnd` du projet).
2. Ouvrir `index.html` via un serveur local (ex. : extension **Live Server** sur VS Code).

> ⚠️ Le projet utilise des ES Modules (`type="module"`), il ne fonctionnera pas en ouvrant directement le fichier HTML depuis le système de fichiers (protocole `file://`).

---

## Structure du projet

```
FrontEnd/
├── index.html              # Page principale (portfolio)
├── index.js                # Point d'entrée principal
├── login.html              # Page de connexion
├── login.js                # Point d'entrée de la page login
├── assets/
│   ├── style.css           # Feuille de styles globale
│   ├── icons/              # Icônes (Instagram…)
│   └── images/             # Images statiques
└── modules/
    ├── admin/
    │   └── setupAdminInterface.js       # Active le bandeau "Mode édition" et le lien logout
    ├── adminModal/
    │   ├── setupAdminModal.js           # Initialise la modale admin
    │   ├── setupAdminModalClose.js      # Gestion fermeture (Échap, clic overlay, retour)
    │   ├── setupDeleteWork.js           # Suppression d'un travail depuis la modale
    │   ├── resetFormModal.js            # Réinitialise le formulaire de la modale
    │   ├── adminGallery/
    │   │   ├── setupAdminGallery.js              # Affiche la galerie dans la modale
    │   │   └── setupAdminGalleryModalTrigger.js  # Ouvre la modale galerie
    │   └── adminFormUpload/
    │       ├── setupAdminFormUpload.js            # Formulaire d'ajout de photo
    │       ├── setupAdminFormUploadModalTrigger.js# Ouvre la modale d'upload
    │       └── handlePictureUpload.js             # Envoi du formulaire à l'API
    ├── api/
    │   ├── getWorks.js       # GET /api/works/
    │   ├── getCategories.js  # GET /api/categories/
    │   ├── postWork.js       # POST /api/works/ (authentifié)
    │   ├── deleteWork.js     # DELETE /api/works/:id (authentifié)
    │   └── postLogin.js      # POST /api/users/login
    ├── auth/
    │   ├── setupLogin.js     # Gestion du formulaire de connexion
    │   └── setupLogout.js    # Déconnexion (suppression du token)
    └── mainPage/
        ├── setupMainPage.js  # Initialise la galerie et les filtres
        └── gallery/
            ├── renderGallery.js   # Rendu des figures dans la galerie
            ├── setupFilters.js    # Création des boutons de filtre
            └── listenFilters.js   # Filtrage par catégorie au clic
```

---

## Fonctionnalités

### Visiteur (non connecté)
- Affichage de la galerie de projets (chargée depuis l'API)
- Filtrage des projets par catégorie
- Section introduction et formulaire de contact

### Administrateur (connecté)
- Connexion via `login.html` avec email et mot de passe
- Bandeau "Mode édition" affiché en haut de page
- Lien de navigation transformé en "logout"
- Modale de gestion de la galerie :
  - Visualisation de tous les travaux
  - Suppression d'un travail
  - Ajout d'un nouveau travail (image + titre + catégorie)
- Filtres de catégorie masqués en mode admin

### Authentification
- Le token JWT est stocké dans le `localStorage`
- Les requêtes protégées (POST, DELETE) transmettent le token dans le header `Authorization: Bearer <token>`
- En cas d'expiration du token (401), l'utilisateur est déconnecté automatiquement

---

## Identifiants de test

```
Email    : sophie.bluel@test.tld
Password : S0phie
```

---

## Points d'entrée de l'API

| Méthode | Endpoint              | Auth | Description                  |
|---------|-----------------------|------|------------------------------|
| GET     | `/api/works/`         | Non  | Récupère tous les travaux     |
| POST    | `/api/works/`         | Oui  | Ajoute un travail             |
| DELETE  | `/api/works/:id`      | Oui  | Supprime un travail           |
| GET     | `/api/categories/`    | Non  | Récupère les catégories       |
| POST    | `/api/users/login`    | Non  | Connexion (retourne un token) |
