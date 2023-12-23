const Buttons = (props) => {
  return (
    <div className="start">
      <div>
        <button onClick={props.onPause}>Pause</button>
        <button onClick={props.active ? props.onRestart : props.onPlay}>
          {props.active ? "Restart" : "Play"}
        </button>
      </div>
    </div>
  );
};
export default Buttons;
