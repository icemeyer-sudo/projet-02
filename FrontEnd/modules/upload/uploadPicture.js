import {fetchPost} from '/modules/api/fetch.js';

export async function uploadPicture (image, title, category, token) {
   
    const divAdminGallery = document.getElementById("divAdminGallery");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    let response = await fetchPost(formData, token);

    if(response.ok === true) {

        const commits = await response.json();

        /***** Partie adminGallery *****/
        //Création de la div
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "js-admin-div");
        newDiv.setAttribute("id", `div-id-${commits.id}`);
        newDiv.setAttribute("div-id", commits.id);
        divAdminGallery.appendChild(newDiv);

        // Création de l'image
        const newImg = document.createElement("img");
        newImg.src = commits.imageUrl;
        newDiv.appendChild(newImg);

        // Création de la croix pour supprimer l'image
        const newCross = document.createElement("p");
        newCross.setAttribute("class", "admin-trash-img");
        newCross.setAttribute("data-id", commits.id);
        newCross.classList.add("fa-solid");
        newCross.classList.add("fa-trash-can");
        newDiv.appendChild(newCross);

        /***** Partie publicGallery *****/
        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        figure.setAttribute("class", "figureGallery");
        figure.setAttribute("id", "figure-id-" + commits.id);

        const img = document.createElement("img");
        img.src = commits.imageUrl;
        img.setAttribute("id", "numeroId" + commits.id)
        img.setAttribute("class", "imageGallery");

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = commits.title;

        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

    }else {

        alert("Erreur API");

    }

}