export const getCurso = async() => {
    const request = await fetch(`${process.env.API_URL}/curso?populate=portada`);
    const response = request.json();
    return response;
}