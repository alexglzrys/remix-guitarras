import { Outlet } from "@remix-run/react";
import style from "../styles/blog.css";


// Declarar metainfromación referente a la página de Blog
// la misma idea se puede hacer para inyectar CSS personalizado para esta página
export const meta = () => ({
  title: "GuitarLA - Blog",
});

export const links = () => [
  {
    rel: "stylesheet",
    href: style,
  },
];

// Este componente de página actua como Layout para los componentes dentro del path blog/
const Blog = () => {
  return (
    <div className="contenedor">
      <Outlet />
    </div>
  );
};

export default Blog;
