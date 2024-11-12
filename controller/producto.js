import { ValidateParcialProducto, ValidateProducto } from "../schemas/producto.js";

// Clase controlador de la tabla Producto
export class ProductoController {
  constructor({ productoModel }) {
    this.productoModel = productoModel;
  }
  // Función para obtener los productos registrados.
  getProducto = async (req, res) => {
    const productos = await this.productoModel.getProducto();
    if (productos.length === 0) return res.status(400).json({message: 'No se encontraron productos'})
    return res.status(200).json(productos);
  }
  // Función para crear un producto
  createProducto = async (req, res) => {
    // Uso del esquema para validar la información
    const producto = ValidateProducto(req.body);
    // Mostramos un error en caso de que la información no sea valida
    if (!producto.success) res.status(400).json({ error: JSON.stringify(producto.error.message) });
    // Enviar la información del usuario al modelo
    const newProducto = await this.productoModel.createProducto({ input: producto.data });
    // Envio del producto enviado
    return res.status(201).json(newProducto)
  }
  // Función para actualizar un producto
  updateProducto = async (req, res) => {
    // Validación parcial del producto
    const producto = ValidateParcialProducto(req.body);
    // Verficación de que los datos esten correctos
    if (!producto.success) return res.status(404).json({ message: JSON.stringify(producto.error.message) });
    // Tomamos la id para poder encontrar el producto en la BD
    const { id } = req.params;
    // Enviamos la información al modelo
    const updProducto = await this.productoModel.updateProducto({ id, input: producto.data })
    // Retorna el usuario con las actualizaciones
    return res.json(updProducto)
  }
  // Función para elimianr un producto y enviarlo al modelo
  deleteProducto = async (req, res) => {
    const { id } = req.params;
    const dlProducto = await this.productoModel.deleteProducto({ id });
    if(!dlProducto) return res.status(404).json({message: 'Producto no encontrado.'});
    return res.json({message: 'Producto deleted'})
  }
}