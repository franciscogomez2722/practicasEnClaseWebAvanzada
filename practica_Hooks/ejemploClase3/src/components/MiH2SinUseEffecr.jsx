
import React, { useState} from 'react'

//Suer importante conciderar el useEffect <--------------


function MiH2SinUseEffecr() {

    const[text, setText] = useState("");

    const handleText = (evento) => {
        setText(evento.target.value);
    }


    return (

        <div>
            <input type="text" onChange={handleText} />
            <p>{text}</p>
        </div>
       
    )
}

export default MiH2SinUseEffecr