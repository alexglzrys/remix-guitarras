import { useLoaderData } from '@remix-run/react';
import React from 'react'
import { getGuitarra } from '../../models/guitarras.server';
import css from '../../styles/guitarras.css'

export const loader = async({params}) => {
    // Recuperar los parametros enviados en esta ruta
    // El nombre de parametro es el mismo que el nombre del archivo sin el signo de dolar
    // $ indica a Remix que es una página dinámica 
    const {guitarraSlug} = params;

    const guitarra = await getGuitarra(guitarraSlug);
    return guitarra;
}

export const links = () => ([
    {
        rel: 'stylesheet',
        href: css
    }
])

// Cuando se carga una ruta dinámica - Remix inyecta datos en la página
// esos datos son los recuperados por una consulta http en el servidor (useLoaderData)
export const meta = ({data}) => ({
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `Guitarras, venta de guitarras modelo ${data.data[0].attributes.titulo}`
})

const GuitarraPage = () => {
    const guitarra = useLoaderData();
    const {titulo, descripcion, imagen, precio,} = guitarra.data[0].attributes;
  return (
    <div className='contenedor guitarra'>
        <img src={imagen.data.attributes.url} alt={`Imagen de guitarra ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="texto">{descripcion}</p>
            <div className="precio">$ {precio}</div>
        </div>
    </div>
  )
}

export default GuitarraPage