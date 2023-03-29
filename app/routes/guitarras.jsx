import { Outlet, useOutletContext } from "@remix-run/react";

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
      
      ---

      En este punto el contexto global inyectado en el Outlet principal aun esta disponible
      Pero...
      Los hijos que se renderizan denro del siguiente Outlet, no tendran acceso a esa información
      Por tanto, si se desea tener acceso, es necesario volver a pasar el contexto.
      */}
      <Outlet context={useOutletContext()} />
    </div>
  );
};

export default Guitarras;
