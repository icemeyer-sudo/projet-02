import {fetchPost} from '/modules/api/fetch.js';

// Si un utilisateur est déjà connecté, redirection index.html
if(window.localStorage.getItem("token")) {

    window.location.href = "index.html";

}

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", async function (event) {

    event.preventDefault(); // Désactive le comportement du btn

    if(!document.getElementById("e-mail").value ||!document.getElementById("password").value ) {

        const msgError = document.getElementById("p-error");
        msgError.textContent = "Veuillez compléter le formulaire";
        msgError.classList.remove("disabled");

    } else {

        const inputEmail = document.getElementById("e-mail").value;
        const inputPassword = document.getElementById("password").value;

        let user = {
            email: inputEmail,
            password: inputPassword
        };

        // Connexion au serveur
        const request = await fetchPost(user);;

        if(!request.ok) {

            const msgError = document.getElementById("p-error");
            const inputEmail = document.getElementById("e-mail");
            inputEmail.value = "";
            const inputPassword = document.getElementById("password");
            inputPassword.value = "";
            msgError.textContent = "Combinaison e-mail / mot de passe incorrect";
            msgError.classList.remove("disabled");

        }else {

            const req = await request.json();
            const token = req.token;
            
            window.localStorage.setItem("token", token);
            window.location.href = "index.html";

        }

    }
    

    // Identifiant déjà entré pour aller plus vite
    /*let user = {
        email: "sophie.bluel@test.tld",
        password: "S0phie"
    };*/

});