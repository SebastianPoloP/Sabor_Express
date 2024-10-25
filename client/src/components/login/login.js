// Importaciones necesarias
import { Link } from "react-router-dom";
import { NavBar } from "../header/header";
import { Footer } from "../footer/footer";
import './login.css';

// Componente para el Login
export function Login() {
  return (
    // Código JSX para estructurar la pagina Login
    <div>
    <NavBar/>
    <div className="login">
        <h2 className="tituloLogin">Login</h2>
        <form className="loginForm"onsubmit="">
            <div className="form-group">
                <label for="email">Correo:</label>
                <input type="text" name="email" id="email"/><br />
            </div>
            <div className="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" name="password" id="password"/>
            </div>
            <a href="a">Olvidaste tu contraseña?</a>
            <button type="submit">Iniciar Sesión</button>
            <Link className="createAccount" to="/login/create-user">Crear cuenta</Link>
        </form>
    </div>
    <Footer/>
    </div>
  )
}