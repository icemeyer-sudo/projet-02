import {gallery} from '/modules/gallery.js';
import {modalToggle} from '/modules/modal-toggle.js';
import {modalUpload} from '/modules/modal-upload.js';

// Récupération du token si il existe dans le local storage
const token = window.localStorage.getItem("token");
const userId = window.localStorage.getItem("userId");

// On récupère le contenu sur l'API
const response = await fetch("http://localhost:5678/api/works", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
});
const data = await response.json();

const categoriesResponse = await fetch("http://localhost:5678/api/categories", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
});
const categoriesData = await categoriesResponse.json();

document.querySelector(".gallery").innerHTML = '';

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

    // Si on clique sur le bouton "ajouter une photo"
    modalToggle();

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

    // Quand on clique sur le bouton pour ouvrir la page d'upload d'image
    document.getElementById("js-btn-add").addEventListener("click", modalUpload);

    // Quand on clique sur le bouton pour ouvrir la page d'upload d'image
    /*document.getElementById("js-btn-add").addEventListener("click", () => {
        
        document.getElementById("divAdminGallery").classList.add("disabled");
        document.getElementById("js-btn-add").classList.add("disabled");
        document.getElementById("div-return-admin").classList.remove("disabled");


        const divAdmin = document.getElementById("div-admin");

        const uploadImg = document.createElement("div");
        uploadImg.setAttribute("id", "admin-div-upload");

        divAdmin.insertBefore(uploadImg, divAdmin.childNodes[6]);

        // Création du formulaire
        const formUpload = document.createElement("form");
        document.getElementById("admin-div-upload").appendChild(formUpload);
        formUpload.setAttribute("class", "form-upload");
        formUpload.setAttribute("enctype", "multipart/form-data");

        const divFile = document.createElement("div");
        divFile.setAttribute("id", "div-file-upload");
        document.querySelector("#admin-div-upload form").insertBefore(divFile, document.querySelector("#admin-div-upload form").childNodes[1]);

        // Création de l'input file
        const inputFile = document.createElement("input");
        inputFile.setAttribute("type", "file");
        inputFile.setAttribute("id", "file")
        inputFile.setAttribute("name", "file")
        divFile.appendChild(inputFile);

        // Création de l'input title
        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.setAttribute("id", "title");
        inputTitle.setAttribute("name", "title");
        document.querySelector("#admin-div-upload form").insertBefore(inputTitle, document.querySelector("#admin-div-upload form").childNodes[2]);

        // Création de l'input select pour les catégories
        const inputSelect = document.createElement("select");
        inputSelect.setAttribute("id", "categorie");
        inputSelect.setAttribute("name", "categorie");
        document.querySelector("#admin-div-upload form").insertBefore(inputSelect, document.querySelector("#admin-div-upload form").childNodes[3]);

        // Récupération des catégories + options du select
        for (let i = 0; i < categoriesData.length; i++) {

            const selectOption = document.createElement("option");
            selectOption.value = categoriesData[i].id;
            selectOption.setAttribute("id", `categorie-${categoriesData[i].id}`);
            selectOption.innerText = categoriesData[i].name;
            document.querySelector("#admin-div-upload form select").insertBefore(selectOption, document.querySelector("#admin-div-upload form select").childNodes[i]);

        }

        // Création du bouton envoyer
        const btnUpload = document.createElement("button");
        btnUpload.value = "Valider";
        btnUpload.id = "btnUpload"
        btnUpload.innerText = "Valider";
        btnUpload.classList.add("btn-upload");
        formUpload.appendChild(btnUpload);

        // Quand on sélectionne une photo à envoyer
        const newFile = document.getElementById("file");
        newFile.addEventListener("change", () => {

            const newImg = newFile.files[0]
            const previewPicture = document.createElement("img");
            document.querySelector("#div-file-upload").appendChild(previewPicture);

            const reader = new FileReader();
            
            reader.onload = (e) => {
                previewPicture.src = e.target.result;
            };

            reader.readAsDataURL(newImg);

            document.getElementById("file").classList.add("disabled");

        });

        
        // Quand on clique sur le bouton valider l'envoi
        btnUpload.addEventListener("click", (event) => {

            event.preventDefault();

            const uploadForm = document.querySelector("#admin-div-upload form");
            
            // Vérification si les champs input sont remplis
            
            const newTitle = document.getElementById("title");
            const newCategorie = document.getElementById("categorie");

            if(newTitle.value === "") {
                console.log("Entrez un titre");
                return;
            }
            if(newFile.value === "") {
                console.log("Ajoutez une photo pour que ça marche")
                return;
            }

            const newImg = newFile.files[0]
            document.getElementById("file").classList.remove("disabled");
            document.querySelector("#div-file-upload img").remove();


            let titleNew = document.getElementById("title").value;
            let categorieNew = document.getElementById("categorie").value;

            uploadForm.reset();
            uploadPicture(newImg, titleNew, categorieNew);

        });

    });*/

    // Quand on clique sur la flèche retour
    document.getElementById("div-return-admin").addEventListener("click", () => {

        document.getElementById("divAdminGallery").classList.remove("disabled");
        document.getElementById("div-return-admin").classList.add("disabled");
        document.getElementById("admin-div-upload").remove();
        document.getElementById("js-btn-add").classList.remove("disabled");

    });

    // Quand on clique sur l'icone poubelle
    const jsClickTrash = document.querySelectorAll(".admin-trash-img");

    for (let i = 0; i < jsClickTrash.length; i++) {

        jsClickTrash[i].addEventListener("click", () => {

            const jsIdImgTrash = jsClickTrash[i].getAttribute("data-id");
            const divId = document.getElementById("div-id-"+ jsIdImgTrash);
            divId.remove();
            
            removeContain(jsIdImgTrash);

        })

    }

    function removeContain(id) {

        fetch("http://localhost:5678/api/works/" + id, {
            method: "DELETE",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

    }


};

function uploadPicture (image, title, category) {

    const form = document.querySelector("form");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    for (let [name, value] of formData) {
        console.log(name);
        console.log(value);
    }

    fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    })

}