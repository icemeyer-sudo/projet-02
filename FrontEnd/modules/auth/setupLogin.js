import {postLogin} from '/modules/api/postLogin.js';

export function setupLogin() {
    const loginButton = document.getElementById("btn-submit");
    loginButton.addEventListener("click", handleLoginClick);
}

function handleLoginClick(event) {
    event.preventDefault();
    const credentials = validForm();

    if(credentials) {
        postLogin(credentials)
        .then(handleLoginSuccess)
        .catch(handleLoginError);
    }
}

function handleLoginSuccess(loginResponse) {
    window.localStorage.setItem("token", loginResponse.token);
    window.location.href = "index.html";
}

function validForm() {
    const errorElement = document.getElementById("p-error");
    const emailInput = document.getElementById("e-mail").value;
    const passwordInput = document.getElementById("password").value;

    if(!emailInput || !passwordInput) {
        errorElement.textContent = "Veuillez compléter le formulaire";
        errorElement.classList.remove("disabled");
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
    const errorElement = document.getElementById("p-error");
    document.getElementById("e-mail").value = "";
    document.getElementById("password").value = "";

    if(error.type === "AUTH_ERROR") {
        errorElement.textContent = error.message;
    }
    else if(error.type === "SERVER_ERROR") {
        errorElement.textContent = error.message;
    }
    else {
        errorElement.textContent = "Impossible de se connecter au serveur";
    }

    errorElement.classList.remove("disabled");
}

// Identifiants
// email: "sophie.bluel@test.tld"
// password: "S0phie"