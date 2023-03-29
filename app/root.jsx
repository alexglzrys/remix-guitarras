import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
} from "@remix-run/react";
import { Header } from "./components/Header";
// En el archivo tsconfig.json hay declarado un path que apunta a la raiz de del proeycto, ~/* 
import styles from "~/styles/index.css";
import { Footer } from "~/components/Footer";
import { useState } from "react";

// metainformación a cargar en el header de la aplicación
// Se requiere importar el componente Meta para que inyecte automáticamente esta información
export const meta = () => ({
  charset: "utf-8",
  title: "GuitarLA - Remix",
  viewport: "width=device-width,initial-scale=1",
  description: 'GuitarLA - La mejor tienda de guitarras'
});

// hojas de estilo a cargar en el header de la aplicación
// Se requiere el componente Links para que inyecte automáticamente esta información
export const links = () => [
  // El orden de la declaración es con base a la importancia y dependencia de cada css
  {
    rel: "stylesheet",
    href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap",
  },
  {
    rel: "stylesheet",
    href: styles,
  },
];

// El componente principal de la aplicación se debe llamar App
export default function App() {

  /**
   * Remix
   * Este framework cuenta con su propio Context API, 
   * por tanto, en lugar de usar el Context API nativo de React, deberemos usar el que propone el equipo de Remix
   */

  // Estado global de la aplicación
  // Carrito de compras
  const [carrito, setCarrito] = useState([]);

  // Controlador para agregar productos al carrito de compras - estado global de la aplicación
  const agregarAlCarrito = (producto) => {
    // Evitar registras duplicados
    if (carrito.some(productoState => productoState.id === producto.id)) {
      // Buscar el producto y actualizar la cantidad
      const lista_productos_actualizados = carrito.map(productoState => {
        if (productoState.id === producto.id) {
          productoState.cantidad = producto.cantidad;
        }
        return productoState;
      })
      // guardar la lista de productos actualizados en el estado global
      setCarrito(lista_productos_actualizados);
    } else {
      // Nuevo producto
      setCarrito([...carrito, producto]);
    }
  }

  // Controlador para actualizar la cantidad de un producto seleccionado en el carrito
  const actualizarCantidadProducto = (producto) => {
     // Buscar el producto y actualizar la cantidad
    const lista_productos_actualizados = carrito.map(productoState => {
      if (productoState.id === producto.id) {
        productoState.cantidad = producto.cantidad;
      }
      return productoState;
    })
     // guardar la lista de productos actualizados en el estado global
     setCarrito(lista_productos_actualizados);
  }

  // Controlador para eliminar un producto del carrtido de compra
  const eliminarProductoDelCarrito = (id) => {
    const lista_productos_actualizados = carrito.filter(productoState => productoState.id !== id);
    setCarrito(lista_productos_actualizados);
  }

  return (
    <Document>
        {/* 
          Outlet: Inyectar la información de los archivos de ruta
          context: Es el prop que usan los componentes de Remix para pasar el contexto (Context API Remix)
          
          Importante: 
          Podemos pasar cualquier cosa que sea de JS al contexto
          Pero es importante saber que la información solo estará disponible en el primer nivel del Outlet,
          es decir, todas las paginas renderizadas en ese Outlet tendrán acceso al contexto.

          Sin embargo, 
          Si hay Outlets anidados (Guitarras o Blog), es necesario volverla a pasar a través de su prop context correspindiente
          Ya que de no hacerlo, esos páginas anidadas, no tendran acceso a la información

          Outlet --- info
            página
            página
            Outlet (los hijos no tendran acceso al contexto de forma predeterminada)
              pagina
              pagina
        */}
        <Outlet context={{
          agregarAlCarrito,
          carrito,
          actualizarCantidadProducto,
          eliminarProductoDelCarrito
        }} />
      </Document>
  );
}

// Wrapper para conservar la estructura principal de la página en los componentes de error
export const Document = ({children}) => {
  return (
    <html lang="es-MX">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        {/* Inyectar scripts utilitarios de Remix */}
        <Scripts />
        {/* Inyectar Livereload - necesario para escuchar cambios en desarrollo */}
        <LiveReload />
      </body>
    </html>
  )
}

/* MANEJO DE ERROES */
// Estos se deberían lanzar desde los componentes de página al no encontrar información
export const CatchBoundary = () => {
  const error = useCatch();
  return (
    <Document>
      <div className="contenedor error">
        <h3 className="error-titulo">{error.status}</h3>
        <p className="error-mensaje">{error.statusText}</p>
        <Link to="/" className="error-enlace">Volver a la página principal</Link>
      </div>
    </Document>
  )
}

export const ErrorBoundary = ({error}) => {
  return (
    <Document>
      <div className="contenedor error">
        <h3 className="error-titulo">{error.status}</h3>
        <p className="error-mensaje">{error.statusText}</p>
        <Link to="/" className="error-enlace">Volver a la página principal</Link>
      </div>
    </Document>
  )
}