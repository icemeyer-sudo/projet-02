export function setupAdminInterface() {

    updateNavToLogout()
    enableEditionMode()
    disableFilters()

}

function updateNavToLogout() {

    const logoutLink = document.getElementById("a-login");
    logoutLink.href= "";
    logoutLink.innerText = "logout";

}

function enableEditionMode() {

    const editionModeBanner = document.getElementById("div-edition-mode");
    const editLink = document.getElementById("span-admin-modif");
    editionModeBanner.classList.add("active");
    editLink.classList.add("active");

}

function disableFilters() {

    const filterPanel = document.getElementById("filters");
    filterPanel.classList.add("disabled");

}

