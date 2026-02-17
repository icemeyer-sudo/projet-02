import {gallery} from '/modules/gallery.js';
import {fetchWorks} from '/modules/fetch.js';
import {fetchCategories} from '/modules/fetch.js';
import {adminRun} from '/modules/adminRun.js';
import {btnFilters} from '/modules/btnFilters.js';

// Récupération du token si il existe dans le local storage
const token = window.localStorage.getItem("token");

// Fetch les works
const data = await fetchWorks();

// Fetch les categories pour les filtres
const categoriesData = await fetchCategories();

// Affichage de la galerie
gallery(data);

btnFilters(data);

// Si un utilisateur est connecté
if(token) {

    adminRun(data, categoriesData, token);

};