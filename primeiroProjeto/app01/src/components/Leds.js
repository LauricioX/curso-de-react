import React from "react";
import Liga  from "./images/aq.png"
import Desliga  from "./images/as.webp"

export default function Leds(props){
    
    return(
        <>

        <img style={{width:"230px"}} src={props.ligado?Liga:Desliga}/>
        <button onClick={()=> props.setLigado(!props.ligado)}>{props.ligado?"desligar":"ligar"}</button>
        <button onClick={()=> props.setOK(alert(props.ok))}>ok</button>
        </>
    )
}