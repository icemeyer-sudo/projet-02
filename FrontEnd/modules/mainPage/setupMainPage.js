import {renderGallery} from '/modules/mainPage/gallery/renderGallery.js'
import {setupFilters} from '/modules/mainPage/gallery/setupFilters.js';

export function setupMainPage(works, categories) {
    renderGallery(works);
    setupFilters(categories);
}