// Capturar algo por medio de la ID
const formElement = document.getElementById('create-user');
// Capturar el evento al hacer un envió y enviarlo al backend
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  // Capturamos los elementos enviados por el usuario
  let nombres = document.getElementById('nombres').value;
  let apellidos = document.getElementById('apellidos').value;
  let correo = document.getElementById('correo').value;
  let password = document.getElementById('password').value;
  let telefono = document.getElementById('telefono').value;
  let direccion = document.getElementById('direccion').value;
  // Convertir en objeto los elementos enviados por el usuario
  const create_user = {
    nombreUsuario: nombres,
    apellidoUsuario: apellidos,
    correo: correo,
    contrasena: password,
    telefono: telefono,
    direccion: direccion
  }
  // Convertir ese objeto en un formato JSON
  const create_userJSON = JSON.stringify(create_user);
  fetch('http://localhost:3000/user/create-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: create_userJSON
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
    .then(data => {
      console.log(data);
      // Redirigir hacía el login
      window.location.href = 'login.html'
    })
    .catch(error => {
      console.error('Error:', error);
    });
});