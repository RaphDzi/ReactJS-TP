export const API_BASE = "https://dummyjson.com/quotes/random";

export async function fetchPost(id) {
    const res = await fetch(`${API_BASE}/posts/${id}`);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}



export async function fetchGet() {
    const res = await fetch(`${API_BASE}/`);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}

