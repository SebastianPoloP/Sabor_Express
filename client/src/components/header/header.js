// Importaciones necesarias
import './header.css';
import logo from '../../images/Sabor_Express.jpeg'
import { Link } from 'react-router-dom';


// Componente para la Barra de Navegación principal
export function NavBar() {
  return (
    // Código JSX para estructurar la NavBar
    <div className='NavBar'>
      <img src={logo} alt="Logo Sabor Express" className='logo'/>
      <nav className='navigation'>
        <Link to="/" className='elements'>Inicio</Link>
        <Link to="/pide-en-linea" className='elements'>Pide en Línea</Link>
        <Link to="/contactanos" className='elements'>Contáctanos</Link>
        <Link to="/login" className='elements'>Iniciar Sesión</Link>
      </nav>
      <hr className='separator'/>
    </div>
  );
}