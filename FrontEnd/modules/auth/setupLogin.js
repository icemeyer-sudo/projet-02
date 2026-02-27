import {postLogin} from '/modules/api/postLogin.js';

export function setupLogin() {

    const errorMessage = document.getElementById("p-error");
    const loginButton = document.getElementById("btn-submit");
    loginButton.addEventListener("click", (event) => {

        event.preventDefault();
        const credentials = validForm();
        if(credentials) {
            postLogin(credentials)
            .then((loginResponse) => {
                window.localStorage.setItem("token", loginResponse.token);
                window.location.href = "index.html";
            })
            .catch((error) => {
                handleLoginError(error);
            })
        }
    });
}

function validForm() {
    const errorMessage = document.getElementById("p-error");
    const emailInput = document.getElementById("e-mail").value;
    const passwordInput = document.getElementById("password").value;

    if(!emailInput || !passwordInput) {
        errorMessage.textContent = "Veuillez compléter le formulaire";
        errorMessage.classList.remove("disabled");
        return false;
    } 
    else {
        const credentials = {
            email: emailInput,
            password: passwordInput
        };
        return credentials;
    }
}

function handleLoginError(error) {
    const errorMessage = document.getElementById("p-error");
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
}

// Identifiants
// email: "sophie.bluel@test.tld"
// password: "S0phie"