import "./VideoPlayer.scss";
function VideoPlayer({ image }) {
  return (
    <>
      <div className="video">
        <video className="video__player" controls poster={image}></video>
      </div>
    </>
  );
}

export default VideoPlayer;
