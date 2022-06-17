import React from "react"
import Dados from "./Dados"
export default function Body(){
    let nm = "lauricio";
    const soma = (v1,v2) =>{
        return v1 + v2;
    }
  
    return (
        <>
        <Dados    nome = {nm} 
        soma = {soma}
        />
        
        
        </>
    )
}