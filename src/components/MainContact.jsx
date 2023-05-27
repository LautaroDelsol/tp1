

const MainContact = () => {
  return (
    <>
           <div className="form2">
          <h1 className='h1_form'>Contacto:</h1>
          <form  className="form1">
                  <label className="label_form">Nombre:</label><input type="text" placeholder="Ingrese su nombre"/><br />
                  <label className="label_form">Apellido:</label><input type="text" placeholder="Ingrese su Apellido"/><br />
                  <label className="label_form">Email:</label><input type="email" placeholder="Ingrese su Email"/><br />
                  <label className="label_form">Numero de contacto:</label><input type="text" placeholder="Ingrese su numero"/><br />
                  <button className="btn btn-danger">Enviar</button>
                
          </form>
            </div>

    </>
  )
}

export default MainContact