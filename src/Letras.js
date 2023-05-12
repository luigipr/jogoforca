
import { useState } from "react"
import "./css/style.css"
import forca0 from './assets/img/forca0.png'
import forca1 from './assets/img/forca1.png'
import forca2 from './assets/img/forca2.png'
import forca3 from './assets/img/forca3.png'
import forca4 from './assets/img/forca4.png'
import forca5 from './assets/img/forca5.png'
import forca6 from './assets/img/forca6.png'

const alfabeto = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function Letters({ selectedWord, setSelectedWord, clickedLetters, setClickedLetters, underLine, setUnderLine,
     wrongPlays, setWrongPlays, setHangImage, startGame, setStartGame, setWin, getRandomWord, hangImage, buttonEnabled,setButtonEnabled, name }) {


    function changeImage() {
        if (wrongPlays + 1 === 0) {
            return forca0
        }
        if (wrongPlays + 1 === 1) {
            return forca1
        }
        if (wrongPlays + 1 === 2) {
            return forca2
        }
        if (wrongPlays + 1 === 3) {
            return forca3
        }
        if (wrongPlays + 1 === 4) {
            return forca4
        }
        if (wrongPlays + 1 === 5) {
            return forca5
        }
        if (wrongPlays + 1 === 6) {
            return forca6
        }
    }

    const choosenWord = Array.from(selectedWord)
    function click(letter) {


        const disabeLetters = [...clickedLetters, letter]
        setClickedLetters(disabeLetters)
        if (choosenWord.includes(letter)) {
            choosenWord.forEach((l, i) => {
                if (l === letter) {
                    let mostrar = underLine
                    mostrar[i] = letter
                    setUnderLine(mostrar)
                }
            })
        } else {
            const wrong = wrongPlays + 1
            setWrongPlays(wrong)
            console.log(wrong)
            setHangImage(changeImage)
            console.log(hangImage)
            if (wrong === 6) {
                setStartGame(false)
                setUnderLine(selectedWord)
                setWin(false)
                setSelectedWord(getRandomWord())
            }
        }
        if (choosenWord.every(item => disabeLetters.includes(item))) {
            setWin(true)
            setStartGame(false)
            setUnderLine(selectedWord)
            setSelectedWord(getRandomWord())
        }
    }

    return (
        <div className="buttons" >
    {alfabeto.map((letter, index ) => { return (        
        <button data-test="letter" key={letter} i={index} name={letter} setButtonEnabled={setButtonEnabled} buttonEnabled={buttonEnabled}
        disabled={startGame ? (clickedLetters.includes(letter) ? true : false) : true} 
        onClick={() => click(letter)} className={`letter ${startGame ? "active" : ""} ${clickedLetters.includes(letter) ? "desactive" : ""}`}>
        {letter.toUpperCase()}</button> )

        // return <Button  key={letter} i={index} nome={letter} setButtonEnabled={setButtonEnabled} buttonEnabled={buttonEnabled}/>
    })} 
    </div>
    )
}

// function Button ({ selectedWord, setSelectedWord, clickedLetters, setClickedLetters, underLine, setUnderLine,
//     wrongPlays, setWrongPlays, setHangImage, startGame, setStartGame, setWin, getRandomWord, hangImage, buttonEnabled,setButtonEnabled, nome }) {
//     //console.log(props)
//     const[habilitado, setHabilitado] = useState('')

//     return (
//         <button data-test="letter" key={letter} i={index} nome={letter} setButtonEnabled={setButtonEnabled} buttonEnabled={buttonEnabled}
//         disabled={startGame ? (clickedLetters.includes(letter) ? true : false) : true} 
//         onClick={() => (letter)} className={`letter ${startGame ? "active" : ""} ${clickedLetters.includes(letter) ? "desactive" : ""}`
//         >{props.nome}</button>
//     )
// }

//className="button" data-test='letter' disabled={!props.buttonEnabled}</button>