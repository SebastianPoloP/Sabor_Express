// Importaciones necesarias
import { Footer } from "../../footer/footer";
import { NavBar } from "../../header/header";
import familiarCombo from '../../../images/Combo Familiar.jpg';
import comboTriple from '../../../images/Combo triple.jpg'
import dosPorUno from '../../../images/2x1.jpg';
import './index.css';

// Componente para crear la pagina de inicio
export function Index() {
  return (
    // Código JSX para estructurar la pagina
    <div>
      <NavBar />
      <div className="image-section">
        <div className="image-container">
          <img className='img' src={familiarCombo} alt="Combo Familiar" />
          <h3 className="titulo">Combo Familiar</h3>
          <p className="description">Alimenta a toda la familia con nuestro combo especial
            que incluye hamburguesas, papas fritas y gaseosa para todos.
            ¡Una oferta que no puedes dejar pasar!</p>
          <button className="buttonIndex" type="submit">Ver mas</button>
        </div>
        <div className="image-container">
          <img className='img' src={comboTriple} alt="Mega Combo" />
          <h3 className="titulo">¡Mega Combo!</h3>
          <p className="description">¡Sorpréndete con nuestro Mega Combo!
            Por un precio irresistible, obtén 3 hamburguesas de tu elección,
            3 órdenes grandes de papas fritas, 3 refrescos grandes, y como cortesía,
            una ración de aros de cebolla y un postre sorpresa.
            ¡La combinación perfecta para compartir y disfrutar al
            máximo con tus amigos o familiares!</p>
          <button className="buttonIndex" type="submit">Ver mas</button>
        </div>
        <div className="image-container">
          <img className='img' src={dosPorUno} alt="2x1 en Hamburguesas los Martes" />
          <h3 className="titulo">2x1 en Hamburguesas los Martes</h3>
          <p className="description">Disfruta de nuestras hamburguesas al doble de sabor
            por el mismo precio. Solo los martes, ¡no te lo pierdas!</p>
          <button className="buttonIndex" type="submit">Ver mas</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}