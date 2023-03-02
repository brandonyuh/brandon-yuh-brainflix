import "./VideoList.scss";
function VideoList(props) {
  return (
    <div className="videolist">
      {props.videos
        .filter((video) => video.id !== props.id)
        .map((video) => (
          <article className="videolist__video" key={video.id} onClick={() => props.handleChangeVideo(video.id)}>
            <img src={video.image} alt="" className="videolist__image" />
            <p>{video.title}</p>
            <p>{video.channel}</p>
          </article>
        ))}
    </div>
  );
}

export default VideoList;
