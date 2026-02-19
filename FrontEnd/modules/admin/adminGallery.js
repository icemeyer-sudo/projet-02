import {openAdminGallery} from '/modules/modal/index.js';
import {removeContent} from '/modules/upload/removeContent.js';

export function adminGallery (data, token) {

    // Création de la gallerie dans la modale admin
    data.forEach((e) => {

        const adminGallery = document.querySelector(".div-admin-gallery");

        // Création de div qui contien l'image
        const div = document.createElement("div");
        div.classList.add("js-admin-div");
        div.id = "div-id-" + e.id;
        div.setAttribute("div-id", e.id);
        adminGallery.appendChild(div);

        // Création de l'image
        //const jsAdminDiv = document.querySelector(".js-admin-div-" + i);
        const img = document.createElement("img");
        img.src = e.imageUrl;

        // Création de l'icone poubelle pour la suppression
        const jsTrashImg = document.createElement("p");
        jsTrashImg.classList.add("admin-trash-img");
        jsTrashImg.classList.add("fa-solid");
        jsTrashImg.classList.add("fa-trash-can");
        jsTrashImg.setAttribute("data-id", e.id)

        // On ajout l'image et la croix dans la balise div
        div.appendChild(img);
        div.appendChild(jsTrashImg)

    });

    // Chargement de la modale adminGallery au clic
    openAdminGallery();

    // Suppression d'une photo
    removeContent(token);

}