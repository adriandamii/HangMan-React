import './App.css';
import Word from './Word';
import React, { useState } from 'react';

export default function App() {
  const [onStart, setOnStart] = useState(false);

  return (
    <div className="main">
      <h1>HANGMAN </h1>
      {!onStart && 
        <h5>Type a word and press start or start directly with a random word!</h5>
      }
      <div className='container-game'>
        <Word onStart={onStart} setOnStart={setOnStart} />
      </div>
    </div>
  );
}
