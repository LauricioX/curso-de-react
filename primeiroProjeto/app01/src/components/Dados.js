import React from "react";

export default function Dados(props){
    return (
        <>
        <div className="dados__container">
           <div className="dados__conraner__subcard">
               <p> nome : {props.nome}</p>
           </div>
        </div>
        </>
    )
}