import React from "react";

function Result(props){
return(
<>
<p>resultado das notas: {props.resultado}</p>
<p>{props.resultado >= 60 ? "aprovado":"reprovado"}</p>

</>
);

}

export default Result;