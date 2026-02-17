import {fetchDelete} from '/modules/fetch.js';

// Quand on clique sur l'icone poubelle d'une image
export function removeContent(token) {

    const jsClickTrash = document.querySelectorAll(".admin-trash-img");
    jsClickTrash.forEach((e) => {

        e.addEventListener("click", () => {

            const id = e.getAttribute("data-id");
            const divId = document.getElementById("div-id-"+ id);
            divId.remove();
            
            fetchDelete(id, token);

        })

    })

}