import { useState } from "react"
import lau from "../assets/fotomia.jpg"
import {MDBCard, MDBCardBody, MDBCardImage, } from 'mdb-react-ui-kit';


const About = () => {
  
  
   const [num, setNum] = useState(1);
   const handleclick = () => {
   num > 3 ? setNum(1) :  setNum(num + 1)
   }




  return (
    <>
      <h2 className="h2_about">Sobre mi</h2>
      <div className="div_about_caja">
        <div className="caramia">
        <MDBCard>
            <MDBCardImage src={lau} position='top' alt='...' />
            <MDBCardBody>
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="fotos">
        <MDBCard>
            <MDBCardImage src={`/${num}.jpg`} position='top' alt='...' />
            <MDBCardBody>
              
              <buttom onClick={handleclick}>Cambiar</buttom> 
              
            </MDBCardBody>
          </MDBCard>

        </div>



      </div>



    </>
  )
}

export default About