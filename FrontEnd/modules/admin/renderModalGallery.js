import {openAdminGallery} from '/modules/modal/index.js';
import {initializeDeleteWorkListener} from '/modules/upload/initializeDeleteWorkListener.js';

export function renderModalGallery (works) {

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

    openAdminGallery();
    initializeDeleteWorkListener();

}