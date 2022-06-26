import React,{useState} from "react"; 

export default function App(){
 const [form,setForm] = useState(
   {"nome":"","curso":"","ano":""}
 );

 const getValue = (e) => {
    if(e.target.getAttribute("name") == "fnome"){
   setForm({"nome":e.target.value,"curso":form.curso,"ano":form.ano})
   }else
     if(e.target.getAttribute("name") == "fcurso"){
   setForm({"nome":form.nome,"curso":e.target.value,"ano":form.ano})
   }else
     if(e.target.getAttribute("name") == "fano"){
      
   setForm({"nome":form.nome,"curso":form.curso,"ano":e.target.value})
   }
   
 }  
  return(
  <>
    <input type="text"  name="fnome" 
      onChange= {(e) => getValue(e)} />
    
     <input type="text"  name="fcurso" 
         onChange= {(e) => getValue(e)}
       />
    
     <input type="text"  name="fano"
         onChange= {(e) => getValue(e)}
       />
 
    <p>nome:{form.nome}</p>
    <p>curso:{form.curso}</p>
    <p>ano:{form.ano}</p>
  </>
    
  );
}
