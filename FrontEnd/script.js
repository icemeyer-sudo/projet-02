const token = window.localStorage.getItem("token");

console.log(token);

const response = await fetch("http://localhost:5678/api/works", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
});

const data = await response.json();

document.querySelector(".gallery").innerHTML = '';
import {gallery} from '/modules/gallery.js';

gallery(data);

const btnFilters = document.querySelectorAll("button");
    
for (let i = 0; i < btnFilters.length; i++) {

    btnFilters[i].addEventListener("click", async function () {
        
        const dataId = btnFilters[i].dataset.id;

        if(dataId == 0) {

            const resFilter = data;
            console.log(resFilter);
            document.querySelector(".gallery").innerHTML = '';
            gallery(resFilter);

        }
            
        
        else {
            
            const resFilter = data.filter(function (j) {
                
                return j.categoryId == dataId;

            });
            console.log(resFilter);
            document.querySelector(".gallery").innerHTML = '';
            gallery(resFilter);

        }

        

    });
  
};

if(token) {

    const aLogin = document.getElementById("a-login");
    document.getElementById("a-login").href="";
    aLogin.innerText = "";
    aLogin.innerText = "logout";

    const divEditionMode = document.getElementById("div-edition-mode");
    divEditionMode.classList.toggle("disabled");

    const spanAdminModif = document.getElementById("span-admin-modif");
    spanAdminModif.classList.toggle("disabled");

    const divFilters = document.getElementById("filters");
    divFilters.classList.add("disabled");

    function addAdmin() {
        
        const divAdmin = document.getElementById("div-admin");
        divAdmin.classList.remove("disabled");

        const bgBrightness = document.getElementById("super-container");
        bgBrightness.classList.add("brightness");
        console.log(bgBrightness);

    };
          
    function removeAdmin() {

        document.addEventListener("click", (event) => {

            const divAdmin = document.getElementById("div-admin");
            const bgBrightness = document.getElementById("super-container");
            const spanAdminModif = document.getElementById("span-admin-modif");
            const crossAdmin = document.getElementById("div-close-admin");

            if((!divAdmin.contains(event.target) && !spanAdminModif.contains(event.target)) || crossAdmin.contains(event.target)) {

                divAdmin.classList.add("disabled");
                bgBrightness.classList.remove("brightness");

            }

        });

    };

    spanAdminModif.addEventListener("click", addAdmin);

    removeAdmin();

    // Déconnexion
    aLogin.addEventListener("click", function () {

        window.localStorage.removeItem("token");

    });

    for (let i = 0; i < data.length; i++) {

        const adminGallery = document.querySelector(".div-admin-gallery");

        const img = document.createElement("img");
        img.src = data[i].imageUrl;

        adminGallery.appendChild(img);

    }

};