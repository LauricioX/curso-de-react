import react from "react";
import {BrowserRouter,Route, Routes,Link} from "react-router-dom";[
import Home from "/components/Home"
import Contact from "/components/Contact"


export  default function App(){
  return(
  <BrowserRouter>
   <nav>
    <Link to="/">home</Link>
    <Link to="/contact">contatos</Link>
   </nav>
   
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact"  element={<Contact/>}/>
   </Routes>
        
		
   
  </BrowserRouter>
  )


}
 
