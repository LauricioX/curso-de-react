
import React,{useState} from "react";

function App(){

  const carros = [
    {categoria:"gol",preco:"23012",ano:"2011"},
       {categoria:"corola",preco:"4312",ano:"2021"},
       {categoria:"camaro",preco:"2121",ano:"2012"},
     {categoria:"ferrari",preco:"53012",ano:"2022"}
  
    
  ];
  const listaCarros = carros.map(
 (c,i)=> <li key={i}>{i} - {c.categoria} valor R${c.preco} - {c.ano}</li>
    
  )
  return(
    <>
    <ul>
     {listaCarros}
    </ul>
  
    </>
  )
  
}

export default App;
