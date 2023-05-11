

const alfabeto = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



export default function Buttons() {

    function Button (props) {
        //console.log(props)
        return (
            <button className="button" disabled onClick={botaoClickado} >{props.nome}</button>
        )
    }
 
    function botaoClickado() {

    } 



    return (
        <div className="buttons" >
    {alfabeto.map((letter, index ) => {
        return <Button key={letter} i={index} nome={letter} />
    }
    )
    } 
    </div>
    )
}