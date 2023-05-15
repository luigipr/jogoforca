// import palavras from "./palavras"
// import App from "./App"
// import { useState } from "react";
import forca0 from './assets/img/forca0.png'
import forca6 from './assets/img/forca6.png'



export default function Jogo({selectedWord, answer, setSelectedWord, setClickedLetters, hangImage, setHangImage,
  pickedWord, setPickedWord, setStartGame, underLine, setUnderLine, win, setWin, setWrongPlays, setKeyboard,
   setAnswer, getRandomWord, setButtonEnabled}) {

  //const [word, words, setWord] = ...props

  // let word = props.word
  // let setWord = props.setWord
  // let words = props.words
  // let word2 = word.split();


//   function selectWord() {

//     const choosenWord = Array.from(getRandomWord())
//     setSelectedWord(choosenWord.join(""))
//     const under = choosenWord.map((letra) => letra.replace(letra, " _ "))
//     setAnswer(choosenWord.join(""))
//     setUnderLine(under)
//     setPickedWord('word')
//     setKeyboard('letter active')
//     setStartGame(true)
//     setWin(false)
//     setHangImage(forca0)
//     setWrongPlays(0)
//     setClickedLetters([])
// }

  function comecarJogo(props) {
    const choosenWord = Array.from(getRandomWord())
    setSelectedWord(choosenWord.join(""))
    const under = choosenWord.map((letra) => letra.replace(letra, " _ "))
    setAnswer(choosenWord.join(""))
    setUnderLine(under)
    setPickedWord('word')
    setKeyboard('letter active')
    setStartGame(true)
    setWin(false)
    setHangImage(forca0)
    setWrongPlays(0)
    setClickedLetters([])

    // const choosenWord = Array.from(getRandomWord())
    //   setSelectedWord(choosenWord.join(""))
    //   const under = choosenWord.map((letra) => letra.replace(letra, " _ "))
    //     setAnswer(choosenWord.join(""))
    //     setUnderLine(under)



    // setWord(words[Math.floor(Math.random() * words.length)]);
    // setSelectedWord(choosenWord.join(""))
    // const under = choosenWord.map((letra) => letra.replace(letra, " _ "))

      setButtonEnabled(true)
  }
    //{() => setButtonEnabled(true)}
        //{nome} em classname word

    return (
      <div className='jogo'>

        <div className='proprietiesimg'>
          <img data-test="game-image" src={hangImage} alt="forca"></img>

        </div>

        <div className='proprieties'>
          <div className='restart chooseWord' data-test='choose-word'> <button className="chooseWord" data-test='choose-word' onClick={comecarJogo}><p>Escolher palavra</p></button></div>
          <h1 data-test="word" data-answer={answer} 
          className={` word ${pickedWord} ${hangImage === forca6 ? (win ? "green" : "red") : ""} ${win ? "green" : ""}`}>{underLine}</h1>
          
        </div>
      </div>
    )
  
}

