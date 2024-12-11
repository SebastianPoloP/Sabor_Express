// Importanciones necesarios
import { Footer } from "../../footer/footer";
import { NavBar } from "../../header/header";
import logo from '../../../images/Sabor Express.jpg';

// Componente Contactanos
export function Contactanos() {
  return (
    // Código JSX para estructurar la pagina
    <div>
      <NavBar/>
      <div className="contacto">
        <h1 className='titulo'>Contáctanos!</h1>
      </div>
      <div className="form-container">
        <form className='form' onsubmit="">
          <div className="form-group">
            <label for="nombres">Nombres</label>
            <input id="nombres" type="text" />
          </div>
          <div className="form-group">
            <label for="apellidos">Apellidos</label>
            <input id='apellidos' type="text" />
          </div>
          <div className="form-group">
            <label for="correo">Correo</label>
            <input id='correo' type="email" />
          </div>
          <div className="form-group">
            <label for="">Mensaje</label>
            <textarea name="" className="mensaje"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
        <div className="imagen-container">
          <img src={logo} alt="Logo-Sabor-Express" className='imgContacto'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}