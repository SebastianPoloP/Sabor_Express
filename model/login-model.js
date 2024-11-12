import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { config } from '../utils/mysql.js';

const connection = await mysql.createConnection(config);
// Clase modelo para el login
export class LoginModel {
  // Método estático para hacer la validación en la base de dato si el usuairo existo o no.
  static async userLogin({ input }) {

    const {
      correo,
      contrasena
    } = input;
    // Tomar la contraseña pasada por el usuario
    const password = contrasena;

    try {
      // Petición a la base de datos para encontrar el usuario
      const [login] = await connection.query(
        `SELECT contrasena FROM usuario WHERE correo = ?;`,
        [correo]
      );
      // Forma para saber si se encontro el usuario o no
      if (login.length === 0) throw new Error('Usuario no encontrado');
      // Sacar la contraseña de la petición de la base de datos
      const [{ contrasena }] = login;
      // Comparar la contraseña que puso el usuario con la contraseña hasheada en la base de datos
      const isValid = await bcrypt.compare(password, contrasena);
      // Error en caso de que la contraseña no sea igual
      if(!isValid) throw new Error('Contraseña errónea');
      // Petición a la base de datos para recuperar el nombre y el apellido del usuario
      const [user] = await connection.query(
        `SELECT nombreUsuario, apellidoUsuario FROM usuario;`
      );
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}