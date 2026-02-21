import {uploadPicture} from '/modules/upload/uploadPicture.js';
import {resetForm, openAdminUpload} from '/modules/modal/index.js';

export function adminUpload(token, data, categoriesData) {

    // Chargement de la modale adminUpload au clic
    openAdminUpload();
    
    // Création des catégories dans le select du menu d'ajout de photo
    categoriesData.forEach((e) => {

        const selectOption = document.createElement("option");
        selectOption.value = e.id;
        selectOption.setAttribute("id", `categorie-${e.id}`);
        selectOption.innerText = e.name;
        document.querySelector("#categorie").insertBefore(selectOption, document.querySelector("#categorie").childNodes[e.id]);

    });

    // Prévisualisation et vérification
    const newFile = document.getElementById("file");
    const msgError = document.getElementById("p-error");
    msgError.classList.add("disabled");
    newFile.addEventListener("change", () => {

        // Supprime la preview précédente si changement de fichier chargé
        if(document.getElementById("preview-picture")) {

            document.getElementById("preview-picture").remove();

        }

        const newImg = newFile.files[0];

        // Vérification de taille et d'extension
        if(validFile(newImg) == false) {

            return;

        } else {
            
            msgError.classList.add("disabled");

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
            document.querySelector(".label-upload").classList.add("disabled");
            
        }

    });

    // Action du bouton valider
    const btnUpload = document.getElementById("valider");
    btnUpload.addEventListener("click", (event) => {

        event.preventDefault();
        
        // Vérification si les champs input sont remplis
        const newTitle = document.getElementById("title");

        if(newTitle.value === "") {
            msgError.classList.remove("disabled");
            msgError.textContent = "Veuillez entrer un titre";
            return;
        }
        if(newFile.value === "") {
            msgError.classList.remove("disabled");
            msgError.textContent = "Ajoutez un fichier";
            return;
        }

        // Données à envoyer + fonction uploadPicture
        const newImg = newFile.files[0]
        let titleNew = document.getElementById("title").value;
        let categorieNew = document.getElementById("categorie").value;

        uploadPicture(newImg, titleNew, categorieNew, token, data);

        resetForm();

    });

}

// Vérification de taille et d'extension
function validFile(file) {

    const msgError = document.getElementById("p-error");

    // Si l'image est plus grosse que 4Mo
    if(file.size > 4194304) {

        msgError.classList.remove("disabled");
        msgError.textContent = "Fichier trop volumineux";

        document.querySelector("#file").value = "";
        return false;
    }

    // Si l'image n'est pas au bon format
    if(file.type != "image/jpeg" && file.type != "image/png") {

        msgError.classList.remove("disabled");
        msgError.textContent = "Mauvais type de fichier";

        document.querySelector("#file").value = "";
        return false;

    }

}