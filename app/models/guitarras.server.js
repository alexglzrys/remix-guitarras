// Remix
// Utiliza los modelos para especificar si las peticiones http se haran desde el server o desde el cliente
// El sufijo en el archivo le indica a Remix como deben ejecutarse estas consultas
// Este modelo solo se ejecutará en el servidor

export const getGuitarras = async() => {
    const request = await fetch(`${process.env.API_URL}/guitars?populate=imagen`);
    const response = request.json();
    return response;
}

// Buscar guitarra por slug
export const getGuitarra = async(url) => {
    // Filtrar la busqueda por el campo url (en este caso es el slug del producto)
    const request = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=imagen`);
    const response = await request.json();
    return response;
}