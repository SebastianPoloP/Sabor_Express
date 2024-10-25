// Importaciones necesarias
import React, { useState } from 'react';
import { NavBar } from '../header/header';
import { Footer } from '../footer/footer';
import './register-user.css'

// Componente para Registrar un Usuario
export function FormularioRegistro() {
  const [infoFormulario, actualizarFormulario] = useState({
    nombreUsuario: '',
    apellidoUsuario: '',
    correo: '',
    contrasena: '',
    telefono: '',
    direccion: ''
  });
// Funcion para capturar los cambios
  function CambiosFormulario(event){
    const {name, value} = event.target;
    actualizarFormulario({
      ...infoFormulario, [name]: value
    });
  }
  // Evento asincrono para hacer la peticion al backend
  async function EnviarCambios(event){
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/create-user',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoFormulario)
      });

      if(!response.ok){
        throw new Error(`Error: ${response.status}`);
      }

      window.location.href = '../../app.js'
    } catch (error) {
      throw new Error('Error creating user')
    }
    
  }

  return (
    // Código JSX para estructurar la pagina
    <div>
      <NavBar/>
      <div className='form-container'>
      <h2 className="titulo">Registrar Usuario</h2>
      <form id="create-user" onSubmit={EnviarCambios}>
        <div className="form-group">
          <label htmlFor="nombres">Nombre del Usuario:</label>
          <input
            id="nombres"
            type="text"
            name="nombreUsuario"
            value={infoFormulario.nombreUsuario}
            onChange={CambiosFormulario}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellido del Usuario:</label>
          <input
            id="apellidos"
            type="text"
            name="apellidoUsuario"
            value={infoFormulario.apellidoUsuario}
            onChange={CambiosFormulario}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            id="correo"
            type="email"
            name="correo"
            value={infoFormulario.correo}
            onChange={CambiosFormulario}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            id="password"
            type="password"
            name="contrasena"
            value={infoFormulario.contrasena}
            onChange={CambiosFormulario}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            value={infoFormulario.telefono}
            onChange={CambiosFormulario}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input
            id="direccion"
            type="text"
            name="direccion"
            value={infoFormulario.direccion}
            onChange={CambiosFormulario}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
    <Footer/>
    </div>
  );
}