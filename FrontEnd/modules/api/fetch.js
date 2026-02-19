// Récupère les works et les categories
export async function fetchGet(target) {

    try {

        const response = await fetch("http://localhost:5678/api/" + target, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const Data = await response.json();
        return Data;
        
    } catch (error) {

        console.log(error);

        if(target === "works") {

            let data = [];
            return data;

        }

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

// Ajout un élément ou identification
export function fetchPost(data, token) {

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

    function post(dataPost, headersPost, targetPost) {

        try {

            const postResponse = fetch("http://localhost:5678/api/" + targetPost, {
                method: "POST",
                body: dataPost,
                headers: headersPost
                
            })

            return postResponse;

        } catch (error) {

            console.log(error);

        }

    }

}

/* 'Authorization': `Bearer ${token}` */

/*const request = await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { 
                "Content-Type": "application/json"
            }
            
        });*/