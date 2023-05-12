import Jogo from './Jogo'
import palavras from './palavras';
import Letters from './Letras';
import { useState } from 'react';
import forca0 from './assets/img/forca0.png'
import forca1 from './assets/img/forca1.png'
import forca2 from './assets/img/forca2.png'
import forca3 from './assets/img/forca3.png'
import forca4 from './assets/img/forca4.png'
import forca5 from './assets/img/forca5.png'
import forca6 from './assets/img/forca6.png'



export default function App() {
  const words = palavras
  const [word, setWord] = useState('');
  const [clicados, setClicados] = useState([]);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  const [selectedWord, setSelectedWord] = useState("")
  const [underLine, setUnderLine] = useState([])
  const [keyboard, setKeyboard] = useState('letter')
  const [pickedWord, setPickedWord] = useState('word hidden')
  const [clickedLetters, setClickedLetters] = useState([])
  const [startGame, setStartGame] = useState(false)
  const [hangImage, setHangImage] = useState(forca0)
  const [wrongPlays, setWrongPlays] = useState(0)
  const [win, setWin] = useState(false)
  const [guess, setGuess] = useState("")
  const [answer, setAnswer] = useState("")

  function getRandomWord() {
    return palavras[Math.floor(Math.random() * (palavras).length)]
  }

console.log(buttonEnabled)


  function botoesClicados(i){
    const novoArray = [...clicados];
    novoArray.push(i);
    setClicados(novoArray);
    //setFinalizadas([...finalizadas, i]);
  }



  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Jogo 
      selectedWord={selectedWord}
      setSelectedWord={setSelectedWord}
      setKeyboard={setKeyboard}
      pickedWord={pickedWord}
      setPickedWord={setPickedWord}
      setClickedLetters={setClickedLetters}
      underLine={underLine}
      setUnderLine={setUnderLine}
      setStartGame={setStartGame}
      hangImage={hangImage}
      setHangImage={setHangImage}
      setWrongPlays={setWrongPlays}
      win={win}
      setWin={setWin}
      answer={answer}
      setAnswer={setAnswer}
      getRandomWord={getRandomWord}
      word={word} setWord={setWord} words={words} setButtonEnabled={setButtonEnabled}/>

    <div>
      <Letters  
      buttonEnabled={buttonEnabled}
      keyboard={keyboard}
      setKeyboard={setKeyboard}
      selectedWord={selectedWord}
      setSelectedWord={setSelectedWord}
      getRandomWord={getRandomWord}
      clickedLetters={clickedLetters}
      setClickedLetters={setClickedLetters}
      underLine={underLine}
      setUnderLine={setUnderLine}
      startGame={startGame}
      setStartGame={setStartGame}
      setHangImage={setHangImage}
      wrongPlays={wrongPlays}
      setWrongPlays={setWrongPlays}
      setWin={setWin}/>
    </div>
    
    </div>

  );
}

