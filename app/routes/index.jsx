// Remix cuenta con un modelo basado en rutas (similar a Nextjs o PHP nativo)

import { useLoaderData } from "@remix-run/react"
import { ListadoGuitarras } from "../components/ListadoGuitarras"
import { ListadoPosts } from "../components/ListadoPosts"
import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/posts.server"
import stylesGuitarras from '../styles/guitarras.css'
import stylesPosts from '../styles/blog.css'
import stylesCurso from '../styles/curso.css'
import { Curso } from "../components/Curso"
import { getCurso } from "../models/curso.server"


export const meta = () => ({
  title: 'GuitarLA - Guitarras Profesionales',
  description: 'La mejor tienda de guitarras'
})

export const links = () => ([
  {
    rel: 'stylesheet',
    href: stylesGuitarras
  },
  {
    rel: 'stylesheet',
    href: stylesPosts
  },
  {
    rel: 'stylesheet',
    href: stylesCurso
  }
])

export const loader = async() => {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ]);

  return {
    guitarras: guitarras.data, 
    posts: posts.data,
    curso: curso.data
  }
}

// El nombre del archivo será el nombre final del path
const Index = () => {
  const {guitarras, posts, curso} = useLoaderData()
  return (
    <>
    <div className="contenedor">
      <ListadoGuitarras guitarras={guitarras} />
    </div>
    <Curso curso={curso.attributes} />
    <div className="contenedor">
      <ListadoPosts posts={posts} />
    </div>
    </>
    
  )
}

export default Index