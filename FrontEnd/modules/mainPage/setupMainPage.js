import {renderGallery} from '/modules/mainPage/gallery/renderGallery.js'
import {setupFilters} from '/modules/mainPage/gallery/setupFilters.js';

const token = window.localStorage.getItem("token");

export function setupMainPage(works, categories) {
    renderGallery(works);
    if(!token) {
        setupFilters(categories);
    }
}