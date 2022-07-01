import React from "react";
 class Carro extends React.Component{
   constructor(props){
   super(props)
   this.nome = "lauricio"
    this.state={
     ligado:false
      
    }
   }

   ligar(){
     this.setState({ligado:!this.state.ligado})
   }
   render(){
     return(
       <>
         <p> Olá Mundo meu nome é {this.nome} </p>
         <p> {this.state.ligado?"esta ligado":"esta desligado"}</p>
         <button onClick={()=>this.ligar()}>{this.state.ligado?"desligar":"ligar"}</button>
       </>
     )
   }
 }

export default  Carro;
