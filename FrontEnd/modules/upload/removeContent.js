import {fetchDelete} from '/modules/api/fetch.js';

// Quand on clique sur l'icone poubelle d'une image
export function removeContent(token) {

    const divAdminGallery = document.getElementById("divAdminGallery");
    divAdminGallery.addEventListener("click", (e) => {

        if(e.target.classList.contains("admin-trash-img")) {

            // Suppression de la photo de la modale
            const id = e.target.getAttribute("data-id");
            const divId = document.getElementById("div-id-"+ id);
            divId.remove();

            // Suppression de la photo de la gallerie index
            const figureId = document.getElementById("figure-id-"+ id);
            figureId.remove();
            
            fetchDelete(id, token);

        }

    })

}