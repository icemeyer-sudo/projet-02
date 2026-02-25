import {renderModalGallery} from '/modules/admin/renderModalGallery.js'
import {renderGallery} from '/modules/gallery/renderGallery.js'

const WORKS_API_URL = "http://localhost:5678/api/works/";
const token = window.localStorage.getItem("token");

export function getWorks() {

    fetch(WORKS_API_URL, {

        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((worksResponse) => {

        return worksResponse.json();
    })
    .then((works) => {

        renderGallery(works);

        if(token) { 
            
            renderModalGallery(works);
        }
    })
    .catch(() => {

    })

}