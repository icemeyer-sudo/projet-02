import {setupLogin} from '/modules/auth/setupLogin.js';
import {setupLogout} from '/modules/auth/setupLogout.js';

if(window.localStorage.getItem("token")) {

    setupLogout();
    disabledForm();
    window.location.href = "index.html";
}
else {
    setupLogin();
}

function disabledForm() {
    const form = document.querySelector('.form-login');
    form.remove();
}