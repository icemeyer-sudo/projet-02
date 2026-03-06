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
    if (response.status === 201) {
        return response.json();
    } else if (response.status === 401 || response.status === 404) {
        throw { type: "AUTH_ERROR", message: "Vous avez été déconnecté." };
    } else {
        throw { type: "SERVER_ERROR", message: "Le serveur ne répond pas" };
    }
}