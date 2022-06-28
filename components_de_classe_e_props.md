## coponentes de classer em react

sintaxe:

import React from "react";

class NomeComponente extends React.component{
render(){
return(
<>
<p>
teste de componente de classe
</p>
</>
)
}
}

export default NomeComponent


## usando props em componentes de classes

import React from "react";

class NomeComponent extends React.component{
contructor(props){
 super(props)
  
}

render(){
  return(
  <>
  <p>
  teste de props em componentes de classes
  use {this.props.variavel}
  </p>
  </>
  )

}


export default NomeComponent;
