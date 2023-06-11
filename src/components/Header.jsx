import { Link } from 'react-router-dom'
import fotocara from "../assets/fotocara.jpg"


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
                  <Link to="/" className='boton_contacto'>Volver a inicio</Link>
                  <br />
                  <Link to="/AboutCv" className='boton_contacto'>About</Link>
                  </nav>

              </div>
                        
                   
                        
            </header>
    </div>
  )
}

export default Header