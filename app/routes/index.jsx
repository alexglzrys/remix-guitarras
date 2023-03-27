// Remix cuenta con un modelo basado en rutas (similar a Nextjs o PHP nativo)

import { useLoaderData } from "@remix-run/react"
import { ListadoGuitarras } from "../components/ListadoGuitarras"
import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/posts.server"
import stylesGuitarras from '../styles/guitarras.css'

export const meta = () => ({
  title: 'GuitarLA - Guitarras Profesionales',
  description: 'La mejor tienda de guitarras'
})

export const links = () => ([
  {
    rel: 'stylesheet',
    href: stylesGuitarras
  }
])

export const loader = async() => {
  const [guitarras, posts] = await Promise.all([
    getGuitarras(),
    getPosts()
  ]);

  return {
    guitarras: guitarras.data, 
    posts: posts.data
  }
}

// El nombre del archivo será el nombre final del path
const Index = () => {
  const {guitarras, posts} = useLoaderData()
  return (
    <div className="contenedor">
      <ListadoGuitarras guitarras={guitarras} />
    </div>
  )
}

export default Index