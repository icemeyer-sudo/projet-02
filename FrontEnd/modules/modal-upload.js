import {uploadPicture} from '/modules/fn-upload-picture.js';
import {returnToAdmin} from '/modules/fn-return-to-admin.js';

export function modalUpload(categoriesData, token, data) {

    // Affichage de la page
    const modalGallery = document.querySelector("#div-admin");
    const modalUpload = document.querySelector("#div-admin-upload");

    modalGallery.classList.remove("active");
    modalUpload.classList.add("active");

    // Importation des catégories
    for (let i = 0; i < categoriesData.length; i++) {

        const selectOption = document.createElement("option");
        selectOption.value = categoriesData[i].id;
        selectOption.setAttribute("id", `categorie-${categoriesData[i].id}`);
        selectOption.innerText = categoriesData[i].name;
        document.querySelector("#categorie").insertBefore(selectOption, document.querySelector("#categorie").childNodes[i]);

    }

    // Prévisualisation
    const newFile = document.getElementById("file");
    newFile.addEventListener("change", () => {

        // Supprime la preview précédente si changement de fichier chargé
        if(document.getElementById("preview-picture")) {

            document.getElementById("preview-picture").remove();

        }

        const newImg = newFile.files[0];
        const previewPicture = document.createElement("img");
        previewPicture.setAttribute("id", "preview-picture")
        document.querySelector("#div-file-upload").appendChild(previewPicture);

        const reader = new FileReader();
        reader.readAsDataURL(newImg);   
        
        reader.addEventListener("load", () => {

            previewPicture.src = reader.result;

        });

        document.getElementById("file").classList.add("disabled");

    });

    // Action du bouton valider
    const btnUpload = document.getElementById("valider");
    btnUpload.addEventListener("click", (event) => {

        event.preventDefault();
        
        // Vérification si les champs input sont remplis
        const newTitle = document.getElementById("title");

        if(newTitle.value === "") {
            console.log("Entrez un titre");
            return;
        }
        if(newFile.value === "") {
            console.log("Ajoutez une photo pour que ça marche")
            return;
        }

        // Données à envoyer + fonction uploadPicture
        const newImg = newFile.files[0]
        let titleNew = document.getElementById("title").value;
        let categorieNew = document.getElementById("categorie").value;
        uploadPicture(newImg, titleNew, categorieNew, token, data);

        // Reset du formulaire
        document.getElementById("file").classList.remove("disabled");
        document.querySelector("#div-file-upload img").remove();
        document.querySelector(".form-upload").reset();

    });
    
    // Flèche de retour au menu précédent
    returnToAdmin();

}