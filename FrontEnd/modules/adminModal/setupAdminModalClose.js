import {resetFormModal} from '/modules/adminModal/resetFormModal.js';

export function setupAdminModalClose() {

    listenEscapeKey()
    listenBackdropClick()
    listenReturnButton()
};

function listenEscapeKey() {

    document.addEventListener("keydown", (event) => {

        const modalContainer = document.querySelector(".modal-container");
        const modalGallery = document.querySelector("#div-admin");
        const modalGalleryUpload = document.querySelector("#div-admin-upload");

        if(event.key == "Escape") {
            
            modalContainer.classList.remove("active");
            modalGallery.classList.remove("active");
            modalGalleryUpload.classList.remove("active");

            resetFormModal();
        }
    })
}

function listenBackdropClick() {

    const modalContainer = document.querySelector(".modal-container");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");
    const modalTriggers = document.querySelectorAll(".modal-trigger");

    modalTriggers.forEach(e => e.addEventListener("click", () => {

        modalContainer.classList.remove("active");
        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.remove("active");

        resetFormModal();
    }))
}

function listenReturnButton() {

    const modalContainer = document.querySelector(".modal-container");
    const modalUpload = document.querySelector("#div-admin-upload");
    const modalGallery = document.querySelector("#div-admin");

    document.getElementById("div-return-admin").addEventListener("click", () => {

        modalUpload.classList.remove("active");
        modalContainer.classList.add("active");
        modalGallery.classList.add("active");

        resetFormModal();
    });
}