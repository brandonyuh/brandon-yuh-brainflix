import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Content.scss";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import VideoComments from "./VideoComments/VideoComments";
import VideoList from "./VideoList/VideoList";

const apiUrl = "https://project-2-api.herokuapp.com/";
const apiParams = "?api_key=3bd9fd1c-d227-4f83-9069-b439b85d08c1";

function Content() {
  let { videoPageId } = useParams();
  if (!videoPageId) {
    //If we don't get params set it to the default BMX Rampage video
    videoPageId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  }
  let videoList = [];
  let currentVideoDetails = {};

  const [videos, setVideos] = useState(videoList);
  const [videoId, setVideoId] = useState(videoPageId);
  const [video, setVideo] = useState(currentVideoDetails);

  // get videos from api
  useEffect(() => {
    axios.get(apiUrl + "videos" + apiParams).then((response) => {
      setVideos(response.data);
    });
    return () => {};
  }, []);

  // get video details from api, listen for videoId change
  useEffect(() => {
    axios
      .get(apiUrl + "videos/" + videoId + apiParams)
      .then((response) => {
        setVideo(response.data);
      })
      .catch(function (error) {
        // handle error
        const noVideo = { title: "Video not found!", channel: "Nobody👻", views: "0", likes: "0", description: "This video does not exist." };
        setVideo(noVideo);
      });
    return () => {};
  }, [videoId]);

  // handle click on video list item
  const handleChangeVideo = (id) => {
    setVideoId(id);
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
