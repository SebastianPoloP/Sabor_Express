import { ValidateLogin } from "../schemas/login.js";
// Importación de la libreria Jsonwebtoken para agregar un token al usuario
import jwt from 'jsonwebtoken';
// Llave secreta para usar el Jsonwebtoken
import { SECRET_KEY } from "../utils/config.js";
// Clase controladora para el login
export class LoginController {

  constructor({ loginModel }) {
    this.loginModel = loginModel;
  }

  // Método asíncrono para realizar el login
  loginUser = async (req, res) => {
    // Forma de tomar los datos recibidos por el usuario
    const result = ValidateLogin(req.body);
    if (!result.success) {
      return res.status(400).json({ error: JSON.stringify(result.error.message) });
    }
    // Enviar datos al modelo Login
    const [user] = await this.loginModel.userLogin({ input: result.data });
    // Uso de Jsonwebtoken para crear un token al usuario que expira en 1 hora
    const token = jwt.sign(
      {
        user: user.nombreUsuario,
        lastname: user.apellidoUsuario
      },
      SECRET_KEY,
      {
        expiresIn: '1h'
      }
    );
  
    return res.status(200).json({user, token});
  }
}