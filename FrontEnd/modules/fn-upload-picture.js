import {fetchWorks} from '/modules/fetch-works.js';
import {gallery} from '/modules/gallery.js';

export async function uploadPicture (image, title, category, token) {
   
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    await fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    })

    const nbimg = document.querySelectorAll(".imageGallery");
    for (let i = 0; i < nbimg.length; i++) {
        nbimg[i].remove();
        
    }

    const nbFigure = document.querySelectorAll(".figureGallery");
    for (let i = 0; i < nbFigure.length; i++) {
        nbFigure[i].remove();
        
    }

    await fetchWorks();

    async function fetchWorks () {
        
        const response = await fetch("http://localhost:5678/api/works", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();

        await gallery(data);
        console.log(data);

    }

}