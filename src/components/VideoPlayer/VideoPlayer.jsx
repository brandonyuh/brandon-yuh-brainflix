import "./VideoPlayer.scss";
import { apiParams } from "../../Api";
function VideoPlayer({ image, video }) {
  return (
    <>
      <div className="video">
        <video className="video__player" controls poster={image} src={video ? `${video}${apiParams}` : "https://project-2-api.herokuapp.com/stream?api_key=1"}></video>
      </div>
    </>
  );
}

export default VideoPlayer;
