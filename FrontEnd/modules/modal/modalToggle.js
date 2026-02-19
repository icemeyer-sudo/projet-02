import {resetForm} from '/modules/modal/index.js';

// Ferme la modale qui est ouverte
export function removeModal() {
        
    const modalContainer = document.querySelector(".modal-container");
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");
    const modalUpload = document.querySelector("#div-admin-upload");

    // Ferme la modale avec la touche echap
    document.addEventListener("keydown", (e) => {

        if(e.key == "Escape") {
            
            modalContainer.classList.remove("active");
            modalGallery.classList.remove("active");
            modalGalleryUpload.classList.remove("active");

            // Réinitialisation du formulaire quand la modale est fermée
            // Seul moyen de pouvoir faire réapparaitre l'input file
            resetForm();

        }

    })

    // Parcourt le tableau qui contient tous les modalTriggers
    modalTriggers.forEach(e => e.addEventListener("click", () => {

        modalContainer.classList.remove("active");
        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.remove("active");

        // Réinitialisation du formulaire quand la modale est fermée
        // Seul moyen de pouvoir faire réapparaitre l'input file
        resetForm();

    }))

    // Quand on clique sur la flèche retour dans la modale adminUpload
    document.getElementById("div-return-admin").addEventListener("click", () => {

        modalUpload.classList.remove("active");
        modalContainer.classList.add("active");
        modalGallery.classList.add("active");

        // Réinitialisation du formulaire quand on revient en arrière
        resetForm();

    });

};

// Si on vient de adminGallery avec le bouton "ajouter une photo"
export function openAdminUpload() {
    
    const jsBtnUpload = document.getElementById("js-btn-add");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");

    jsBtnUpload.addEventListener("click", () => {

        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.add("active");

    })    
    
}

// Si on vient de l'index avec le bouton "modifier"
export function openAdminGallery() {

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