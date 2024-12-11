import { App } from './app.js';
import { LoginModel } from './model/login-model.js';
import { ProductoModel } from './model/producto-model.js';
import { UserModel } from './model/user-model.js';

// Forma para agregar el modelo que se usara en la app
App({ userModel: UserModel,
    loginModel : LoginModel,
    productoModel: ProductoModel
 });