import {gallery} from '/modules/gallery/index.js';
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
        newCross.innerText = "";
        newDiv.appendChild(newCross);

    }else {

        alert("Erreur API");

    }

    // On supprime les images et les figures de la gallerie en vue de les remplacer
    const nbimg = document.querySelectorAll(".imageGallery");
    for (let i = 0; i < nbimg.length; i++) {
        nbimg[i].remove();
    }

    const nbFigure = document.querySelectorAll(".figureGallery");
    for (let i = 0; i < nbFigure.length; i++) {
        nbFigure[i].remove();
    }

    // On fait appel à la fonction GET pour reconstituer la gallerie avec la nouvelle image
    await fetchWorks();

    async function fetchWorks () {
        
        const response = await fetch("http://localhost:5678/api/works", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();

        await gallery(data);

    }

}