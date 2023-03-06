import "./VideoList.scss";
function VideoList({ videos, id, handleChangeVideo }) {
  if(videos.length === 0) return null;
  return (
    <div className="videolist">
      <h3 className="videolist__title">Next Videos</h3>
      {videos
        .filter((video) => video.id !== id)
        .map((video) => (
          <article className="thumbnail" key={video.id} onClick={() => handleChangeVideo(video.id)}>
            <div className="thumbnail__preview">
              <img src={video.image} alt="" className="thumbnail__preview--image" />
            </div>

            <div className="thumbnail__details">
              <p className="thumbnail__details--title">{video.title}</p>
              <p>{video.channel}</p>
            </div>
          </article>
        ))}
    </div>
  );
}

export default VideoList;
