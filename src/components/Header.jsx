import fotocara from "../assets/fotocara.jpg"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    
    <div className="divHeader">
            <header>

                        <h1 className="h1Header">Lautaro Joaquin Delsol</h1>
                        <img className="fotocara" src={fotocara} alt="" />
                        <div className='nav'>
                  <nav className="navbar">
                  <Link to="/Contact" className='boton_contacto'>Contacto</Link>
                  <br />
                  <Link to="/Home" className='boton_contacto'>Volver a inicio</Link>
                  </nav>

              </div>
                        
                   
                        
            </header>
    </div>
  )
}

export default Header