import {displayAdminGallery} from '/modules/modal/displayAdminGallery.js';
import {initializeDeleteWorkListener} from '/modules/upload/initializeDeleteWorkListener.js';

export function renderAdminGallery (works) {

    createAdminGallery(works); // création du HTML dans la modale admin
    initializeDeleteWorkListener(); // écoute sur les boutons "supprimer"
    displayAdminGallery(); // déclenche l'affichage au clic avec un eventlistener
}

function createAdminGallery(works) {

    const adminGalleryContainer  = document.querySelector(".div-admin-gallery");
    works.forEach((work) => {

        // Création de div qui contien l'image
        const workItemContainer = document.createElement("div");
        workItemContainer.classList.add("js-admin-div");
        workItemContainer.setAttribute("div-id", work.id);
        adminGalleryContainer.appendChild(workItemContainer);

        const img = document.createElement("img");
        img.src = work.imageUrl;

        // Création de l'icone poubelle pour la suppression
        const deleteIcon = document.createElement("p");
        deleteIcon.classList.add("admin-trash-img", "fa-solid", "fa-trash-can");
        deleteIcon.setAttribute("data-id", work.id)

        // On ajout l'image et la croix dans la balise div
        workItemContainer.appendChild(img);
        workItemContainer.appendChild(deleteIcon)
    });
}