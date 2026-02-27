const WORKS_API_URL = "http://localhost:5678/api/works/";

export function postWork(work) {

    const token = window.localStorage.getItem("token");
    const headersPost = new Headers();
    headersPost.append('Authorization', `Bearer ${token}`);

    return fetch(WORKS_API_URL, {
        method: "POST",
        body: work,
        headers: headersPost 
    })
    .then((response) => {
        return handlePostResponse(response);
    })
}

function handlePostResponse(response) {
    if(response.status === 201) { 
        return response.json();
    }
    else if(response.status === 401) { // Si le token a expiré
        window.localStorage.removeItem("token");
        const msgError = document.getElementById("p-error");
        msgError.classList.remove("disabled");
        msgError.textContent = "Vous avez été déconnecté. Veuillez vous reconnecter.";
        throw new Error("Erreur d'authentification");
    }
    else {
        throw new Error("Une erreur s'est produite");
    }
}