import React from "react";
import {Switch,Route,Link,Navigate,Routes} from "react-router-dom";
import Pagina01 from "./components/Pagina01"
import Pagina02 from "./components/Pagina02"


function App(){

  return(
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/components/Pagina01'>pagina 01</Link>
        <Link to='/components/Pagina02'>pagina 02</Link>
      </div>

      <Routes>
        <Route path="/components/Pagina01" element={<Pagina01/>}/>
        <Route path="/components/Pagina02" element={<Pagina02/>}/>
      </Routes>
    </>
  )
 
  }
export default App;
