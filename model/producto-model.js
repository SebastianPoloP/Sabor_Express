import mysql from 'mysql2/promise';
import { config } from '../utils/mysql.js';

const connection = await mysql.createConnection(config);
// Clase modelo para la tabla producto
export class ProductoModel {
  // Método para obtener todos los productos
  static async getProducto() {
    // Try...Catch para preguntar a la base de datos, si hay error el catch lo atrapa y lo muesta
    try {
      const [productos] = await connection.query(
        `SELECT nombreProducto, descripcionProducto, imagen, precio FROM producto;`
      );
      return productos;
    } catch (error) {
      throw new Error(error)
    }
  }
  // Método para crear un nuevo Producto
  static async createProducto({ input }) {
    // tomamos los datos del usuario y los separamos
    const {
      nombreProducto,
      descripcionProducto,
      imagen,
      precio
    } = input;
    // Try...Catch para crear un producto, si hay error el Catch lo atrapa y lo muestra
    try {
      await connection.query(
        `INSERT INTO producto (nombreProducto, descripcionProducto, imagen, precio) 
        VALUES (?, ?, ?, ?);`,
        [nombreProducto, descripcionProducto, imagen, precio]
      );
    } catch (error) {
      throw new Error(error)
    }
    // Traer el producto creado
    const [producto] = await connection.query(
      `SELECT nombreProducto, descripcionProducto, imagen, precio FROM producto
      WHERE nombreProducto = ? 
      AND descripcionProducto = ? 
      AND imagen = ? 
      AND precio = ?;`,
      [nombreProducto, descripcionProducto, imagen, precio]
    )
    return producto;
  }
  // Método para actualizar un producto
  static async updateProducto({ id, input }) {
    // tomamos los datos enviados por el usuario
    const {
      nombreProducto,
      descripcionProducto,
      imagen,
      precio
    } = input;
    // Try...Catch para actualizar un producto, en caso de error en catch lo atrapa.
    try {
      await connection.query(
        `UPDATE producto
        SET nombreProducto = ?, descripcionProducto = ?, imagen = ?, precio = ?
        WHERE producto_id = ?;`,
        [nombreProducto, descripcionProducto, imagen, precio, id]
      );
    } catch (error) {
      throw new Error(error);
    }
    // Query para traer de nuevo el producto
    const [producto] = await connection.query(
      `SELECT nombreProducto, descripcionProducto, imagen, precio FROM producto
      WHERE producto_id = ?`, [id]
    );

    return producto[0];
  }

  // Método para eliminar un producto.
  static async deleteProducto({ id }) {
    // Consulta para eliminar el producto, en caso de error el catch lo atrapa
    try {
      await connection.query(
        `DELETE FROM producto WHERE producto_id = ?;`,
        [id]
      );
    } catch (error) {
      throw new Error(error)
    }
    // Retorna positivo en caso de eliminación del producto
    return true;
  }
}