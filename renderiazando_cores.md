import React, { useState } from 'react';
import './App.css';

function App() {

  const [cor,setColor] = useState(1);

  
  const vermelho = {color:"#f00"}
  const verde = {color:"#0f0"}
  const azul = {color:"#00f"}

  const retCor=(c)=>{
  if(c == 1){
    return vermelho;
  }else if(c == 2){
  return verde
  }else{
    return azul
  }
    
  }


  const mudaCor=()=>{
    setColor(cor +1);
    if(cor > 2){
    setColor(1);
    }
  }
  
  
  return (
  <>
    <p style={retCor(cor)}>
       lauricio o mestre
    </p>
    <button onClick={()=> mudaCor()}>Mudar</button>
  </>
  );
}

export default App;
