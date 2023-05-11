import palavras from "./palavras"
import App from "./App"
import { useState } from "react";
import forca0 from './assets/img/forca0.png'
import forca1 from './assets/img/forca1.png'
import forca2 from './assets/img/forca2.png'
import forca3 from './assets/img/forca3.png'
import forca4 from './assets/img/forca4.png'
import forca5 from './assets/img/forca5.png'
import forca6 from './assets/img/forca6.png'



export default function Jogo(props) {
    console.log(props)
    //const [word, words, setWord] = ...props

     let word = props.word
     let setWord = props.setWord
     let words = props.words
     let word2 = '';

    function comecarJogo () {

    setWord(words[Math.floor(Math.random() * words.length)]);

  
    for (let i = 0; i < word.length; i++) {
         word2 += "_ ";        
    }
    console.log(word2)


}


    return (
        <div className='jogo'>
        
        <div className='proprietiesimg'>
        <img src={forca0} alt="forca"></img>
        </div>
        
        <div className='proprieties'>
          <div   className='restart'> <button onClick={comecarJogo}><p>Escolher palavra</p></button></div>
          <div className='word'> <p>{word}</p></div>
        </div>

      </div>
    )
}

