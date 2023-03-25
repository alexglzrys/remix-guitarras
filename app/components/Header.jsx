import { Link, useLocation } from '@remix-run/react'
// Assets estáticos de la aplicación se declaran en al carpeta public
import logotipo from '../../public/img/logo.svg'

export const Header = () => {
    // Hook personalizado para obtener información de la ruta actual
    const location = useLocation();

  return (
    <div className='header'>
        <div className="contenedor barra">
            <Link to='/'>
                <img src={logotipo} alt="Logo Header" className="logo" />
            </Link>
            <div className="navegacion">
                <Link to='/' className={location.pathname == '/' ? 'active' : null}>Incio</Link>
                <Link to='/nosotros' className={location.pathname == '/nosotros' ? 'active' : null}>Nosotros</Link>
                <Link to='/tienda' className={location.pathname == '/tienda' ? 'active' : null}>Tienda</Link>
                <Link to='/blog' className={location.pathname == '/blog' ? 'active' : null}>Blog</Link>
            </div>
        </div>
    </div>
  )
}
