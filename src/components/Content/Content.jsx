import { useState } from "react";
import "./Content.scss";
import VideoData from "../../data/videos.json";
import VideoDetails from "../../data/video-details.json";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";

function Content() {
  const [videos, setVideos] = useState(VideoData);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [id, setId] = useState(videos[0]);

  let currentVideoDetails = VideoDetails[0];

  const [duration, setDuration] = useState(currentVideoDetails.duration);

  const [title, setTitle] = useState(currentVideoDetails.title);
  const [channel, setChannel] = useState(currentVideoDetails.channel);
  const [timestamp, setTimestamp] = useState(currentVideoDetails.timestamp);
  const [views, setViews] = useState(currentVideoDetails.views);
  const [likes, setLikes] = useState(currentVideoDetails.likes);
  const [description, setDescription] = useState(currentVideoDetails.description);
  const [comments, setComments] = useState(currentVideoDetails.comments);
  const [image, setImage] = useState(currentVideoDetails.image);

  return (
    <>
      {/* {videos.map((video) => (
        <img src={video.image} alt="" />
      ))} */}
      <VideoPlayer image={image} duration={duration} description={description} />
      <VideoDescription />
    </>
  );
}

export default Content;
