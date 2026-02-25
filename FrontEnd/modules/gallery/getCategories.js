import {adminUpload} from '/modules/admin/adminUpload.js';
import {setupFilters} from '/modules/gallery/setupFilters.js';

const CATEGORIES_API_URL = "http://localhost:5678/api/categories/";
const token = window.localStorage.getItem("token");

export function getCategories() {

    fetch(CATEGORIES_API_URL, {

        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((categoriesResponse) => {

        return categoriesResponse.json();
    })
    .then((categories) => {

        setupFilters(categories);

        if(token) { 
            
            adminUpload(categories); 
        }
    })
    .catch(() => {

    })

}