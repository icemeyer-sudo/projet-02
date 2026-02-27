import {deleteWork} from '/modules/api/deleteWork.js';

export function setupDeleteWork() {

    const adminGallery = document.getElementById("divAdminGallery");
    adminGallery.addEventListener("click", (event) => {
        if(event.target.classList.contains("admin-trash-img")) {
            const workId = event.target.getAttribute("data-id");
            deleteWork(workId)
            .then(response => handleDeleteResponse(response, workId))
            .catch(error => console.error(error));
        }
    })
}

/***** INTERNAL FUNCTIONS *****/

function handleDeleteResponse(response, workId) {
    if(response.status === 204) {           
        removeWorkElement(workId);
    }
    else if(response.status === 401) { // Si le token a expiré
        window.localStorage.removeItem("token");
        renderErrorAuth();
        throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
    }
    else {
        throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
    }
}

function removeWorkElement(workId) {
    const workItemModal = document.querySelector('[div-id="' + workId + '"')
    const galleryFigure = document.getElementById("figure-id-" + workId);
    workItemModal.remove();
    galleryFigure.remove();
}

function renderErrorAuth() {
    const adminGallery = document.getElementById("div-admin");
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-container");
    const errorText = document.createElement("p");
    errorText.textContent = "Une erreur est survenue. Veuillez vous reconnecter.";

    adminGallery.insertBefore(errorContainer, adminGallery.firstChild);
    errorContainer.appendChild(errorText);
}