import React,{useEffect,useState} from "react";
function App() {
  const [contagem,setCont] = useState(1);

  useEffect(
    ()=>{
       console.log("pagtina ok")
       document.title = "contagem: " + contagem 
      
      }
    )

  return (
 <>
 <p>contagem : {contagem}</p>
 <button onClick={()=>setCont(contagem + 1)}>+1</button>
 
 </> 

 );
}

export default App;

