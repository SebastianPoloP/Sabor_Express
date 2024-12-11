import { Router } from "express";
import { ProductoController } from "../controller/producto.js";

// Función para crear una ruta para los productos
export const createProductoRouter = ({ productoModel }) => {
  const productoRouter = Router();
  const productoController = new ProductoController({ productoModel });
  // Routing
  productoRouter.get('/', productoController.getProducto);
  productoRouter.post('/create-producto', productoController.createProducto);
  productoRouter.patch('/:id', productoController.updateProducto);
  productoRouter.delete('/:id', productoController.deleteProducto);
  return productoRouter;
}