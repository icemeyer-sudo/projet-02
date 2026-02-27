const LOGIN_API_URL = "http://localhost:5678/api/users/login";

export function postLogin(user) {

    const credentials  = JSON.stringify(user);
    const requestHeaders  = new Headers();
    requestHeaders.append('Content-Type', 'application/json');

    return fetch(LOGIN_API_URL, {
        method: "POST",
        body: credentials ,
        headers: requestHeaders 
    })
    .then((response) => {
        return handlePostResponse(response);
    })
}

function handlePostResponse(response) {
    if(response.status === 200) {
        return response.json();
    }
    else if(response.status === 401 || response.status === 404) {
        throw { type: "AUTH_ERROR", message: "E-mail ou mot de passe incorrect" };
    }
    else {
        throw { type: "SERVER_ERROR", message: "Le serveur ne répond pas"};
    }
}