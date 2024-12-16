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
    // Mostrar el error, en caso de haber un fallo
    if(typeof user === 'string'){
      return res.status(400).json({Message: user})
    }
    // Verificar si los datos enviados del servidor pertenece a un ADMIN
    if (user.puesto === 'Administrador') {
      const token = jwt.sign(
        {
          user: user.nombreUsuario,
          lastname: user.apellidoUsuario,
          puesto: user.puesto
        },
        SECRET_KEY,
        {
          expiresIn: '1h'
        });
      return res
        .cookie('access_admin_token', token, {
          httpOnly: true,
          secure: false,
          sameSite: 'lax',
          path: '/',
        })
        .status(200).send({ user, token })
    }
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

    return res
      .cookie('access_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
      })
      .status(200).send({ user, token });
  }
}