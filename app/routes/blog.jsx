import { useLoaderData } from "@remix-run/react";
import { ListadoPosts } from "../components/ListadoPosts";
import { getPosts } from "../models/posts.server";
import style from '../styles/blog.css'

export const loader = async () => {
  // Recuperar todos los posts desde el servidor
  const posts = await getPosts();
  return posts.data;
};

// Declarar metainfromación referente a la página de Blog
// la misma idea se puede hacer para inyectar CSS personalizado para esta página
export const meta = () => ({
  title: "GuitarLA - Blog",
});

export const links = () => ([
  {
    rel: 'stylesheet',
    href: style
  }
])

const Blog = () => {
  // usar la información en el componente
  const posts = useLoaderData();

  return (
    <div className="contenedor">
      <ListadoPosts posts={posts} />
    </div>
  );
};

export default Blog;
