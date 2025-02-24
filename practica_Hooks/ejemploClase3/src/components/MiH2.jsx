
import React, { useState, useEffect } from 'react'

//Suer importante conciderar el useEffect <--------------


function MiH2() {

    const[text, setText] = useState("");

    const handleText = (evento) => {
        setText(evento.target.value);
    }

    useEffect( () =>{

        //Para el montaje
        console.log("Componente Montado! :)");

        //Return para desmontado
        return () => {
            console.log("Componente Desmontado :p")
        }

    }, [] );

    //Utilizamos la variable para lo modificado
    useEffect ( () => {
        console.log("Texto Modificado")
    },[text])


    return (

        <div>
            <input type="text" onChange={handleText} />
            <p>{text}</p>
        </div>
       
    )
}

export default MiH2
