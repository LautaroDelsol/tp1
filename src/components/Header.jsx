import fotocara from "../assets/fotocara.jpg"


const Header = () => {
  return (
    <div className="divHeader">
            <header>

                        <h1 className="h1Header">Lautaro Joaquin Delsol</h1>
                        <img className="fotocara" src={fotocara} alt="" />
            </header>
    </div>
  )
}

export default Header