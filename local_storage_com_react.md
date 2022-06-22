
import React,{useState} from "react";
function App() {
 const [nomeDB,setDB] = useState();

 const sendDB =(dbNome,dbValue) => {
  localStorage.setItem(dbNome,dbValue);

 }

 const getDB = (nome) =>{
  localStorage.getItem(nome);
  alert(localStorage.getItem(nome))
 }

const removeDB = (nome) =>{
  localStorage.removeItem(nome);
}


return(
  <>
  <p>enviar seu nome</p> <br/>
  <input type="text" value={nomeDB} onChange={(e)=>setDB(e.target.value)} /> <br/>
  <button onClick={()=>sendDB("localDb",nomeDB)}>criar DB</button>
  <button onClick={()=>getDB("localDb")}>pegar DB</button>
  <button onClick={()=>removeDB("localDb")}>deletar DB</button>

  </>
);
 

}

export default App;
