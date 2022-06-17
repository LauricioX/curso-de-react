import React from "react";
import card from "./images/imagens__card/lg.png"

export default function Dados(){

return(
    <>
    <section className="dados__container">
     <div className="cards__container">
             <div className="cad">
                <h1 className="card__title">teste1</h1>
                <div className="card__pic">
                    <img src= {card}/>
                </div>
             </div>
    </div>     
    </section>
    </>
)

}