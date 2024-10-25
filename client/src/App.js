// Importaciones necesarias
import './App.css';
// Import para realizar las rutas en React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Index } from './components/pages/index';
import { Login } from './components/login/login.js';
import {FormularioRegistro} from '../src/components/register-user/register-user.js';
import { Contactanos } from './components/pages/contactanos/contactanos.js';
import { PideEnLinea } from './components/pide-en-linea/pide-en-linea.js';

// Componente App para gestionar las rutas de la aplicacion
function App() {
  return (
    // Código JSX para estrucutrar las rutas
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path= '/login/create-user' element={<FormularioRegistro/>}/>
          <Route path='/contactanos' element={<Contactanos/>}/>
          <Route path='/pide-en-linea' element={<PideEnLinea/>}/>
        </Routes>
      </Router>
    )
}

export default App;
