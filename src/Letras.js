
import { useState } from "react"

const alfabeto = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Buttons(props) {


    return (
        <div className="buttons" >
    {alfabeto.map((letter, index ) => {
        return <Button  key={letter} i={index} nome={letter} setButtonEnabled={props.setButtonEnabled} buttonEnabled={props.buttonEnabled}/>
    }
    )
    } 
    </div>
    )
}

function Button (props) {
    //console.log(props)
    const[habilitado, setHabilitado] = useState('')



    
    return (
        <button className="button" data-test='letter' disabled={!props.buttonEnabled} >{props.nome}</button>
    )
}

