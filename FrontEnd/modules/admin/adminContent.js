export function adminContent() {

    // On modifie le nav pour afficher logout
    const aLogin = document.getElementById("a-login");
    document.getElementById("a-login").href="";
    aLogin.innerText = "logout";

    // On désactive les filtres, on fait apparaitre la bannière "mode édition" en haut et on fait apparaitre le lien "modifier"
    const divEditionMode = document.getElementById("div-edition-mode");
    divEditionMode.classList.toggle("disabled");
    const spanAdminModif = document.getElementById("span-admin-modif");
    spanAdminModif.classList.toggle("disabled");
    const divFilters = document.getElementById("filters");
    divFilters.classList.add("disabled");

};