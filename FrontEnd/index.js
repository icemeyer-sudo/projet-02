import {gallery, filters} from '/modules/gallery/index.js';
import {fetchGet} from '/modules/api/fetch.js';
import {adminRun, adminContent} from '/modules/admin/index.js';
import {removeToken} from '/modules/auth/index.js';

// Récupération du token si il existe dans le local storage
const token = window.localStorage.getItem("token");

// Permet l'affichage instantané des options administrateurs
// même si l'API works/category ne répond pas
// ou qu'il met du temps à répondre
if(token) { 

    // Habillage
    adminContent() 

    // Déconnexion
    removeToken();
};

// Fetch les works
const dataWorks = await fetchGet("works");

// Fetch les categories pour les filtres
const dataCategories = await fetchGet("categories");

// Affichage de la galerie
gallery(dataWorks);

// Création et events des boutons de filtres
filters(dataWorks, dataCategories);

// Charge le contenu admin des modales si connecté
if(token) { 

    adminRun(dataWorks, dataCategories, token) 
    
};