// Reset du formulaire
export function resetForm () {

    const file = document.getElementById("file");
    const img = document.querySelector("#div-file-upload img");
    if (file) {
        // Fait réapparaitre l'input file
        file.classList.remove("disabled");
    }
    if (img) {
        // Supprime l'image en prévisualisation
    img.remove();
    }
    
    // Reset du formulaire
    document.querySelector(".form-upload").reset();

}