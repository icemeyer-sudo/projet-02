// Récupère les catégories
export async function fetchCategories() {

    const categoriesResponse = await fetch("http://localhost:5678/api/categories", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    // Réponse du serveur
    if(categoriesResponse.ok) {

        const categoriesData = await categoriesResponse.json();
        return categoriesData;

    }else {

        alert("Echec de la récupération des catégories");

    }

}

// Récupère les works
export async function fetchWorks () {
    
    const worksResponse = await fetch("http://localhost:5678/api/works", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });

    if(worksResponse.ok) {

        const data = await worksResponse.json();
        return data;

    }else {

        alert("Echec de la récupération des works");

    }

}

// Supprimer un élément
export function fetchDelete(id, token) {

    fetch("http://localhost:5678/api/works/" + id, {
        method: "DELETE",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

}