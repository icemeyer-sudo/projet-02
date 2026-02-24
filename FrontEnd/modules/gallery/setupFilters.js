export function setupFilters(categories) {

    const filtersContainer = document.getElementById("filters");

    createFilterButton(filtersContainer, "Tous", 0);
    categories.forEach((category) => {

        createFilterButton(filtersContainer, category.name, category.id);

    })

}

function createFilterButton(container, name, id) {

    const button = document.createElement("button");
    button.classList.add("btnFilters");
    button.setAttribute("name", name);
    button.setAttribute("data-id", id);
    button.textContent = name;
    container.appendChild(button);

}