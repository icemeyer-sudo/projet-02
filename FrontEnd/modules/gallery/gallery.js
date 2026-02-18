export function gallery (data) {

    for (let i = 0; i < data.length; i++) {

        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        figure.setAttribute("class", "figureGallery");
        figure.setAttribute("id", "figure-id-" + data[i].id);

        const img = document.createElement("img");
        img.src = data[i].imageUrl;
        img.setAttribute("id", "numeroId" + data[i].id)
        img.setAttribute("class", "imageGallery");

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = data[i].title;

        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

    }

};