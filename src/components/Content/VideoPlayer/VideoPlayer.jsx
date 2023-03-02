import "./VideoPlayer.scss";
function VideoPlayer(props) {
  return (
    <>
      <div>
        <img className="video" src={props.image} alt={props.description} />
        <p>{props.duration}</p>
      </div>
    </>
  );
}

export default VideoPlayer;
