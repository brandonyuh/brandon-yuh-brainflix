import "./VideoPlayer.scss";
import { useRef, useEffect, useState } from "react";
import { apiParams } from "../../Api";
function VideoPlayer({ image, video }) {
  const videoContainer = useRef();
  const videoPlayer = useRef();
  const videoControls = useRef();
  const playpause = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    videoPlayer.current.controls = false;
    videoControls.current.setAttribute("data-state", "visible");

    playpause.current.addEventListener("click", function (e) {
      if (isPlaying) {
        videoPlayer.current.pause();
        setIsPlaying(false);
      } else {
        videoPlayer.current.play();
        setIsPlaying(true);
      }
    });
  }, [isPlaying]);

  return (
    <>
      <div ref={videoContainer} className="video">
        <video ref={videoPlayer} loop className="video__player" poster={image} src={video ? `${video}${apiParams}` : "https://project-2-api.herokuapp.com/stream?api_key=1"}>
          
        </video>
        <div ref={videoControls} id="video-controls" className="video__controls" data-state="hidden">
          <button ref={playpause} type="button" data-state="play">
            Play/Pause
          </button>
          <div className="progress">
            <progress id="progress" value="5" min="0" max="10">
              <span id="progress-bar"></span>x
            </progress>
          </div>
          <button id="fs" type="button" data-state="go-fullscreen">
            Fullscreen
          </button>
          <button id="mute" type="button" data-state="mute">
            Mute/Unmute
          </button>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
