import {resetForm} from '/modules/modal/index.js';

// Ferme la modale qui est ouverte
export function removeModal() {
        
    const modalContainer = document.querySelector(".modal-container");
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");

    // Parcourt le tableau qui contient tous les modalTriggers
    modalTriggers.forEach(e => e.addEventListener("click", () => {

        modalContainer.classList.remove("active");
        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.remove("active");
        removeEventListener("change", document.getElementById("file"));

        // Réinitialisation du formulaire quand la modale est fermée
        // Seul moyen de pouvoir faire réapparaitre l'input file
        resetForm();

    }))

};

// Si on vient de adminGallery avec le bouton "ajouter une photo"
export function toggleAdminUpload() {
    
    const jsBtnUpload = document.getElementById("js-btn-add");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");

    jsBtnUpload.addEventListener("click", () => {

        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.add("active");

    })    
    
}

// Si on vient de l'index avec le bouton "modifier"
export function toggleAdminGallery() {

    const modalBtnTrigger = document.querySelector(".modal-btn-trigger");
    const modalContainer = document.querySelector(".modal-container");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");
    
    modalBtnTrigger.addEventListener("click", () => {

        modalContainer.classList.add("active");
        modalGallery.classList.add("active");
        modalGalleryUpload.classList.remove("active");

    })

}

// Quand on clique sur la flèche retour dans la modale adminUpload
export function modalBack () {

    document.getElementById("div-return-admin").addEventListener("click", () => {

        const modalContainer = document.querySelector(".modal-container");
        const modalGallery = document.querySelector("#div-admin");
        const modalUpload = document.querySelector("#div-admin-upload");

        modalUpload.classList.remove("active");
        modalContainer.classList.add("active");
        modalGallery.classList.add("active");

        // Réinitialisation du formulaire quand on quitte la modale adminUpload
        resetForm();

    });

}