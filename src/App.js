import Jogo from './Jogo'
import palavras from './palavras';
import Buttons from './Letras';
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

      <Jogo word={word} setWord={setWord} words={words} setButtonEnabled={setButtonEnabled}/>

    <div>
      <Buttons  buttonEnabled={buttonEnabled}/>
    </div>
    
    </div>

  );
}

