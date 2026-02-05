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
    aLogin.innerText = "Logout";

    aLogin.addEventListener("click", function () {

        window.localStorage.removeItem("token");

    });

}