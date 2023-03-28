import { Link } from "@remix-run/react";
import { formatearFecha } from "../utils/helpers";

export const Post = ({ post }) => {
  const { titulo, contenido, imagen, url, createdAt } = post;
  return (
    <div className="post">
      <img
        src={imagen.data.attributes.formats.small.url}
        alt={`Imagen post ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3 className="titulo">{titulo}</h3>
        <p className="fecha">{formatearFecha(createdAt)}</p>
        <div className="resumen">{contenido}</div>
        <Link className="enlace" to={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </div>
  );
};
