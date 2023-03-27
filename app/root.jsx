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
  return (
    <Document>
        {/* Inyectar la información de los archivos de ruta */}
        <Outlet />
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