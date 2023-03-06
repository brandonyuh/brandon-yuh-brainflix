import { useState } from "react";
import "./Content.scss";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import VideoComments from "./VideoComments/VideoComments";
import VideoList from "./VideoList/VideoList";

const apiUrl = "https://project-2-api.herokuapp.com/";
const apiParams = "?api_key=3bd9fd1c-d227-4f83-9069-b439b85d08c1";

function Content() {
  let videoList = [];
  let currentVideoDetails = {};

  const [videos, setVideos] = useState(videoList);
  const [video, setVideo] = useState(currentVideoDetails);

  const getVideoDetails = async (id) => {
    try {
      const response = await fetch(apiUrl + "videos/" + id + apiParams);
      const videoDetails = await response.json();
      setVideo(videoDetails);
    } catch (error) {
      console.log("get video error: ", error);
    }
  };

  const updateVideoList = async () => {
    if (videos.length === 0) {
      try {
        const response = await fetch(apiUrl + "videos" + apiParams);
        const videoData = await response.json();
        setVideos(videoData);
        getVideoDetails(videoData[0].id);
      } catch (error) {
        console.log("update videos error: ", error);
      }
    }
  };

  updateVideoList();

  const handleChangeVideo = (id) => {
    setVideo(getVideoDetails(id));
    window.scrollTo(0, 0);
  };

  return (
    <div className="content">
      <VideoPlayer image={video.image} />
      <div className="content__belowvideo">
        <div className="content__leftpane">
          <VideoDescription title={video.title} channel={video.channel} timestamp={video.timestamp} views={video.views} likes={video.likes} description={video.description} />
          <VideoComments comments={video.comments} />
        </div>
        <VideoList id={video.id} videos={videos} handleChangeVideo={handleChangeVideo} />
      </div>
    </div>
  );
}

export default Content;
