import React from "react"

export default class Carro extends React.Component{
    constructor(props){
       super(props)

       this.state = {
        ligado:false
       }

       //function

       this.ld =this.ligarDesliga.bind(this)
    }

    ligarDesliga(){

        this.setState(
            (state)=>(
                {ligado:!state.ligado }
                )
        )
    }

    render(){
        return(
            <>
            <p>status: {this.state.ligado?"ligado":"desligado"}</p>
            <button onClick={this.ld}>mudar</button>
            </>
        )
    }
}
