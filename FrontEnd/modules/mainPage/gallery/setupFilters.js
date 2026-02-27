import {listenFilters} from '/modules/mainPage/gallery/listenFilters.js';

export function setupFilters(categories) {

    const filtersContainer = document.getElementById("filters");

    createFilterButton(filtersContainer, "Tous", 0);
    categories.forEach((category) => {

        createFilterButton(filtersContainer, category.name, category.id);

    })

    listenFilters();
}

function createFilterButton(container, name, id) {

    const button = document.createElement("button");
    button.classList.add("btnFilters");
    button.setAttribute("name", name);
    button.dataset.id = id;
    button.textContent = name;
    container.appendChild(button);
}