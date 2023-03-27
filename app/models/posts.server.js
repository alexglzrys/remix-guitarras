export const getPosts = async() => {
    const request = await fetch(`${process.env.API_URL}/blogs?populate=imagen`);
    const response = request.json();
    return response;
}