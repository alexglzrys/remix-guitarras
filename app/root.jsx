import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './styles/index.css'

// metainformación a cargar en el header de la aplicación
// Se requiere importar el componente Meta para que inyecte automáticamente esta información
export const meta = () => ({
  charset: "utf-8",
  title: "GuitarLA - Remix",
  viewport: "width=device-width,initial-scale=1",
});
// hojas de estilo a cargar en el header de la aplicación
// Se requiere el componente Links para que inyecte automáticamente esta información
export const links = () => ([
  {
    rel: 'stylesheet',
    href: styles
  }
])

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
