export default function Lines(props) {
  return (
    <div className="hidden-word">
      {props.arrLines.map((line) => {
        return (
          <span className="lines" key={line.id}>
            {line.line}
          </span>
        );
      })}
    </div>
  );
}
