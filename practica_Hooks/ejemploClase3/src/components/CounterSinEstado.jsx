import { useState } from "react";

export const CounterSinEstado = () => {
    //sin utilizar estados
    let number = 0;
    
    //    -----Sin utilizar estados-------
    const sumar = () => { 
        number = number +1;
        console.log(number)
    }
    return(
        <div>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
 
    
};