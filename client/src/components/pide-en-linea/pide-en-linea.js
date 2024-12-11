// Imports necesarios
import './pide-en-linea.css';
import { Footer } from "../footer/footer";
import { NavBar } from "../header/header";
import hamburguesa from '../../images/HAMBURGUESA.jpg';
import sandwiches from '../../images/Sándwiches.jpg';
import pollo from '../../images/pollo.jpg';
import bebidas from '../../images/Bebidasgaseosas.jpg';
import tacos from '../../images/tacos-al-pastor-receta.jpg';
import papasFritas from '../../images/un-plato-de-patatas-fritas-recien-hechas.jpg';

// Componente React para crear la página de Pedir en Linea
export function PideEnLinea(){
  return (
    // Código JSX para realizar la estructura de la pagina
    <div>
      <NavBar/>
      <div className="productos">
        <div className="producto">
            <img src={hamburguesa} alt="Hamburguesa"/>
            <h2>Hamburguesas</h2>
        </div>

        <div className="producto">
            <img src={sandwiches} alt="Sándwiches"/>
            <h2>Sándwiches</h2>
        </div>

        <div className="producto">
            <img src={pollo} alt="Pollo"/>
            <h2>Pollo</h2>
        </div>

        <div className="producto">
            <img src={bebidas} alt="Bebidas"/>
            <h2>Bebidas</h2>
        </div>

        <div className="producto">
            <img src={tacos} alt="Tacos"/>
            <h2>Tacos</h2>
        </div>

        <div className="producto">
            <img src={papasFritas} alt="Papas fritas"/>
            <h2>Papas fritas</h2>
        </div>

    </div>
    <h1>Nuestros productos!</h1>
    <div className="producto-escogido">
      
    </div>
    <Footer/>
    </div>
  )
}