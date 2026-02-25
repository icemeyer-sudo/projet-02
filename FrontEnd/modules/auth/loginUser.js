const LOGIN_API_URL = "http://localhost:5678/api/users/login";

export function loginUser(user) {

    setLoadingButton(true);

    const errorMessage = document.getElementById("p-error");
    const credentials  = JSON.stringify(user);
    const requestHeaders  = new Headers();
    requestHeaders.append('Content-Type', 'application/json');

    fetch(LOGIN_API_URL, {
        method: "POST",
        body: credentials ,
        headers: requestHeaders 
        
    })
    .then((response) => {

        if(response.status === 200) {

            return response.json();
        }
        else if(response.status === 401 || response.status === 404) {

            throw { type: "AUTH_ERROR", message: "E-mail ou mot de passe incorrect" };
        }
        else {
            throw { type: "SERVER_ERROR", message: "Le serveur ne répond pas"};
        }
    })
    .then((loginResponse) => {

        window.localStorage.setItem("token", loginResponse.token);
        window.location.href = "index.html";
    })
    .catch((error) => {

        document.getElementById("e-mail").value = "";
        document.getElementById("password").value = "";

        if(error.type === "AUTH_ERROR") {

            errorMessage.textContent = error.message;
        }
        else if(error.type === "SERVER_ERROR") {

            errorMessage.textContent = error.message;
        }
        else {

            errorMessage.textContent = "Impossible de se connecter au serveur";
        }

        errorMessage.classList.remove("disabled");
    })
    .finally(() => {

        setLoadingButton(false);
    })
}

function setLoadingButton(isLoading) {

    if(isLoading === true) {

        const loginButton = document.getElementById("btn-submit");
        loginButton.value = "Connexion en cours";
    }
    else {

        const loginButton = document.getElementById("btn-submit");
        loginButton.value = "Se connecter";
    }
}