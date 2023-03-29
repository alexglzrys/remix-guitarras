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
  return (
    <main className="contenedor">
      <h2 className="heading">Carrito de Compras</h2>
      <div className="contenido">
        <div className="carrito">
          <h3>Artículos</h3>
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
