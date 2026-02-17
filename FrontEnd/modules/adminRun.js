import {modalToggle} from '/modules/modal-toggle.js';
import {modalUpload} from '/modules/modal-upload.js';
import {removeContent} from '/modules/removeContent.js';

export function adminRun (data, categoriesData, token) {

    const aLogin = document.getElementById("a-login");
    document.getElementById("a-login").href="";
    aLogin.innerText = "logout";

    // On désactive les filtres, on fait apparaitre la bannière "mode édition" en haut et on fait apparaitre le lien "modifier"
    const divEditionMode = document.getElementById("div-edition-mode");
    divEditionMode.classList.toggle("disabled");
    const spanAdminModif = document.getElementById("span-admin-modif");
    spanAdminModif.classList.toggle("disabled");
    const divFilters = document.getElementById("filters");
    divFilters.classList.add("disabled");

    // Si on clique sur le bouton "modifier"
    modalToggle();

    // Importation des catégories dans le select du menu d'ajout de photo
    categoriesData.forEach((e) => {
        const selectOption = document.createElement("option");
        selectOption.value = e.id;
        selectOption.setAttribute("id", `categorie-${e.id}`);
        selectOption.innerText = e.name;
        document.querySelector("#categorie").insertBefore(selectOption, document.querySelector("#categorie").childNodes[e.id]);
    });

    // Quand on clique sur le bouton pour ouvrir la page d'upload d'image
    document.getElementById("js-btn-add").addEventListener("click", () => {

        modalUpload(categoriesData, token, data);

    });

    // Déconnexion
    aLogin.addEventListener("click", function removeToken() {

        window.localStorage.removeItem("token");

    });

    // Création de la gallerie dans la modale admin
    for (let i = 0; i < data.length; i++) {

        const adminGallery = document.querySelector(".div-admin-gallery");

        // Création de div 
        const div = document.createElement("div");
        div.classList.add("js-admin-div-" + i);
        div.classList.add("js-admin-div");
        div.id = "div-id-" + data[i].id;
        div.setAttribute("div-id", data[i].id);
        adminGallery.appendChild(div);

        // Création de l'image
        const jsAdminDiv = document.querySelector(".js-admin-div-" + i);
        const img = document.createElement("img");
        img.src = data[i].imageUrl;

        // Création de l'icone poubelle pour la suppression
        const jsTrashImg = document.createElement("p");
        jsTrashImg.classList.add("admin-trash-img");
        jsTrashImg.innerText = "X";
        jsTrashImg.setAttribute("data-id", data[i].id)

        // On ajout l'image dans la balise div
        jsAdminDiv.appendChild(img);
        jsAdminDiv.appendChild(jsTrashImg)

    };

    // Si on clique sur l'icone poubelle pour supprimer une image
    removeContent(token);

}