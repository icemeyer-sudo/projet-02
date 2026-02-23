export function removeToken() {

    const aLogin = document.getElementById("a-login");

    console.log("test2")

    // Déconnexion
    aLogin.addEventListener("click", () => {

        console.log("test");
        window.localStorage.removeItem("token");

    });

}