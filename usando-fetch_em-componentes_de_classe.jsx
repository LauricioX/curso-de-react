import { Component } from "react";
export class App extends Component{
state = {
  dadosApi: []
}

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((dados) => dados.json())
  .then((dados) => (
this.setState(
  {dadosApi:dados}
)
  ) 

  )


}


  render(){
    const { nome, idade, dadosApi} = this.state
    return(
      <>
        
      {dadosApi.map(dados => (
        <h2 key={dados.id}>{dados.title}</h2>
      )
      )}
      <h3>meu nome é {nome} e tenho {idade} anos de idade</h3>
      </>
    )
  }
}
