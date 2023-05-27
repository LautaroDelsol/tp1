import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import {contact, home} from "./Routes/myRoutes"
function App  ()  {
  return (
    <>
       
       <BrowserRouter>
        <Routes>
          <Route path={home}  element={<Home/>}/>
          <Route path={contact} element={<Contact/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App