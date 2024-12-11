// Importar zod para hacer validaciones para el usuario.
import z from 'zod';

// Esquemma para hacer la validación en el backend antes de enviar la información a la base de datos
const userSchema = z.object({
  nombreUsuario: z.string({
    required_error : 'Nombre de usuario requerido'
  }).max(255),
  apellidoUsuario : z.string({
    required_error: 'Apellido del usuario requerido'
  }).max(255),
  correo: z.string().email().max(255),
  contrasena: z.string({
    required_error: 'Contraseña requerida'
  }).max(16),
  telefono: z.string().max(10),
  direccion: z.string()
});

// Función para convertir y validar el input pasado por el usuario a un Json/Object
export function validateUser (input){
  return userSchema.safeParse(input);
}

// Función para convertir y validar pacialmente el input pasado por el usuario a un Json/Object
export function validateParcialUser (input) {
  return userSchema.partial().safeParse(input);
}