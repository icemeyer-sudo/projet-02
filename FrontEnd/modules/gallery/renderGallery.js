export function renderGallery (works) {

    const galleryElement = document.querySelector(".gallery");

    works.forEach((work) => {

        const figure = document.createElement("figure");
        figure.classList.add("figureGallery", "active");
        figure.setAttribute("id", "figure-id-" + work.id);
        figure.dataset.categoryId = work.category.id;

        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.setAttribute("id", "numeroId" + work.id)
        img.classList.add("imageGallery");
        img.setAttribute("alt", work.title);

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = work.title;

        galleryElement.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

    })

};