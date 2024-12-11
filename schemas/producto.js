import z from 'zod';
// Esquema de validación de la tabla Producto
const ProductoSchema = z.object({
  nombreProducto: z.string().max(255),
  descripcionProducto: z.string().max(250),
  imagen: z.string().url(),
  precio: z.number().positive()
});
// Función de validación de los datos recibidos por el usuario
export function ValidateProducto(input){
  return ProductoSchema.safeParse(input);
}
// Función para validar parcialmente un producto
export function ValidateParcialProducto(input){
  return ProductoSchema.partial().safeParse(input);
}