import React,{useState} from "react";
import Globais from "./components/Globais";


function App(){

  const [nome,setNome] = useState(Globais.nome);

  const mudaNome = () =>{
   Globais.nome = nome
  }



  return(
    <>
    <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
    <button onClick={()=>mudaNome()}>salvar nome</button>

    <button onClick={()=>alert(Globais.nome)}>alert</button>
    </>
  )
 
  }
export default App;
