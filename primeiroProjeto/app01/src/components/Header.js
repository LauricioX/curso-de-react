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
