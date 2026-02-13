export function modalUpload(categoriesData, token) {

    const modalGallery = document.querySelector("#div-admin");
    const modalUpload = document.querySelector("#div-admin-upload");

    modalGallery.classList.toggle("active");
    modalUpload.classList.toggle("active");

    for (let i = 0; i < categoriesData.length; i++) {

        const selectOption = document.createElement("option");
        selectOption.value = categoriesData[i].id;
        selectOption.setAttribute("id", `categorie-${categoriesData[i].id}`);
        selectOption.innerText = categoriesData[i].name;
        document.querySelector("#categorie").insertBefore(selectOption, document.querySelector("#categorie").childNodes[i]);

    }

    const newFile = document.getElementById("file");
    newFile.addEventListener("change", () => {

        const newImg = newFile.files[0]
        const previewPicture = document.createElement("img");
        document.querySelector("#div-file-upload").appendChild(previewPicture);

        const reader = new FileReader();
        
        reader.onload = (e) => {
            previewPicture.src = e.target.result;
        };

        reader.readAsDataURL(newImg);

        document.getElementById("file").classList.add("disabled");

    });

    const btnUpload = document.getElementById("valider");
    btnUpload.addEventListener("click", (event) => {

        event.preventDefault();

        const uploadForm = document.querySelector(".form-upload");
        
        // Vérification si les champs input sont remplis
        
        const newTitle = document.getElementById("title");
        const newCategorie = document.getElementById("categorie");

        if(newTitle.value === "") {
            console.log("Entrez un titre");
            return;
        }
        if(newFile.value === "") {
            console.log("Ajoutez une photo pour que ça marche")
            return;
        }

        const newImg = newFile.files[0]
        document.getElementById("file").classList.remove("disabled");
        document.querySelector("#div-file-upload img").remove();


        let titleNew = document.getElementById("title").value;
        let categorieNew = document.getElementById("categorie").value;

        uploadForm.reset();
        uploadPicture(newImg, titleNew, categorieNew);

    });

    function uploadPicture (image, title, category) {

    const form = document.querySelector("form");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("image", image);

    for (let [name, value] of formData) {
        console.log(name);
        console.log(value);
    }

    fetch("http://localhost:5678/api/works", {
        method: "POST",
        body: formData,
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    })

}

}