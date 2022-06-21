import React,{useState} from 'react';
import './App.css';

function App() {
  const [nome,setNome]=useState("");
  const [carro,setCarro]=useState("corola");
  
  
  return (
    <>
      <input
        type="text" 
        placeholder='seu nome'
        name="fnome"
        value={nome}
        onChange={(e)=> setNome(e.target.value)}
        />
      <p>Nome digitado: {nome}</p>
      <label>Selecione um carro </label>
        <select value={carro} 
          onChange={(e)=> setCarro(e.target.value)}>
           <option value="ford">ford</option>
           <option value="gol">gol</option>
           <option value="corola">corola</option>
           <option value="arbo">arbo</option>
        </select>
      <p>carro selecionado: {carro}</p>
    </>
  );
}

export default App;
