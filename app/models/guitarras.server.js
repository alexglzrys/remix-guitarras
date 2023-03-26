// Remix
// Utiliza los modelos para especificar si las peticiones http se haran desde el server o desde el cliente
// El sufijo en el archivo le indica a Remix como deben ejecutarse estas consultas
// Este modelo solo se ejecutará en el servidor

export const getGuitarras = async() => {
    const request = await fetch(`${process.env.API_URL}/guitars?populate=imagen`);
    const response = request.json();
    return response;
}