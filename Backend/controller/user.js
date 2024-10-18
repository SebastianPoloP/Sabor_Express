import { validateUser, validateParcialUser } from "../schemas/user.js";

export class UserControler {
  constructor({ userModel }) {
    this.userModel = userModel;
  }
  // Crear un usuario
  createUser = async (req, res) => {
    // tomamos la información enviada por el usuario
    const result = validateUser(req.body);
    // Enviamos un error si la validación es erronea
    if (!result.success) return res.status(400).json({ error: JSON.parse(result.error.message) });

    // Envio de la información al modelo
    const newUser = await this.userModel.createUser({ input: result.data });
    return res.status(201).json(newUser);
  }
  // Actualizar un usuario
  updateUser = async (req, res) => {
    // tomar información del cuerpo de la petición
    const result = validateParcialUser(req.body);
    // Enviamos un error si la validación es erronea
    if (!result.success) return res.status(400).json({ error: JSON.parse(result.error.message) });

    // constante con sintaxis de desestructuración para tomar el id del usuario en la petición
    const { id } = req.params;
    // Enviamos la infromación al modelo
    const updateUser = await this.userModel.updateUser({ id, input: result.data });
    // Se muestra el usuario actualizado
    return res.json(updateUser);
  }
  // Eliminar un usuario
  deleteUser = async (req, res) => {
    const { id } = req.params;
    const deleteUser = await this.userModel.deleteUser({ id });
    if(!deleteUser) return res.status(404).send('<h2>Usuario no encontrado</h2>')
    return res.json({ Message: 'Usuario Eliminado' });
  }
}