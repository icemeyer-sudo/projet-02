import {removeModal} from '/modules/modal/index.js';
import {adminUpload} from '/modules/admin/index.js';
import {renderModalGallery} from '/modules/admin/renderModalGallery.js'

export function adminRun (data, categoriesData, token) {

    // Création de la gallerie dans la modale admin
    renderModalGallery(data, token);

    // Création de la modale pour upload une photo
    adminUpload(token, data, categoriesData);

    // Fonction qui permet de refermer la modale
    removeModal();

}