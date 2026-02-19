export function gallery (data, reset) {

    if(reset === true) {

        const galleryRemove = document.querySelector(".gallery");
        galleryRemove.remove();
        const galleryCreate = document.createElement("div");
        galleryCreate.classList.add("gallery");
        const portfolio = document.getElementById("portfolio");
        portfolio.appendChild(galleryCreate);

    }

    data.forEach((e) => {

        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        figure.setAttribute("class", "figureGallery");
        figure.setAttribute("id", "figure-id-" + e.id);

        const img = document.createElement("img");
        img.src = e.imageUrl;
        img.setAttribute("id", "numeroId" + e.id)
        img.setAttribute("class", "imageGallery");
        img.setAttribute("alt", e.title);

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = e.title;

        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

    })

};