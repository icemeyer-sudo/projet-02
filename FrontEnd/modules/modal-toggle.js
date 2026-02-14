export function modalToggle() {
        
    const modalContainer = document.querySelector(".modal-container");
    const modalBtnTrigger = document.querySelector(".modal-btn-trigger");
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");

    // Au click du bouton modifier
    modalBtnTrigger.addEventListener("click", triggerBtnModal)
    function triggerBtnModal() {

        modalContainer.classList.add("active");
        modalGallery.classList.add("active");

    }

    // On parcourt le tableau qui contient tous les modalTriggers
    // Même chose que for(let i = 0; i < modalTriggers.length; i++)
    modalTriggers.forEach(e => e.addEventListener("click", triggerModal))
    function triggerModal() {

        modalContainer.classList.remove("active");
        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.remove("active");
        removeEventListener("change", document.getElementById("file"));

    }

};