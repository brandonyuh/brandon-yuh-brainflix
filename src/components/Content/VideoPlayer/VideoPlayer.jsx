import "./VideoPlayer.scss";
function VideoPlayer(props) {
  return (
    <>
      <div>
        <video className="video" controls poster={props.image}>
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
