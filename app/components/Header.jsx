import { Link } from '@remix-run/react'
// Assets estáticos de la aplicación se declaran en al carpeta public
import logotipo from '../../public/img/logo.svg'
import { Navegacion } from './Navegacion'

export const Header = () => {
  return (
    <div className='header'>
        <div className="contenedor barra">
            <Link to='/'>
                <img src={logotipo} alt="Logo Header" className="logo" />
            </Link>
            <Navegacion />
        </div>
    </div>
  )
}
