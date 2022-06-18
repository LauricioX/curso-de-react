import React, {useState} from "react";
import "./App.css"
import Header  from "./components/Header"
import Body  from "./components/Body";





export default function App(){
    const [num, setNum] = useState(10)
return(

<>
<Header/>

<Body/>
<p>
    valor:{num}
</p>

<button onClick={() => setNum(num +10)}> adicionar</button>

</>


)

}
