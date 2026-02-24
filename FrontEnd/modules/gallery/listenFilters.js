export function listenFilters () {

    const filtersContainer = document.getElementById("filters");

    filtersContainer.addEventListener("click", (event) => {
        const categoryId = event.target.getAttribute("data-id");
        if(categoryId) {

            filterGalleryByCategory(categoryId);
        }
    });
}

function filterGalleryByCategory(categoryId) {

    const figuresGallery = document.querySelectorAll(".figureGallery");
    figuresGallery.forEach((figure) => {

        if(categoryId === "0") {

            figure.classList.add("active");
            return;
        }
        if(figure.dataset.categoryId == categoryId) {

            figure.classList.add("active");
        }
        else {

            figure.classList.remove("active");
        }
    });
}