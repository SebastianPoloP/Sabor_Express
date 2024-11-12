// Importaciones necesarias
import express, { json } from 'express';
import { corsMiddleware } from './middleware/cors.js';
import { createUserRouter } from './routes/user.js';
import { PORT } from './utils/config.js'
import { createLoginRouter } from './routes/login.js';
import { createProductoRouter } from './routes/producto.js';
// Constante para usar Express
const app = express();

// Función flecha para crear el server desde otro lado y usar el/los modelo/s deseado
export const App = ({ userModel, loginModel, productoModel }) => {
  // Deshabilitar el powered by de express
  app.disable('x-powered-by');
  // Uso del middleware para solucionar el CORS
  app.use(corsMiddleware());
  // Usar el formato Json para recibir información
  app.use(json());
  // Enlazar las routas con la app principal
  app.use('/user', createUserRouter({ userModel }));
  app.use('/login', createLoginRouter({ loginModel }));
  app.use('/producto', createProductoRouter({ productoModel }));
  // Pagína principal
  app.get('/', (req, res) => {
    res.send('<h1>Bienvenidos a Sabor Express</h1>')
  });
  // Pagina por si no encuentra la ruta
  app.use((req, res) => {
    res.status(404).send('<h1>Página no encontrada</h1>')
  });

  // Función listen para hacer que el servidor pueda recibir solicitudes
  app.listen(PORT, () => {
    console.log(`Server liseting on port ${PORT}`)
  });
}