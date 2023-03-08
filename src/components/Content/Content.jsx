import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Content.scss";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import VideoDescription from "./VideoDescription/VideoDescription";
import VideoComments from "./VideoComments/VideoComments";
import VideoList from "./VideoList/VideoList";
import { apiUrl, apiParams } from "../../Api";

function Content() {
  let { videoPageId } = useParams();
  let homePageVideo = {};

  let videoList = [];
  let currentVideoDetails = {};

  const [videos, setVideos] = useState(videoList);
  const [videoId, setVideoId] = useState(videoPageId);
  const [video, setVideo] = useState(currentVideoDetails);

  // get videos from api
  useEffect(() => {
    axios.get(apiUrl + "videos" + apiParams).then((response) => {
      setVideos(response.data);
      setVideoId(response.data[0]);
    });
    return () => {};
  }, []);

  // get video details from api, listen for videoId change
  useEffect(() => {
    let id = videoId;
    if (typeof videoId === "object") {
      id = videoId.id;
    } else if (videoId === undefined) {
      id = homePageVideo.id;
    } else {
      axios
        .get(apiUrl + "videos/" + id + apiParams)
        .then((response) => {
          setVideo(response.data);
        })
        .catch(function (error) {
          // handle error
          if (videoPageId) {
            const noVideo = { title: "Video not found!", channel: "Nobody👻", views: "0", likes: "0", description: "This video does not exist." };
            setVideo(noVideo);
          } else {
            setVideo(homePageVideo);
          }
        });
    }
    return () => {};
  }, [videoId]);

  // handle click on video list item
  const handleChangeVideo = (id) => {
    setVideoId(id);
    window.scrollTo(0, 0);
  };

  // set video to first video in list if no videoPageId in params is not set
  useEffect(() => {
    if (!videoPageId) {
      if (videos.length > 0) {
        setVideoId(videos[0].id);
        setVideo(videos[0]);
      }
    }
    return () => {};
  }, [videoPageId, videos]);

  return (
    <div className="content">
      <VideoPlayer image={video.image} />
      <div className="content__belowvideo">
        <div className="content__leftpane">
          <VideoDescription title={video.title} channel={video.channel} timestamp={video.timestamp} views={video.views} likes={video.likes} description={video.description} />
          <VideoComments comments={video.comments} id={video.id} />
        </div>
        <VideoList id={video.id} videos={videos} handleChangeVideo={handleChangeVideo} />
      </div>
    </div>
  );
}

export default Content;
