# curso-de-react
curso de react com profesor bruno cfb cursos

##########################################################################################################################


## instrutura basica 

import React from "react";

export default function App(){
return(

<>
<p>
  cfb cursos
</p>
</>

)

}

##########################################################################################################################



# usando variaveis 

import React from "react";
import "./App.css"
import Header  from "./components/Header"
const nome = () => "lauricio"
const curso = "react"


export default function App(){
return(

<>
<Header/>
<p>
  {curso}
</p>
</>


)

}



# usoando componentes 

import React from "react";
import logo from "./images/lg.png"
import "../styles/Header.css"

export default function Header(){
return(
    <header className="header__container">
        <img className="logo" src={logo}/>
        <nav>
            <a className="link" href="#">Home</a>
            <a className="link" href="#">About</a>
            <a className="link" href="#">Services</a>
            <a className="link" href="#">Contact</a>
        </nav>
    </header>
)
}


# Usando Props 

import React from "react";

export default function Dados(props){
    return (
        <>
        <div className="dados__container">
           <div className="dados__conraner__subcard">
               <p> nome : {props.nome}</p>
           </div>
        </div>
        </>
    )
}


import React from "react"
import Dados from "./Dados"
export default function Body(){
    let nm = "lauricio"
    return (
        <>
        <Dados    nome = {nm}  />
        </>
    )
}