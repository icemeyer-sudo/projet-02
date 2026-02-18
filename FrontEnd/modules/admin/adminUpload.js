import {uploadPicture} from '/modules/upload/uploadPicture.js';
import {modalBack, resetForm, toggleAdminUpload} from '/modules/modal/index.js';

export function adminUpload(token, data, categoriesData) {

    // Chargement de la modale adminUpload au clic
    toggleAdminUpload();
    
    // Création des catégories dans le select du menu d'ajout de photo
    categoriesData.forEach((e) => {
        const selectOption = document.createElement("option");
        selectOption.value = e.id;
        selectOption.setAttribute("id", `categorie-${e.id}`);
        selectOption.innerText = e.name;
        document.querySelector("#categorie").insertBefore(selectOption, document.querySelector("#categorie").childNodes[e.id]);
    });

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

        // L'input file disparait
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

        resetForm();

    });
    
    // Flèche de retour vers le menu précédent
    modalBack();



}