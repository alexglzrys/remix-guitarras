import { Link } from "@remix-run/react";

const Guitarra = ({ guitarra }) => {
  const { titulo, precio, descripcion, imagen, url } = guitarra;
  return (
    <div className="guitarra">
      <img
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen de guitarra ${titulo}`}
      />
      <div className="contenido">
        <h3 className="titulo">{titulo}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">$ {precio}</p>
        <Link className="enlace" to={`/guitarras/${url}`}>
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;
