export function setupLogout() {

    const logoutLink = document.getElementById("a-login");
    logoutLink.addEventListener("click", () => {

        window.localStorage.removeItem("token");

    });
}