export function setupAdminFormUploadModalTrigger() {
    
    const jsBtnUpload = document.getElementById("js-btn-add");
    const modalGallery = document.querySelector("#div-admin");
    const modalGalleryUpload = document.querySelector("#div-admin-upload");

    jsBtnUpload.addEventListener("click", () => {

        modalGallery.classList.remove("active");
        modalGalleryUpload.classList.add("active");

    })
    
}