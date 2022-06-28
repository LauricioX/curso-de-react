
obs: trata-se de passar nao apenas o valor da variavel use state mais tambem a função que ira atribuir o valor a esse parametro;
e isso tambem é possivel ultilizando props;

veja o exeplo a seguir:


## APP PRINCIPAL

import React,{useState} from "react";
import Heade from "./Heade"

 function App(){
   const [nome,setNome] = useState("");
  return(
  <>
   
  <Heade setNome={setNome} nome={nome} idade={"23"}/>
  
  </>
)
}
export default App;




## COMPONENT


import React from "react";

class Heade extends React.Component{
  constructor(props){
    super(props)
    l
    
    
  }
  
  render(){
    return(
      <>
        
        <p>
       meu nome é : {this.props.nome}
        </p>
         <input onChange={(e)=> this.props.setNome(e.target.value)} type="text" />
        <p>
       eu tenho {this.props.idade}
      </p>

        <p>
        </p>
      </>
    )
  }
}

export default Heade; 
