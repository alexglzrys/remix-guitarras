import { Navegacion } from "./Navegacion"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="contenedor contenido">
            <Navegacion />
            <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}
