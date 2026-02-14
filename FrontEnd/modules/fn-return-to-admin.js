// Quand on clique sur la flèche retour
export function returnToAdmin () {

    document.getElementById("div-return-admin").addEventListener("click", () => {

        const modalContainer = document.querySelector(".modal-container");
        const modalGallery = document.querySelector("#div-admin");
        const modalUpload = document.querySelector("#div-admin-upload");

        modalUpload.classList.remove("active");
        modalContainer.classList.add("active");
        modalGallery.classList.add("active");

    });

}