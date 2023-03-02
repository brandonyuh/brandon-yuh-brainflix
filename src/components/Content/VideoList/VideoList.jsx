import "./VideoList.scss";
function VideoList({ videos, id, handleChangeVideo}) {
  return (
    <div className="videolist">
      {videos
        .filter((video) => video.id !== id)
        .map((video) => (
          <article className="videolist__video" key={video.id} onClick={() => handleChangeVideo(video.id)}>
            <img src={video.image} alt="" className="videolist__image" />
            <p>{video.title}</p>
            <p>{video.channel}</p>
          </article>
        ))}
    </div>
  );
}

export default VideoList;
