import { useState } from "react";
import "./Content.scss";
import VideoData from "../../data/videos.json";

function Content() {
  const [videos, setVideos] = useState(VideoData);
  return (
    <>
      {videos.map((video) => (
        <img src={video.image} alt="" />
      ))}
    </>
  );
}

export default Content;
