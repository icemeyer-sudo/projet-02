import {fetchPost} from '/modules/api/fetch.js';

// Envoi le formulaire au serveur et gère l'affichage dynamique de la nouvelle photo dans la gallerie public et admin
export async function uploadPicture (image, title, category, token) {
   
    const divAdminGallery = document.getElementById("divAdminGallery");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    let promise = await fetchPost(formData, token);

    // Si la réponse du serveur est ok, on affiche la photo dans les deux galleries
    if(promise.ok === true) {

        const response = await promise.json();

        /***** Partie adminGallery *****/
        //Création de la div
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "js-admin-div");
        newDiv.setAttribute("id", `div-id-${response.id}`);
        newDiv.setAttribute("div-id", response.id);
        divAdminGallery.appendChild(newDiv);

        // Création de l'image
        const newImg = document.createElement("img");
        newImg.src = response.imageUrl;
        newImg.alt = response.title;
        newDiv.appendChild(newImg);

        // Création de la croix pour supprimer l'image
        const newCross = document.createElement("p");
        newCross.setAttribute("class", "admin-trash-img");
        newCross.setAttribute("data-id", response.id);
        newCross.classList.add("fa-solid");
        newCross.classList.add("fa-trash-can");
        newDiv.appendChild(newCross);

        /***** Partie publicGallery *****/
        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        figure.setAttribute("class", "figureGallery");
        figure.setAttribute("id", "figure-id-" + response.id);

        const img = document.createElement("img");
        img.src = response.imageUrl;
        img.alt = response.title;
        img.setAttribute("id", "numeroId" + response.id)
        img.setAttribute("class", "imageGallery");

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = response.title;

        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

    }else {

        console.log("Erreur d'envoi au serveur. Le serveur ne répond pas.")

    }

}