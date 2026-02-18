import {fetchDelete} from '/modules/api/fetch.js';

// Quand on clique sur l'icone poubelle d'une image
export function removeContent(token) {

    const jsClickTrash = document.querySelectorAll(".admin-trash-img");
    jsClickTrash.forEach((e) => {

        e.addEventListener("click", () => {

            const id = e.getAttribute("data-id");

            // Suppression de la photo de la modale
            const divId = document.getElementById("div-id-"+ id);
            divId.remove();

            // Suppression de la photo de la gallerie index
            const figureId = document.getElementById("figure-id-"+ id);
            figureId.remove();
            
            fetchDelete(id, token);

        })

    })

}