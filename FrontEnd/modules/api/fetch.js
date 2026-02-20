const API_URL = "http://localhost:5678/api/";

// Récupère les works et les categories
export async function fetchGet(target) {

    try {

        const response = await fetch(API_URL + target, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {

            throw new Error(`Erreur API: ${response.status} ${response.statusText}`);

        }

        const data = await response.json();
        return data;
        
    } catch (error) {

        console.log(error);
        
    }

}

// Supprime un élément
export async function fetchDelete(id, token) {

    try {

        const response = await fetch(API_URL + "works/" + id, {
            method: "DELETE",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {

            throw new Error(`Erreur API: ${response.status} ${response.statusText}`);

        }

        return response;

    } catch (error) {

        console.log("error");

    }

}

// Ajout un élément ou identification
export async function fetchPost(data, token) {

    if(!token) {

        const dataPost = JSON.stringify(data);
        const headersPost = new Headers();
        headersPost.append('Content-Type', 'application/json');
        const targetPost = "users/login";
        
        return post(dataPost, headersPost, targetPost);

    } else {

        const dataPost = data;
        const headersPost = new Headers();
        headersPost.append('Authorization', `Bearer ${token}`);
        const targetPost = "works";

        return post(dataPost, headersPost, targetPost)

    }

    async function post(dataPost, headersPost, targetPost) {

        try {

            const response = await fetch(API_URL + targetPost, {
                method: "POST",
                body: dataPost,
                headers: headersPost
                
            })

            if (!response.ok) {

            throw new Error(`Erreur API: ${response.status} ${response.statusText}`);
            
        }

            return response;

        } catch (error) {

            console.log(error);

        }

    }

}