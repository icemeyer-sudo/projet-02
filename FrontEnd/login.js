import {setupLogin} from '/modules/auth/setupLogin.js';

if(window.localStorage.getItem("token")) {

    window.location.href = "index.html";
}

setupLogin();