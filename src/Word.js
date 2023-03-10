import React, { useState, useEffect } from 'react';
import Game from './Game';
import axios from 'axios';

export default function Word(props) {
  const [inputValue, setInputValue] = useState('');
  const onStart = props.onStart;
  const [apiWord, setApiWord] = useState('');
  const [randomBool, setRandomBool] = useState(null);

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
  }, []);

  const randomWord = JSON.stringify(apiWord).replace(/[\[\]"']+/g, '');
  
  return (
    <>
      <div>
        {!onStart ? (
          <input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            style={{ textTransform: 'uppercase' }}
          />
        ) : null}
      </div>
      <div className="startButtons">
        {!onStart ? (
          <button
            id="startButton"
            onClick={() => {
              props.setOnStart(true);
              setRandomBool(false);
            }}
          >
            Start
          </button>
        ) : null}
        {!onStart ? (
          <>
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
