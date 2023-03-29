import { useOutletContext } from "@remix-run/react";
import style from "~/styles/carrito.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: style,
  },
];

export const meta = () => ({
  title: "Guitar LA - Carrito de compras",
  description: "Carrito de compras productos GuitarLA",
});

const Carrito = () => {
  // Recuperar el contexto de información referente al carrio de la compra
  const { carrito } = useOutletContext();

  return (
    <main className="contenedor">
      <h2 className="heading">Carrito de Compras</h2>
      <div className="contenido">
        <div className="carrito">
          <h3>Artículos</h3>
          {carrito.length === 0
            ? "Carrito vacio"
            : carrito.map((producto) => (
                <div key={producto.id} className="producto">
                  <div>
                    <img src={producto.imagen} alt={`Imagen del producto ${producto.titulo}`} />
                  </div>
                  <div>
                    <p className="nombre">{producto.titulo}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p className="precio">$ <span>{producto.precio}</span></p>
                    <p className="subtotal">Subtotal $ <span>{producto.cantidad * producto.precio}</span></p>
                  </div>
                </div>
              ))}
        </div>
        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: $</p>
        </aside>
      </div>
    </main>
  );
};

export default Carrito;
