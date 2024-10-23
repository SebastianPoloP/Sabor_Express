import { App } from './app.js';
import { UserModel } from './model/user-model.js';

// Forma para agregar el modelo lo mas lejos posible para poder hacer testing
App({ userModel: UserModel });