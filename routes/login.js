import { Router } from "express";
import { LoginController } from "../controller/login.js";

export const createLoginRouter = ({ loginModel }) => {
  const loginRouter = Router();
  const loginController = new LoginController({ loginModel });

  loginRouter.post('/', loginController.loginUser)
  return loginRouter;
}