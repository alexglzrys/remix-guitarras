import { useLoaderData, useOutletContext } from '@remix-run/react';
import React, { useState } from 'react'
import { getGuitarra } from '../../models/guitarras.server';
import css from '../../styles/guitarras.css'

export const loader = async({params}) => {
    // Recuperar los parametros enviados en esta ruta
    // El nombre de parametro es el mismo que el nombre del archivo sin el signo de dolar
    // $ indica a Remix que es una página dinámica 
    const {guitarraSlug} = params;

    const guitarra = await getGuitarra(guitarraSlug);

    // Lanzar excepción (página de error) si no hay datos de guitarra
    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Modelo de guitarra no encontrado'
        })
    }

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
export const meta = ({data}) => {
    // Si no hay respuesta satisfactoria del server, retornar otro tipo de información (ya que la data se encuentra indefinida)
    if (!data) {
        return {
            title: 'GuitarLA - Guitarra no encontrada',
            description: 'Guitarras, venta de guitarras, guitarra no localizada'
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        description: `Guitarras, venta de guitarras modelo ${data.data[0].attributes.titulo}`
    }
}

const GuitarraPage = () => {
    // Recuperar el contexto global de la aplicación inyectado en el componente Outlet
    const { agregarAlCarrito } = useOutletContext();

    /**
     * Remix
     * Es un framework que trabaja tanto en el servidor como en el cliente
     * Por eso es importante saber distinguir las API's a utilizar, ya que algunas solo están disponibles solo en el servidor
     * o en el cliente, como LocalStorage.
     * 
     * Lo mismo pasa con los hooks de React, estos solo están disponobles para el cliente, es decir los componentes
     * Por tanto no se pueden usar dentro de la API de Remix (loaders, links, meta)
     */

    // Estado local del formulario de carrito de compras
    const [cantidad, setCantidad] = useState(0)

    const guitarra = useLoaderData();
    const {titulo, descripcion, imagen, precio,} = guitarra.data[0].attributes;

    // Controlador de envío de formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        // Validar cantidad seleccionada
        if (cantidad < 1) {
            alert('Debe seleccionar una cantidad de producto válida');
            return false
        }

        // Generar objeto que representa al producto en el carrito de compra
        const producto = {
            id: guitarra.data[0].id,
            titulo,
            precio,
            cantidad,
            imagen: imagen.data.attributes.url
        }
        
        // Usar la función compartida en el contexto para agregar el producto al carrito de la compra
        agregarAlCarrito(producto);
    }
  return (
    <div className='guitarra'>
        <img src={imagen.data.attributes.url} alt={`Imagen de guitarra ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="texto">{descripcion}</p>
            <div className="precio">$ {precio}</div>

            <form onSubmit={handleSubmit} className="formulario">
                <label htmlFor="cantidad">Cantidad</label>
                <select id="cantidad" onChange={e => setCantidad(parseFloat(e.target.value))}>
                    <option value="0">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="Agregar al carrito" />
            </form>

        </div>
    </div>
  )
}

export default GuitarraPage