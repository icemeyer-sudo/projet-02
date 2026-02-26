import {adminUpload} from '/modules/admin/adminUpload.js';
import {setupFilters} from '/modules/gallery/setupFilters.js';

const CATEGORIES_API_URL = "http://localhost:567/api/categories/";
const token = window.localStorage.getItem("token");

export function getCategories() {

    fetch(CATEGORIES_API_URL, {

        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((categoriesResponse) => {

        if(categoriesResponse.status === 200) {
        
            return categoriesResponse.json();
        }
        else {

            throw new Error("Une erreur s'est produite");
        }
    })
    .then((categories) => {

        setupFilters(categories);

        if(token) { 
            
            adminUpload(categories); 
        }
    })
    .catch(() => {

        console.error(error);
    })

}