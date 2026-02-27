const WORKS_API_URL = "http://localhost:5678/api/works/";

export function getWorks() {
    return fetch(WORKS_API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    .then((response) => {
        return handlePostResponse(response);
    })
}

function handlePostResponse(response) {
    if(response.status === 200) { 
        return response.json();
    }
    else {
        throw new Error("Une erreur s'est produite");
    }
}