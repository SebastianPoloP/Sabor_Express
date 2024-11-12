import z from 'zod';
// Esquema para validar si un login esta correcto.
const LoginSchema = z.object({
  correo: z.string({
    required_error: 'Username to be string'
  }).email({
    required_error: 'Formato de correo no valido'
  }).max(255),
  contrasena: z.string().max(16)
});
// Función para hacer la validación
export function ValidateLogin(input){
  return LoginSchema.safeParse(input);
}