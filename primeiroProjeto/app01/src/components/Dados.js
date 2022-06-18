import React from "react";
import img  from "./images/lg.png"

export default function Dados(){

return(
    <>
    <section className="dados__container">
        <div className="cards__container">
        <div className="card">
                <h1 className="card__title">teste1</h1>
                <div className="card__pic">
                    <img src={img}/>
                </div>
             </div>
             <div className="card">
                <h1 className="card__title">teste1</h1>
                <div className="card__pic">
                    <img src={img}/>
                </div>
             </div>
             <div className="card">
                <h1 className="card__title">teste1</h1>
                <div className="card__pic">
                    <img src={img}/>
                </div>
             </div>
           
        </div>     
    </section>
    </>
)

}