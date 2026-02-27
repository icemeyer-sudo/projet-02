import {postWork} from '/modules/api/postWork.js';

export function handlePictureUpload (image, title, category) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    postWork(formData)
    .then((work) => {
        renderPictureInMainPage(work);
        renderPictureInadminGallery(work);
    })
    .catch((error) => {
        console.error(error);
    });
}

function renderPictureInMainPage(work) {
    const gallery = document.querySelector(".gallery");
    const figure = document.createElement("figure");
    figure.dataset.categoryId = work.categoryId;
    figure.classList.add("figureGallery", "active");
    figure.id = "figure-id-" + work.id;

    const img = document.createElement("img");
    img.src = work.imageUrl;
    img.alt = work.title;
    img.classList.add("imageGallery");
    img.id= "numeroId" + work.id;

    const figcaption = document.createElement("figcaption");
    figcaption.innerText = work.title;

    gallery.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
}

function renderPictureInadminGallery(work) {
    const gallery = document.getElementById("divAdminGallery");
    
    const container = document.createElement("div");
    container.classList.add("js-admin-div");
    container.setAttribute("div-id", work.id);
    gallery.appendChild(container);

    const img = document.createElement("img");
    img.src = work.imageUrl;
    img.alt = work.title;
    container.appendChild(img);

    const icon = document.createElement("p");
    icon.classList.add("admin-trash-img", "fa-solid", "fa-trash-can");
    icon.setAttribute("data-id", work.id);
    container.appendChild(icon);
}