export async function fetchWorks () {
    
    const response = await fetch("http://localhost:5678/api/works", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();

    return data;

}