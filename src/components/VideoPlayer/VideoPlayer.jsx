import "./VideoPlayer.scss";
import { useRef, useEffect, useState } from "react";
import { apiParams } from "../../Api";

function VideoPlayer({ image, video }) {
  const videoContainer = useRef(null);
  const videoPlayer = useRef();
  const videoControls = useRef();
  const playpause = useRef();
  const muteButton = useRef();
  const currentTimeText = useRef();
  const durationText = useRef();

  const progress = useRef();
  const progressBar = useRef();

  const fullScreenButton = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const [duration, setDuration] = useState(0);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const formatTime = (time) => {
    if (!time) return "0:00";
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
  };

  useEffect(() => {
    videoPlayer.current.controls = false;
    videoControls.current.setAttribute("data-state", "visible");

    setDuration(videoPlayer.current.duration);
    durationText.current.innerHTML = formatTime(videoPlayer.current.duration);
    progress.current.setAttribute("max", videoPlayer.current.duration);

    playpause.current.addEventListener("click", function (e) {
      if (isPlaying) {
        videoPlayer.current.pause();
        setIsPlaying(false);
      } else {
        videoPlayer.current.play();
        setIsPlaying(true);
      }
    });

    muteButton.current.addEventListener("click", function (e) {
      if (isMuted) {
        videoPlayer.current.muted = false;
        setIsMuted(false);
      } else {
        videoPlayer.current.muted = true;
        setIsMuted(true);
      }
    });

    progress.current.addEventListener("click", function (e) {
      var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
      videoPlayer.current.currentTime = pos * videoPlayer.current.duration;
    });

    fullScreenButton.current.addEventListener("click", function (e) {
      if (!isFullScreen) {
        videoPlayer.current.requestFullscreen();
        setIsFullScreen(true);
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
        setIsFullScreen(false);
      }
    });
  }, [isPlaying, isMuted, duration, isFullScreen]);

  const handleTimeUpdate = () => {
    currentTimeText.current.innerHTML = formatTime(videoPlayer.current.currentTime);

    if (!progress.current.getAttribute("max")) progress.current.setAttribute("max", videoPlayer.current.duration);
    progress.current.value = videoPlayer.current.currentTime;
    progressBar.current.style.width = Math.floor((videoPlayer.current.currentTime / videoPlayer.current.duration) * 100) + "%";
  };

  return (
    <>
      <div ref={videoContainer} className={"video"}>
        <video ref={videoPlayer} loop className="video__player" poster={image} src={video ? `${video}${apiParams}` : "https://project-2-api.herokuapp.com/stream?api_key=1"} onTimeUpdate={handleTimeUpdate}></video>
        <div ref={videoControls} id="video-controls" className="video__controls" data-state="hidden">
          <div className="video__controls--group">
            <button ref={playpause} className={isPlaying ? "video__button video__button--pause" : "video__button video__button--play"} type="image"></button>
          </div>
          <div className="progress video__controls--group">
            <progress ref={progress} className="progress__element" id="progress" value="0" min="0" max="1">
              <span ref={progressBar} id="progress__bar"></span>
            </progress>
            <span ref={currentTimeText} className="progress__text progress__time">
              0:00
            </span>
            <span className="progress__text">/</span>
            <span ref={durationText} className="progress__text progress__total">
              0:00
            </span>
          </div>
          <span className="video__controls--group">
            <button ref={fullScreenButton} className="video__button video__button--fullscreen" id="fs" type="image"></button>
            <button ref={muteButton} className={isMuted ? "video__button video__button--unmute" : "video__button video__button--mute"} id="mute" type="image"></button>
          </span>
        </div>
      </div>
    </>
  );
}

export default VideoPlayer;
