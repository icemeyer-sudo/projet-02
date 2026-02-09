// Récupération du token si il existe dans le local storage
const token = window.localStorage.getItem("token");

if (token) {
    console.log(token);
}

// On récupère le contenu sur l'API
const response = await fetch("http://localhost:5678/api/works", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
});
const data = await response.json();

document.querySelector(".gallery").innerHTML = '';
import {gallery} from '/modules/gallery.js';

gallery(data);

const btnFilters = document.querySelectorAll(".btnFilters");
    
for (let i = 0; i < btnFilters.length; i++) {

    btnFilters[i].addEventListener("click", async function () {
        
        const dataId = btnFilters[i].dataset.id;

        // Si bouton filtrer tous
        if(dataId == 0) {

            const resFilter = data;
            console.log(resFilter);
            document.querySelector(".gallery").innerHTML = '';
            gallery(resFilter);

        }
            
        // Si bouton filtrer Objets, Appartements, Hotels
        else {
            
            const resFilter = data.filter(function (j) {
                
                return j.categoryId == dataId;

            });
            console.log(resFilter);
            document.querySelector(".gallery").innerHTML = '';
            gallery(resFilter);

        }

        

    });
  
};

if(token) {

    const aLogin = document.getElementById("a-login");
    document.getElementById("a-login").href="";
    aLogin.innerText = "";
    aLogin.innerText = "logout";

    const divEditionMode = document.getElementById("div-edition-mode");
    divEditionMode.classList.toggle("disabled");

    const spanAdminModif = document.getElementById("span-admin-modif");
    spanAdminModif.classList.toggle("disabled");

    const divFilters = document.getElementById("filters");
    divFilters.classList.add("disabled");

    function addAdmin() {
        
        const divAdmin = document.getElementById("div-admin");
        divAdmin.classList.remove("disabled");

        const bgBrightness = document.getElementById("super-container");
        bgBrightness.classList.add("brightness");

    };
          
    function removeAdmin() {

        document.addEventListener("click", (event) => {

            const divAdmin = document.getElementById("div-admin");
            const bgBrightness = document.getElementById("super-container");
            const spanAdminModif = document.getElementById("span-admin-modif");
            const crossAdmin = document.getElementById("div-close-admin");

            if((!divAdmin.contains(event.target) && !spanAdminModif.contains(event.target)) || crossAdmin.contains(event.target)) {

                divAdmin.classList.add("disabled");
                bgBrightness.classList.remove("brightness");
                document.getElementById("div-return-admin").classList.add("disabled");
                document.getElementById("divAdminGallery").classList.remove("disabled");

            };

        });

    };

    spanAdminModif.addEventListener("click", addAdmin);

    removeAdmin();

    // Déconnexion
    aLogin.addEventListener("click", function () {

        window.localStorage.removeItem("token");

    });

    // Création de la gallerie dans la modale admin
    for (let i = 0; i < data.length; i++) {

        const adminGallery = document.querySelector(".div-admin-gallery");

        // Création de div 
        const div = document.createElement("div");
        div.classList.add("js-admin-div-" + i);
        div.classList.add("js-admin-div");
        adminGallery.appendChild(div);

        // Création de l'image
        const jsAdminDiv = document.querySelector(".js-admin-div-" + i);
        const img = document.createElement("img");
        img.src = data[i].imageUrl;

        // Création de l'icone poubelle pour la suppression
        const jsTrashImg = document.createElement("p");
        jsTrashImg.classList.add("admin-trash-img");
        jsTrashImg.innerText = "X";
        jsTrashImg.setAttribute("id", "numeroId" + data[i].id)

        // On ajout l'image dans la balise div
        jsAdminDiv.appendChild(img);
        jsAdminDiv.appendChild(jsTrashImg)

    };

    // Quand on clique sur ajouter une photo
    document.getElementById("js-btn-add").addEventListener("click", () => {
        
        document.getElementById("divAdminGallery").classList.add("disabled");
        document.getElementById("div-return-admin").classList.remove("disabled");
        
    });

    // Quand on clique sur la flèche retour
    document.getElementById("div-return-admin").addEventListener("click", () => {

        document.getElementById("divAdminGallery").classList.remove("disabled");
        document.getElementById("div-return-admin").classList.add("disabled");

    });

    // Quand on clique sur l'icone poubelle
    const jsClickTrash = document.querySelectorAll(".admin-trash-img");

    for (let i = 0; i < jsClickTrash.length; i++) {

        jsClickTrash[i].addEventListener("click", () => {

            const jsIdImgTrash = jsClickTrash[i].getAttribute("id");
            console.log(jsIdImgTrash);

        })

    }


};