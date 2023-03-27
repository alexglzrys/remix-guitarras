import { useLoaderData } from "@remix-run/react";
import { getPost } from "../../models/posts.server";
import { formatearFecha } from "../../utils/helpers";
import styles from '../../styles/blog.css'

export const loader = async ({ params }) => {
  const { postSlug } = params;
  const post = await getPost(postSlug);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Publicación no encontrada en el sitio Web",
    });
  }
  return post;
};

export const meta = ({ data }) => {
    console.log(data)
  if (!data) {
    return {
      title: "GuitarLA - Publicación no encontrada",
      description: "Publicación no encontrada",
    };
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    description: `En esta publicación hablaremos sobre ${data.data[0].attributes.titulo}`,
  };
};

export const links = () => ([
    {
        rel: 'stylesheet',
        href: styles
    }
])

const PostPage = () => {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;
  return (
    <article className="contenedor post">
      <img
        src={imagen.data.attributes.url}
        alt={`Imagen de guitarra ${titulo}`}
      />
      <div className="contenido">
        <h3 className="titulo">{titulo}</h3>
        <div className="fecha">{formatearFecha(publishedAt)}</div>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};

export default PostPage;
