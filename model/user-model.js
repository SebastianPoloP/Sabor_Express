import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt'
import { SALT_ROUND } from '../utils/config.js';

// datos necesarios para acceder a la base de datos
const config = {
  host: 'localhost',
  user: 'root',
  port: 3307,
  password: '',
  database: 'sabor_express'
}
// Forma de conectar con la base de datos.
const connection = await mysql.createConnection(config);

// Clase modelo del usuario
export class UserModel {
  // Método asincrono para crear un usuario
  static async createUser({ input }) {
    
    // Sacar todos los atributos del input enviado por el usuario
    const {
      nombreUsuario,
      apellidoUsuario,
      correo,
      contrasena,
      telefono,
      direccion
    } = input;

    const hashedPassword = await bcrypt.hash(contrasena, SALT_ROUND);
    // Forma para crear la id binaria
    const [uuidResult] = await connection.query('SELECT UUID() uuid;');
    const [{ uuid }] = uuidResult;

    // Try Catch para atrapar un error en caso de que haya uno.
    try {
      // Insertar un nuevo usuario
      await connection.query(
        `INSERT INTO usuario (usuario_id, nombreUsuario, apellidoUsuario, correo, contrasena, telefono, direccion)
        VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`,
        [nombreUsuario, apellidoUsuario, correo, hashedPassword, telefono, direccion]
      );
      // Insertar información a la tabla login
      await connection.query(
        `INSERT INTO login (usuario_id)
        VALUES (UUID_TO_BIN("${uuid}"));`
      );
    } catch (error) {
      console.log(error);
      throw new Error('Error creating user')
    }
    // consulta a la base de datos para traer el usuario creado
    const [user] = await connection.query(
      `SELECT nombreUsuario, apellidoUsuario, correo, contrasena, telefono, direccion FROM usuario
      WHERE usuario_id = UUID_TO_BIN("${uuid}");`
    )

    return user[0];
  }
  // Método asíncrono para actualizar un usuario
  static async updateUser({ id, input }) {
    // Sacamos la información del cuerpo de la petición
    const {
      nombreUsuario,
      apellidoUsuario,
      correo,
      telefono,
      direccion
    } = input;
    // Capturamos error si hay alguno
    try {
      // Actualización en la base de datos
      await connection.query(
        `UPDATE usuario 
        SET nombreUsuario = ?, apellidoUsuario = ?, correo = ?, telefono = ?, direccion = ?
        WHERE usuario_id = UUID_TO_BIN(?);`,
        [nombreUsuario, apellidoUsuario, correo, telefono, direccion, id]
      );
    } catch (error) {
      // Enviamos el error si hay
      throw new Error('Error actualizando el usuario.');
    }

    // Selecionamos el usuario actualizado
    const [user] = await connection.query(
      `SELECT nombreUsuario, apellidoUsuario, correo, telefono, direccion 
      FROM usuario
      WHERE usuario_id = UUID_TO_BIN(?);`, [id]
    );

    return user[0];
  }
  // Método asíncrono para eliminar un usuario por medio de la ID
  static async deleteUser({ id }) {
    try {
      // Consulta para eliminar un usuario por medio de la id
      await connection.query(
        `DELETE FROM usuario WHERE usuario_id = UUID_TO_BIN(?);`, [id]
      )
    } catch (error) {
      throw new Error('Error eliminado el usuario')
    }
    return true;
  }
}