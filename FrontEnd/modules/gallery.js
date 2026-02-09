export function gallery (data) {

    for (let i = 0; i < data.length; i++) {

        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");

        const img = document.createElement("img");
        img.src = data[i].imageUrl;
        img.setAttribute("id", "numeroId" + data[i].id)

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = data[i].title;

        gallery.appendChild(figure);
        figure.appendChild(img);
        figure.appendChild(figcaption);

    }

};