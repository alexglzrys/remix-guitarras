import { useLoaderData } from "@remix-run/react";
import { ListadoGuitarras } from "../../components/ListadoGuitarras";
import { getGuitarras } from "../../models/guitarras.server";
import css from "../../styles/guitarras.css";

// Consumir datos
// (mismo enfoque que el API de React Router Dom 6.4 y sus loaders)
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

// links o referencias de archivos para esta página
// Los estilos css se heredan a los componentes internos de esta página
export const links = () => [
  {
    rel: "stylesheet",
    href: css,
  },
];

const HomeGuitarras = () => {
  // Recuperar el resultado de la petición http (loadoer)
  const guitarras = useLoaderData();
  return <ListadoGuitarras guitarras={guitarras} />;
};

export default HomeGuitarras;
