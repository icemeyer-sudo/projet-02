import {loginUser} from '/modules/auth/loginUser.js';

export function setupLogin() {

    const loginButton = document.getElementById("btn-submit");
    loginButton.addEventListener("click", (event) => {

        event.preventDefault();
        const errorMessage = document.getElementById("p-error");
        const emailInput = document.getElementById("e-mail").value;
        const passwordInput = document.getElementById("password").value;

        if(!emailInput || !passwordInput) {

            errorMessage.textContent = "Veuillez compléter le formulaire";
            errorMessage.classList.remove("disabled");
        } else {

            const user = {
                email: emailInput,
                password: passwordInput
            };

            loginUser(user);
        }
    });
}

// Identifiants
// email: "sophie.bluel@test.tld"
// password: "S0phie"