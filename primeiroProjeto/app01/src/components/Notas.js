import React from "react";

function Notas(props){
    return (
 <>
 <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
<label>informe a nota: {props.num}</label>
<input  type="text" value={props.nota} onChange={(e)=>props.setNota(e.target.value)}/>



 </div>


 </>
);
}

export default Notas;