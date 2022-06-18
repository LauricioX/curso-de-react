import React from "react";

export default function Relogio(){
    return (
    <>
    <p style={{ textAlign:"center", fontSize:"2rem"}}>
        {new Date().toLocaleTimeString()}
    </p>
    
    </>
    );
}