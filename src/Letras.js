
const alfabeto = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Button (props) {
    console.log(props)
    return (
        <button  disabled >{props}</button>
    )
}

export default function Buttons() {
    return (
        <div className="buttons" >
    {alfabeto.map((letra) => {
        return <Button key={letra} nome={letra} />
    }
    )
    } 
    </div>
    )
}