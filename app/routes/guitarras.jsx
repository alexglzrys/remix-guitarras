import { Outlet } from "@remix-run/react";

// Metainformación para esta página
export const meta = () => ({
  title: "GuitarLA - Tienda de Guitarras",
  description: "Venta de instrumentos de música",
});

const Guitarras = () => {
  return (
    <div className="contenedor">
      {/* 
      Este archivo se convierte en padre o contenedor 
      de las otras vistas situadas dentro del path guitarras/

      Este tipo de estructura es clásica en ambientes como Angular.
      Por tanto, este archivo debe ser lo más simple y sencillo posible, los hijos son los que deben declarar el contenido complejo a proyectar en el componente Outlet
      */}
      <Outlet />
    </div>
  );
};

export default Guitarras;
