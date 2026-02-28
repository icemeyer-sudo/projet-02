import {setupAdminInterface} from '/modules/admin/setupAdminInterface.js';
import {setupLogout} from '/modules/auth/setupLogout.js';
import {getWorks} from '/modules/api/getWorks.js';
import {getCategories} from '/modules/api/getCategories.js';
import {setupMainPage} from '/modules/mainPage/setupMainPage.js'
import {setupAdminModal} from '/modules/adminModal/setupAdminModal.js'

const token = window.localStorage.getItem("token");

Promise.all([
    getWorks(),
    getCategories()
])
.then(([worksResult, categoriesResult]) => {
    setupMainPage(worksResult, categoriesResult);
    if(token) { 
        setupAdminModal(worksResult, categoriesResult);
    }
})
.catch((error) => {
    handleErrorMessage(error);
})

if(token) { 
    setupLogout();
    setupAdminInterface();
};

function handleErrorMessage(error) {
    const errorElement = document.querySelector(".error-gallery");
    errorElement.classList.remove("disabled");
    errorElement.textContent = error;
    console.error(error);
}