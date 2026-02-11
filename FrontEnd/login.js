// Page de login

const token = window.localStorage.getItem("token");

if (token) {
    console.log(token);
}

const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", async function (event) {

    event.preventDefault(); // Désactive le comportement du btn

    const inputEmail = document.getElementById("e-mail").value;
    const inputPassword = document.getElementById("password").value;

    // Identifiant déjà entré pour aller plus vite
    let user = {
        email: "sophie.bluel@test.tld",
        password: "S0phie"
    };

    /*let user = {
        email: inputEmail,
        password: inputPassword
    };*/

    const request = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { 
            "Content-Type": "application/json"
        }
        
    });

    if(request.ok) {

        const req = await request.json();

        const token = req.token;
        const userId = req.userId;

        window.localStorage.setItem("token", token);
        window.localStorage.setItem("userId", userId);

        window.location.href = "index.html";



    }else {

        console.log("Echec");

        const msgError = document.getElementById("p-error");

        console.log(msgError);

        msgError.classList.toggle("disabled");

    }
});

