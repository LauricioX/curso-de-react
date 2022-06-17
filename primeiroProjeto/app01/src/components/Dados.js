import React from "react";


export default function Dados(props){
    let n1 = 12;
    let n2 =  23;
    const corDeTexto = {
      color:"#00ff",
      fontSize:"3.2rem"
    }
      return (
          <>
          <div className="dados__container">
             <div className="dados__conraner__subcard">
                 <p style={corDeTexto}> nome : {props.nome}</p>
                 <p> {"A Soma de " + n1 + " com " + n2 + " é igual a " + props.soma(n1,n2) }</p>
                 
             </div>
          </div>
          </>
      )
  }