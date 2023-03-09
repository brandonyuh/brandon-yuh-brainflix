import "./VideoPlayer.scss";
import { apiParams } from "../../Api";
function VideoPlayer({ image, video }) {
  return (
    <>
      <div className="video">
        <video className="video__player" controls poster={image} src={`${video}${apiParams}`}>
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
