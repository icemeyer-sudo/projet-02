import {setupAdminInterface} from '/modules/admin/setupAdminInterface.js';
import {setupLogout} from '/modules/auth/setupLogout.js';
import {listenFilters} from '/modules/gallery/listenFilters.js';
import {removeModal} from '/modules/modal/modalToggle.js';
import {getWorks} from '/modules/gallery/getWorks.js';
import {getCategories} from '/modules/gallery/getCategories.js';

const token = window.localStorage.getItem("token");

getWorks();
getCategories();
listenFilters();

if(token) { 

    setupAdminInterface() 
    setupLogout();
    removeModal();
};