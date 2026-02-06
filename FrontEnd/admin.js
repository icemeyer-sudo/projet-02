const aLogin = document.getElementById("a-login");
document.getElementById("a-login").href="";
aLogin.innerText = "";
aLogin.innerText = "logout";

aLogin.addEventListener("click", function () {

    window.localStorage.removeItem("token");

});