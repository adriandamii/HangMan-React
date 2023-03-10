export default function Keyboard(props) {
  return (
    <div id="keyboardContainer">
      {props.alphabet.map(function (letter, index) {
        return (
          <button
            disabled={props.disable}
            id={'button' + index}
            className="keyboard"
            key={index}
            value={letter}
            onClick={props.checkLetter}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
}
