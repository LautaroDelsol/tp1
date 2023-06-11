import {useState} from "react"
import Table from 'react-bootstrap/Table'


const MainContact = () => {

  const consultas = [
    {id: 1, nombre: "Lautaro Joaquin",
     apellido: "Delsol", email: "lautarodelsol@gmail.com",
     telefono: "3815953758", 
     descripcion: "Descripcion del producto"},
  ]

  const handlersubmit = (e)=>{
    e.preventDefault()
    setPedidos([...pedidos, {id, nombre, apellido, email, telefono}])
    setId(id + 1)
    e.target.reset()
  }

  const deleteConsulta = (id) => {
    const resultado = pedidos.filter(pedido=> pedido.id !== id) 
    setPedidos(resultado)
  }


  const [nombre, setNombre] = useState ("")
  const [apellido, setApellido] = useState ("")
  const [email, setEmail] = useState ("")
  const [telefono, setTelefono] = useState("")
  const [pedidos, setPedidos] = useState (consultas) 
  const [id, setId] = useState(1)




  return (
    <>
           <div className="form2">
          <h1 className='h1_form'>Contacto:</h1>
          <form  className="form1" onSubmit={handlersubmit}>
                  <label className="label_form">Nombre:</label>
                  <input type="text" onChange={(e)=> setNombre(e.target.value)} required placeholder="Ingrese su nombre"/>
                  <br />
                  <label className="label_form">Apellido:</label>
                  <input type="text" onChange={(e)=> setApellido(e.target.value)} placeholder="Ingrese su Apellido"/>
                  <br />
                  <label className="label_form">Email:</label>
                  <input type="email" onChange={(e)=> setEmail(e.target.value)} required placeholder="Ingrese su Email"/>
                  <br />
                  <label className="label_form">Numero de contacto:</label>
                  <input type="text" onChange={(e)=> setTelefono(e.target.value)} required placeholder="Ingrese su numero"/>
                  <br />
                  <button className="btn btn-danger">Enviar</button>
                  <br />
                  <br />  
          </form>

          <Table className="">
                                  <thead>
                                          <tr>
                                                <th>Id</th>
                                                <th>Nombre </th>
                                                <th>Apellido </th>
                                                <th>Email</th>
                                                <th>Descripcion</th>
                                                <th>Telefono</th>
                                          </tr>
                                  </thead>

                                  <tbody>
                                          {pedidos.map(pedido=>
                                            <tr key={pedido.id}>
                                              <td>{pedido.id}</td>
                                              <td>{pedido.nombre}</td>
                                              <td>{pedido.apellido}</td>
                                              <td>{pedido.email}</td>
                                              <td>{pedido.telefono}</td>
                                              <td>
                                              <button onClick={()=>deleteConsulta(pedido.id)}>Eliminar</button>
                                              </td>


                                            </tr>
                                            
                                            )}
                                  </tbody>
                        </Table>






            </div>

  </>

  )
}

export default MainContact