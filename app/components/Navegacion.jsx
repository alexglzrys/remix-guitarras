import { Link, useLocation } from "@remix-run/react";

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
        to="/tienda"
        className={location.pathname == "/tienda" ? "active" : null}
      >
        Tienda
      </Link>
      <Link
        to="/blog"
        className={location.pathname == "/blog" ? "active" : null}
      >
        Blog
      </Link>
    </div>
  );
};
