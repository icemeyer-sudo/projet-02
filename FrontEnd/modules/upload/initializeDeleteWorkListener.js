const token = window.localStorage.getItem("token");
const API_URL = "http://localhost:5678/api/works/";

export function initializeDeleteWorkListener() {

    const adminGallery = document.getElementById("divAdminGallery");
    adminGallery.addEventListener("click", (event) => {

        if(event.target.classList.contains("admin-trash-img")) {

            const workId = event.target.getAttribute("data-id");
            deleteWorkFromAPI(workId);
        }
    })
}

function deleteWorkFromAPI(workId) {

    try {

        fetch(API_URL + workId, {
            method: "DELETE",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer token`
            }
        })
        .then(response => {

            console.log(response.status);
            if(response.status == 204) {
                
                removeWorkElement(workId);
            }
            else if(response.status == 401) {

                window.localStorage.removeItem("token");
                renderErrorAuth();
            }
            else {

                throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
            }
        });

    } catch (error) {

        console.log(error);
    }
}

function removeWorkElement(workId) {

    const workItemModal = document.getElementById("div-id-"+ workId);
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