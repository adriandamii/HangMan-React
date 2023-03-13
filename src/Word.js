import React, { useState, useEffect } from 'react';
import Game from './Game';
import { FiAlertTriangle } from 'react-icons/fi';
import axios from 'axios';

export default function Word(props) {
  const [inputValue, setInputValue] = useState('');
  const onStart = props.onStart;
  const [apiWord, setApiWord] = useState('');
  const [randomBool, setRandomBool] = useState(null);
  const [alertEmptyInput, setAlertEmptyInput] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          'https://random-word-api.herokuapp.com/word'
        );
        setApiWord(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    
    fetchData();

    if (inputValue !== '') {
      setAlertEmptyInput(false);
    }
  }, [inputValue]);

  function handleStart() {
    if (inputValue === '') {
      setAlertEmptyInput(true);
    } else {
      props.setOnStart(true);
      setRandomBool(false);
      setAlertEmptyInput(false);
    }
  }

  // eslint-disable-next-line
  const randomWord = JSON.stringify(apiWord).replace(/[\[\]"']+/g, '');
  
  return (
    <>
        {!onStart ? (
          <>
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              style={{ textTransform: 'uppercase' }}
            />
            {alertEmptyInput && <p className='alert-empty-input'><FiAlertTriangle className='icon'/>Type a word, or get a random one!</p>}
          </>
        ) : null}
      <div className="startButtons">
        {!onStart ? (
          <button id="startButton" onClick={handleStart}>
            Start
          </button>
        ) : null}
        {!onStart ? (
          <>
          <h5 className='random'>Get a random word!</h5>
            <button
              id="startButton"
              onClick={() => {
                props.setOnStart(true);
                setRandomBool(true);
              }}
            >
              Random word
            </button>
          </>
        ) : null}
      </div>
      {onStart ? (
        <Game
          inputValue={inputValue}
          randomWord={randomWord}
          randomBool={randomBool}
        />
      ) : null}
      {}
    </>
  );
}
