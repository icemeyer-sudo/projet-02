import {removeModal} from '/modules/modal/index.js';
import {adminUpload, adminGallery} from '/modules/admin/index.js';

export function adminRun (data, categoriesData, token) {

    // Création de la gallerie dans la modale admin
    adminGallery(data, token);

    // Création de la modale pour upload une photo
    adminUpload(token, data, categoriesData);

    // Fonction qui permet de refermer la modale
    removeModal();

}