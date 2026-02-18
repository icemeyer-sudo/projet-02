export function removeToken() {

    const aLogin = document.getElementById("a-login");

    // Déconnexion
    aLogin.addEventListener("click", () => {

        window.localStorage.removeItem("token");

    });

}