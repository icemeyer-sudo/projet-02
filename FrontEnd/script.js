const response = await fetch("http://localhost:5678/api/works", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
});

const res = await response.json();

document.querySelector(".gallery").innerHTML = '';
import {gallery} from '/modules/gallery.js';

gallery(res);

const btnFilters = document.querySelectorAll("button");
    
for (let i = 0; i < btnFilters.length; i++) {

    btnFilters[i].addEventListener("click", async function () {
        
        const dataId = btnFilters[i].dataset.id;

        if(dataId == 0) {

            const resFilter = res;
            console.log(resFilter);
            document.querySelector(".gallery").innerHTML = '';
            gallery(resFilter);

        }
            
        
        else {
            
            const resFilter = res.filter(function (j) {
                
                return j.categoryId == dataId;

            });
            console.log(resFilter);
            document.querySelector(".gallery").innerHTML = '';
            gallery(resFilter);

        }

        

    });
  
};