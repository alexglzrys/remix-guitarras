export const getPosts = async() => {
    const request = await fetch(`${process.env.API_URL}/blogs?populate=imagen`);
    const response = request.json();
    return response;
}

// Recuperar un post por su url (slug)
export const getPost = async(url) => {
    const request = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=imagen`);
    const response = request.json();
    return response;
}