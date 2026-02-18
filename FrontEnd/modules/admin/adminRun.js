import {removeModal} from '/modules/modal/index.js';
import {adminUpload, adminGallery} from '/modules/admin/index.js';
import {removeContent} from '/modules/upload/removeContent.js';

export function adminRun (data, categoriesData, token) {

    // Création de la gallerie dans la modale admin
    adminGallery(data);

    // Création de la modale pour upload une photo
    adminUpload(token, data, categoriesData);

    // Suppression d'une photo
    removeContent(token);

    // Fonction qui permet de refermer la modale
    removeModal();

}