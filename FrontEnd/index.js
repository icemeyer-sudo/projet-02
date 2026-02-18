import {gallery, btnFilters} from '/modules/gallery/index.js';
import {fetchWorks, fetchCategories} from '/modules/api/fetch.js';
import {adminRun, adminContent} from '/modules/admin/index.js';
import {removeToken} from '/modules/auth/removeToken.js';

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
const dataWorks = await fetchWorks();

// Fetch les categories pour les filtres
const DataCategories = await fetchCategories();

// Affichage de la galerie
gallery(dataWorks);

// Affichage des boutons de filtres
btnFilters(dataWorks);

// Charge le contenu admin des modales si connecté
if(token) { 

    adminRun(dataWorks, DataCategories, token) 
    
};