import {setupAdminGallery} from '/modules/adminModal/adminGallery/setupAdminGallery.js';
import {setupAdminFormUpload} from '/modules/adminModal/adminFormUpload/setupAdminFormUpload.js';
import {setupAdminFormUploadModalTrigger} from '/modules/adminModal/adminFormUpload/setupAdminFormUploadModalTrigger.js';

import {setupAdminModalClose} from '/modules/adminModal/setupAdminModalClose.js';

export function setupAdminModal(works, categories) {
    setupAdminGallery(works);

    setupAdminFormUpload(categories); 
    setupAdminFormUploadModalTrigger();

    setupAdminModalClose();
}