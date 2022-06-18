import React, {useState} from "react";
import "./App.css"
import Header  from "./components/Header"
import Body  from "./components/Body";
import Leads  from "./components/Leds";






export default function App(){
    const [num, setNum] = useState(10);
    const [ligado,setLigado]=useState(false); 
    const [ok,setOk]=useState("ola mundo")
return(

<>
<Header/>

<Body/>
<p>
    valor:{num}
</p>

<button onClick={() => setNum(num +10)}> adicionar</button>

<Leads ligado={ligado} setLigado={setLigado} setOk={setOk} ok={ok}/>


</>


)

}
