import {setupAdminInterface} from '/modules/admin/setupAdminInterface.js';
import {setupLogout} from '/modules/auth/setupLogout.js';
import {setupAdminModalClose} from '/modules/modal/setupAdminModalClose.js';
import {getWorks} from '/modules/api/getWorks.js';
import {getCategories} from '/modules/api/getCategories.js';

const token = window.localStorage.getItem("token");

getWorks();
getCategories();

if(token) { 

    setupLogout();
    setupAdminInterface();
    setupAdminModalClose();
};