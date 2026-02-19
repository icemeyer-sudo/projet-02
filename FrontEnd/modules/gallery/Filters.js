import {gallery} from '/modules/gallery/index.js';

// Création des boutons de filtres
export function filters(dataWorks, dataCategories) {

    const divFilters = document.getElementById("filters");

    // Création du bouton filtre "Tous"
    const btnFiltersAll = document.createElement("button");
    btnFiltersAll.classList.add("btnFilters");
    btnFiltersAll.setAttribute("name", "Tous");
    btnFiltersAll.setAttribute("data-id", "0");
    btnFiltersAll.textContent = "Tous";
    divFilters.appendChild(btnFiltersAll);

    // Création d'autant de boutons qu'il n'y a de catégories
    dataCategories.forEach((e) => {

        const btnFilters = document.createElement("button");
        btnFilters.classList.add("btnFilters");
        btnFilters.setAttribute("name", e.name);
        btnFilters.setAttribute("data-id", e.id);
        btnFilters.textContent = e.name;
        divFilters.appendChild(btnFilters);

    })

    eventFilters(dataWorks);    

}

// On écoute les boutons de filtres
function eventFilters (data) {
    
    const btnFilters = document.querySelectorAll(".btnFilters");
    btnFilters.forEach((e) => {

        e.addEventListener("click", () => {

            const dataId = e.dataset.id;

            // Si bouton filtrer tous
            if(dataId == 0) {

                gallery(data, true);

            }  
                
            // Si bouton filtrer Objets, Appartements, Hotels
            else {
                
                const resultFilter = data.filter((j) => {
                    
                    return j.categoryId == dataId;

                });
                gallery(resultFilter, true);

            }

        })

    })
}