import { useOutletContext } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ClientOnly } from "remix-utils";
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
  // Estado local del componente
  const [total, setTotal] = useState(0);

  // Recuperar el contexto de información referente al carrio de la compra
  const { carrito, actualizarCantidadProducto, eliminarProductoDelCarrito } =
    useOutletContext();

  // Efecto sencundario para observar cambios en el carrito de compra y actualizar el total a pagar
  useEffect(() => {
    const total_a_pagar = carrito.reduce(
      (acumulado, producto) => acumulado + producto.cantidad * producto.precio,
      0
    );
    setTotal(total_a_pagar);
  }, [carrito]);

  const handleActualizarCantidadProducto = (e, id) => {
    // Utilizar el contexto para actualizar la cantidad de piezas del producto seleccionado
    actualizarCantidadProducto({
      id,
      cantidad: parseInt(e.target.value),
    });
  };

  return (
    // Renderiza el contenido de este componente solo en el cliente
    // Evita problemas de hidratación, ya que en el server no existe la API de Localstorage, y por tanto recupera null y no un arreglo con la información del carrito
    <ClientOnly fallback="Cargando información...">
      {() => (
        <main className="contenedor">
          <h2 className="heading">Carrito de Compras</h2>
          <div className="contenido">
            <div className="carrito">
              <h3>Artículos</h3>
              {/* 
          Dado que leer de localStorage es un proceso costoso, 
          existe cierta demora, por tanto es importante colocar el encadenado opcional ? para evitar errores
          o en su defecto, colocar un loader hasta que la información este lista
          */}
              {carrito?.length === 0
                ? "Carrito vacio"
                : carrito?.map((producto) => (
                    <div key={producto.id} className="producto">
                      <div>
                        <img
                          src={producto.imagen}
                          alt={`Imagen del producto ${producto.titulo}`}
                        />
                      </div>
                      <div>
                        <p className="nombre">{producto.titulo}</p>
                        <p>Cantidad:</p>
                        <select
                          value={producto.cantidad}
                          onChange={(e) =>
                            handleActualizarCantidadProducto(e, producto.id)
                          }
                          className="select"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <p className="precio">
                          $ <span>{producto.precio}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal ${" "}
                          <span>{producto.cantidad * producto.precio}</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn_eliminar"
                        onClick={(e) => eliminarProductoDelCarrito(producto.id)}
                      >
                        x
                      </button>
                    </div>
                  ))}
            </div>
            <aside className="resumen">
              <h3>Resumen del Pedido</h3>
              <p>Total a pagar: $ {total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
};

export default Carrito;
