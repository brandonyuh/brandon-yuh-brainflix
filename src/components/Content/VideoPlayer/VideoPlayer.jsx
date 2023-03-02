import "./VideoPlayer.scss";
function VideoPlayer(props) {
  return (
    <>
      <div>
        <img className="video" src={props.image} alt="" />
        <p>{props.duration}</p>
      </div>
    </>
  );
}

export default VideoPlayer;
