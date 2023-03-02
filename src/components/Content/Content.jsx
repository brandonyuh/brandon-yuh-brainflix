import { useState } from "react";
import "./Content.scss";
import VideoData from "../../data/videos.json";
import VideoDetails from "../../data/video-details.json";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import VideoComments from "./VideoComments/VideoComments";
import VideoList from "./VideoList/VideoList";

const getVideoDetails = (id) => {
  //replace with API later!
  const filteredVideos = VideoDetails.filter((video) => video.id === id);
  return filteredVideos[0];
};

const getVideoList = () => {
  //replace with API later!
  return VideoData;
};

function Content() {
  const videoList = getVideoList();
  const currentVideoDetails = getVideoDetails(videoList[0].id);

  const [videos, setVideos] = useState(videoList);
  const [video, setVideo] = useState(currentVideoDetails);

  const handleChangeVideo = (id) => {
    setVideo(getVideoDetails(id));
  };

  return (
    <div className="content">
      <VideoPlayer image={video.image} />
      <VideoDescription title={video.title} channel={video.channel} timestamp={video.timestamp} views={video.views} likes={video.likes} description={video.description} />
      <VideoComments comments={video.comments} />
      <VideoList id={video.id} videos={videos} handleChangeVideo={handleChangeVideo} />
    </div>
  );
}

export default Content;
