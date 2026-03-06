const CATEGORIES_API_URL = "http://localhost:5678/api/categories/";

export function getCategories() {
    return fetch(CATEGORIES_API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => {
        if(response.status === 200) { 
            return response.json();
        }
    })
}