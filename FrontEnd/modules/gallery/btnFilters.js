import {gallery} from '/modules/gallery/index.js';

// On écoute les boutons de filtres
export function btnFilters (data) {
    
    const btnFilters = document.querySelectorAll(".btnFilters");
    for (let i = 0; i < btnFilters.length; i++) {

        btnFilters[i].addEventListener("click", function () {
            
            const dataId = btnFilters[i].dataset.id;

            // Si bouton filtrer tous
            if(dataId == 0) {

                const resFilter = data;
                document.querySelector(".gallery").innerHTML = '';
                gallery(resFilter);

            }  
                
            // Si bouton filtrer Objets, Appartements, Hotels
            else {
                
                const resFilter = data.filter(function (j) {
                    
                    return j.categoryId == dataId;

                });
                document.querySelector(".gallery").innerHTML = '';
                gallery(resFilter);

            }

        });
    
    };
}