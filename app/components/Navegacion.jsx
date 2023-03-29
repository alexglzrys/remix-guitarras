import { Link, useLocation } from "@remix-run/react";
import imagen from '../../public/img/carrito.png'

export const Navegacion = () => {
  // Hook personalizado para obtener información de la ruta actual
  const location = useLocation();
  return (
    <div className="navegacion">
      <Link to="/" className={location.pathname == "/" ? "active" : null}>
        Incio
      </Link>
      <Link
        to="/nosotros"
        className={location.pathname == "/nosotros" ? "active" : null}
      >
        Nosotros
      </Link>
      <Link
        to="/guitarras"
        className={location.pathname == "/guitarras" ? "active" : null}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname == "/blog" ? "active" : null}
      >
        Blog
      </Link>
      <Link to="/carrito">
        <img src={imagen}  alt="carrito de compras"/>
      </Link>
    </div>
  );
};
