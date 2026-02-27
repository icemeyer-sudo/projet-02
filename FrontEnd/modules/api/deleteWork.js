const WORKS_API_URL = "http://localhost:5678/api/works/";
const token = window.localStorage.getItem("token");

export function deleteWork(workId) {
    return fetch(WORKS_API_URL + workId, {
        method: "DELETE",
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
}