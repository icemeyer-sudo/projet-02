import {fetchPost} from '/modules/api/fetch.js';

// Si un utilisateur est déjà connecté, redirection index.html
if(window.localStorage.getItem("token")) {

    window.location.href = "index.html";
}

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", async function (event) {

    const inputEmail = document.getElementById("e-mail").value;
    const inputPassword = document.getElementById("password").value;

    event.preventDefault(); // Désactive le comportement du btn

    if(!inputEmail ||!inputPassword ) {

        const msgError = document.getElementById("p-error");
        msgError.textContent = "Veuillez compléter le formulaire";
        msgError.classList.remove("disabled");

    } else {

        /*let user = {
            email: inputEmail,
            password: inputPassword
        };*/

        let user = {
            email: "sophie.bluel@test.tld",
            password: "S0phie"
        };

        // Connexion au serveur
        const request = await fetchPost(user);

        if(request) {

            if(request.status == 404) {

                const msgError = document.getElementById("p-error");
                document.getElementById("e-mail").value = "";
                document.getElementById("password").value = "";
                msgError.textContent = "Combinaison e-mail / mot de passe incorrect";
                msgError.classList.remove("disabled");

            }
            
            if(request.status == 200) {

                const req = await request.json();
                const token = req.token;
                
                window.localStorage.setItem("token", token);
                window.location.href = "index.html";

            }

        }else {

            const msgError = document.getElementById("p-error");
            msgError.textContent = "Erreur de connexion au serveur";
            msgError.classList.remove("disabled");

        }

    }

});

// Identifiants
// email: "sophie.bluel@test.tld"
// password: "S0phie"