export async function fetchCategories() {

    const categoriesResponse = await fetch("http://localhost:5678/api/categories", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const categoriesData = await categoriesResponse.json();

    return categoriesData;

}