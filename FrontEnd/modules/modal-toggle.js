export function modalToggle() {
        
    const modalContainer = document.querySelector(".modal-container");
    const modalBtnTrigger = document.querySelector(".modal-btn-trigger");
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");

    // On parcourt le tableau qui contient tous les modalTriggers
    // Même chose que for(let i = 0; i < modalTriggers.length; i++)
    modalBtnTrigger.addEventListener("click", triggerBtnModal)
    function triggerBtnModal() {

        modalContainer.classList.toggle("active");
        modalGallery.classList.toggle("active");

    }

    modalTriggers.forEach(e => e.addEventListener("click", triggerModal))
    function triggerModal() {

        modalContainer.classList.remove("active");
        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.remove("active");

    }

};