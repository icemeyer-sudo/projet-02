import {renderGallery} from '/modules/gallery/renderGallery.js';
import {setupFilters} from '/modules/gallery/setupFilters.js';
import {fetchGet} from '/modules/api/fetch.js';
import {adminRun, setupAdminInterface} from '/modules/admin/index.js';
import {setupLogout} from '/modules/auth/index.js';
import {listenFilters} from '/modules/gallery/listenFilters.js';

const token = window.localStorage.getItem("token");

const works = await fetchGet("works");
const categories = await fetchGet("categories");

if(token) { 
    setupAdminInterface() 
    setupLogout();
    adminRun(works, categories, token);
};

renderGallery(works);
setupFilters(categories);
listenFilters();