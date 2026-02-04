export function gallery (res) {

    for (let i = 0; i < res.length; i++) {

        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = res[i].imageUrl;

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = res[i].title;

        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

    }

};