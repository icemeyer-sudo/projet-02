import {renderAdminGallery} from '/modules/admin/renderAdminGallery.js'
import {renderGallery} from '/modules/gallery/renderGallery.js'

const WORKS_API_URL = "http://localhost:5678/api/works/";
const token = window.localStorage.getItem("token");

export function getWorks() {

    fetch(WORKS_API_URL, {

        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((worksResponse) => {

        if(worksResponse.status === 200) { 

            return worksResponse.json();
        }
        else {

            throw new Error("Une erreur s'est produite");
        }
    })
    .then((works) => {

        renderGallery(works);

        if(token) { 
            
            renderAdminGallery(works);
        }
    })
    .catch((error) => {

        console.error(error);
    })

}