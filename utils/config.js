// configuraciones que se pueden usar en algún momento
export const {
  // Puerto del servidor
  PORT = 3030,
  // Seguridad para añadir caracteres aleatorios en el hasheo de las contraseñas
  SALT_ROUND = 10,
  // Palabra secreta para la genereación del Jsonwebtoken
  SECRET_KEY = '1!^wSGdz7*40qp-^MG$4*1676j@%M-G3#7!5@8r#MX#2-kEW&$J#8t2pNPH-c$0B'
} = process.env;