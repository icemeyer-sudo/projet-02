export function resetFormModal () {

    const file = document.getElementById("file");
    const label = document.querySelector(".label-upload");
    const img = document.querySelector("#div-file-upload img");
    const msgError = document.getElementById("p-error");

    // Fait réapparaitre l'input file
    if (file) {
        file.classList.remove("disabled");
        label.classList.remove("disabled");
    }

    // Supprime l'image en prévisualisation
    if (img) {
        img.remove();
    }

    // Supprime les anciens messages d'erreur
    msgError.classList.add("disabled");
    
    // Reset du formulaire
    document.querySelector(".form-upload").reset();

}