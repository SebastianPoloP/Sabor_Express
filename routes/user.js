import { Router } from "express";
import { UserControler } from "../controller/user.js";

// función para que tengamos que instanciar y pasar el modelo
export const createUserRouter = ({ userModel }) => {
  // Creando el router
  const userRouter = Router();
  // Instanciamos el controlador del usuario
  const userController = new UserControler({ userModel })
  // Routing
  userRouter.post('/create-user', userController.createUser);
  userRouter.patch('/update-user/:id', userController.updateUser);
  userRouter.delete('/profile/:id', userController.deleteUser);

  return userRouter;
}