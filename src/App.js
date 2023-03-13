import './App.css';
import Word from './Word';
import React, { useState } from 'react';

export default function App() {
  const [onStart, setOnStart] = useState(false);

  return (
    <div className="main">
      <h1>HANGMAN </h1>
      <div className='container-game'>
        <Word onStart={onStart} setOnStart={setOnStart} />
      </div>
    </div>
  );
}
