import "./VideoPlayer.scss";
function VideoPlayer({ image }) {
  return (
    <>
      <div>
        <video className="video" controls poster={image}></video>
      </div>
    </>
  );
}

export default VideoPlayer;
