// Importaciones necesarias
import { Link } from "react-router-dom";
import { NavBar } from "../header/header";
import { Footer } from "../footer/footer";
import { useState } from "react";
import './login.css';

// Componente para el Login
export function Login() {
  const [infoUser, updateInfo] = useState({
    correo: '',
    contrasena: ''
  });

  function cambiosFormulario(event) {
    const { name, value } = event.target;
    updateInfo({
      ...infoUser, [name]: value
    });
  }
  async function sendForm(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3030/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(infoUser)
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      window.location.href = '/'
    } catch (error) {
      throw new Error('Error validating user')
    }
  }
  
  return (
    // Código JSX para estructurar la pagina Login
    <div>
      <NavBar />
      <div className="login">
        <h2 className="tituloLogin">Login</h2>
        <form className="loginForm" onsubmit={sendForm}>
          <div className="form-group">
            <label for="email">Correo:</label>
            <input
              id="email"
              type="email"
              name="correo"
              value={infoUser.correo}
              onChange={cambiosFormulario}
            /><br />
          </div>
          <div className="form-group">
            <label for="password">Contraseña:</label>
            <input
              id="password"
              type="password"
              name="contrasena"
              value={infoUser.contrasena}
              onChange={cambiosFormulario}
            />
          </div>
          <a href="a">Olvidaste tu contraseña?</a>
          <button type="submit">Iniciar Sesión</button>
          <Link className="createAccount" to="/login/create-user">Crear cuenta</Link>
        </form>
      </div>
      <Footer />
    </div>
  )
}