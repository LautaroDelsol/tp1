import { BrowserRouter , Routes, Route } from "react-router-dom"
import Contact from "./pages/Contact"
import AboutCv from "./pages/AboutCv"
import Home from "./pages/Home"
//import {home, contact , aboutcv} from "./Routes/myRoutes"
function App  ()  {
  return (
    <>
       
       <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Home/>} />
          <Route path= "Contact" element={<Contact/>} />
          <Route path= "AboutCv" element ={<AboutCv/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App