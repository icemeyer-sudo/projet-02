// Récupère les catégories
export async function fetchCategories() {

    try {

        const categoriesResponse = await fetch("http://localhost:5678/api/categories", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const categoriesData = await categoriesResponse.json();
        return categoriesData;
        
    } catch (error) {

        console.log(error);

    }

}

// Récupère les works
export async function fetchWorks () {
    
    try {

        const worksResponse = await fetch("http://localhost:5678/api/works", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const data = await worksResponse.json();
        return data;

    } catch (error) {

        console.log(error);
        let data = [];
        return data;

    }

}

// Supprime un élément
export function fetchDelete(id, token) {

    try {

        fetch("http://localhost:5678/api/works/" + id, {
            method: "DELETE",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

    } catch (error) {

        console.log(error);

    }

}

// Ajout un élément
export async function fetchPost(formData, token) {

    try {
        const postResponse = await fetch("http://localhost:5678/api/works", {
            method: "POST",
            body: formData,
            headers: { 
                'Authorization': `Bearer ${token}`
            }
        })

        return postResponse;

    } catch (error) {

        console.log(error);

    }

}