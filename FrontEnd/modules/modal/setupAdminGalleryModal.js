export function displayAdminGallery() {

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