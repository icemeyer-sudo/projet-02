import {handlePictureUpload} from '/modules/adminModal/adminFormUpload/handlePictureUpload.js';
import {resetFormModal} from '/modules/adminModal/resetFormModal.js';

export function setupAdminFormUpload(categories) {
    renderSelectOptions(categories);
    setupFileChangeListener();
    setupPostForm();
}

/***** INTERNAL FUNCTIONS *****/

function renderSelectOptions(categories) {
    categories.forEach((category) => {
        const selectOption = document.createElement("option");
        selectOption.value = category.id;
        selectOption.setAttribute("id", `categorie-${category.id}`);
        selectOption.innerText = category.name;
        document.querySelector("#categorie").insertBefore(selectOption, document.querySelector("#categorie").childNodes[category.id]);
    });
}

function setupFileChangeListener() {
    const file = document.getElementById("file");
    const msgError = document.getElementById("p-error");
    msgError.classList.add("disabled");

    file.addEventListener("change", () => {

        const newImg = file.files[0];

        const validation = validFile(newImg);
        if(!validation.valid) {
            handleFileError(validation);
            return;
        }
        else {
            renderPreviewPicture(newImg);
        }
    });
}

function setupPostForm() {
    const btnUpload = document.getElementById("valider");
    btnUpload.addEventListener("click", (event) => {

        event.preventDefault();

        const valid = validForm(file);

        if(valid) {
            const img = file.files[0]
            let title = document.getElementById("title").value;
            let categorie = document.getElementById("categorie").value;

            handlePictureUpload(img, title, categorie);
            resetFormModal();
        }
    });
}

function handleFileError(errorObj) {
    const msgError = document.getElementById("p-error");
    msgError.classList.remove("disabled");
    msgError.textContent = errorObj.message;
    document.querySelector("#file").value = "";
}

function renderPreviewPicture(img) {
    const previewPicture = document.createElement("img");
    previewPicture.setAttribute("id", "preview-picture")
    document.querySelector("#div-file-upload").appendChild(previewPicture);

    const reader = new FileReader();
    reader.readAsDataURL(img);   
    
    reader.addEventListener("load", () => {
        previewPicture.src = reader.result;
    });

    // L'input file est caché
    document.getElementById("file").classList.add("disabled");
    document.querySelector(".label-upload").classList.add("disabled");
}

function validForm() {
    const title = document.getElementById("title");
    const file = document.getElementById("file");
    const msgError = document.getElementById("p-error");

    if(title.value === "") {
        msgError.classList.remove("disabled");
        msgError.textContent = "Veuillez entrer un titre";
        return false;
    }
    if(file.value === "") {
        msgError.classList.remove("disabled");
        msgError.textContent = "Ajoutez un fichier";
        return false;
    }
    else {
        return true;
    }
}

function validFile(file) {
    const MAX_SIZE = 4*1024*1024;

    if(file.size > MAX_SIZE) {
        return { valid: false, message: "Fichier trop volumineux" };
    }
    if(file.type != "image/jpeg" && file.type != "image/png") {
        return { valid: false, message: "Mauvais type de fichier" };
    }
    return { valid: true };
}