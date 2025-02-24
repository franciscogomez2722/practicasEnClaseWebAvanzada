import { useState } from "react";
import MiH2 from "./MiH2";
import ListaPalabras from "./ListaPalabras";
import { ListaPalabras2 } from "./ListaPalabras2";


export const MiText1 = () => {

    const [show, setShow] = useState(true);
 
    function handleShow(){
        setShow(!show);
    }

    return(
        <>
        
            <button onClick={handleShow}>Mostrar / Ocultar </button>
            {show === true && <ListaPalabras2/>}
            {/*{show === true && <ListaPalabras/>}*/}
            {/*{show === true  ? <h2>Hola grupo 102 :D</h2> : <h2>Adios Grupo 102 :c</h2>}*/}
        
        </>
    )
    
};