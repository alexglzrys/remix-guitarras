import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/index.css";

// metainformación a cargar en el header de la aplicación
// Se requiere importar el componente Meta para que inyecte automáticamente esta información
export const meta = () => ({
  charset: "utf-8",
  title: "GuitarLA - Remix",
  viewport: "width=device-width,initial-scale=1",
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
    <html lang="es-MX">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
