import { useLoaderData } from "@remix-run/react";
import Guitarra from "../components/Guitarra";
import { getGuitarras } from "../models/guitarras.server"

// Consumir datos
// (mismo enfoque que el API de React Router Dom 6.4 y sus loaders)
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
} 

export const meta = () => ({
    title: 'GuitarLA - Tienda'
})

const Tienda = () => {
  // Recuperar el resultado de la petición http (loadoer)
  const guitarras = useLoaderData();
  console.log(guitarras)
  return (
    <div className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>
        {guitarras.length && (
          <div className="guitarras-grid">
            {guitarras.map((guitarra) => <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />)}
          </div>
        )}
    </div>
  )
}

export default Tienda