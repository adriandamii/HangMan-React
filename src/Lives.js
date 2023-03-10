import hm0 from './hangman/HangMan_0.png';
import hm1 from './hangman/HangMan_1.png';
import hm2 from './hangman/HangMan_2.png';
import hm3 from './hangman/HangMan_3.png';
import hm4 from './hangman/HangMan_4.png';
import hm5 from './hangman/HangMan_5.png';
import hm6 from './hangman/HangMan_6.png';
import hm7 from './hangman/HangMan_7.png';
import hm8 from './hangman/HangMan_8.png';
import hm9 from './hangman/HangMan_9.png';
import hm10 from './hangman/HangMan_10.png';
import winHM from './hangman/winHangman.png';

export default function Lives(props) {
  let hangArrImages = [];
  hangArrImages.push(hm0, hm1, hm2, hm3, hm4, hm5, hm6, hm7, hm8, hm9, hm10);

  return (
    <div id="lives">
      {hangArrImages.map((hangNr, index) => {
        if (index === props.lives && props.win === false) {
          return (
            <img
              key={index}
              src={hangNr}
              className="hangman"
              alt="progressPicture"
            />
          );
        }
        return null;
      })}
      {props.win && <img src={winHM} alt="winPicture" className="hangman" />}
      {props.win && <h3 id="win">Congratulations!</h3>}
      {props.randomBool === false && props.lives === 0 && (
        <h3 id="gameOverWord">The word is {props.inputValue}</h3>
      )}
      {props.randomBool === true && props.lives === 0 && (
        <h3 id="gameOverWord">The word is {props.randomWord}</h3>
      )}
      {(props.lives === 0 || props.win) && (
        <button
          onClick={() => window.location.reload(false)}
          className="restartButton"
        >
          Play again
        </button>
      )}
    </div>
  );
}
