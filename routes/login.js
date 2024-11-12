import { Router } from "express";
import { LoginController } from "../controller/login.js";
// Ruta para el login
export const createLoginRouter = ({ loginModel }) => {
  const loginRouter = Router();
  // Uso del controlador y el modelo que va a usar
  const loginController = new LoginController({ loginModel });
  // Metodo post para logear a una persona
  loginRouter.post('/', loginController.loginUser)
  return loginRouter;
}