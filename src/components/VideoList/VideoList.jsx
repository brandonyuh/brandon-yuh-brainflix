import { Link } from "react-router-dom";
import "./VideoList.scss";
function VideoList({ videos, id, handleChangeVideo }) {
  // array of numbers to use as keys for placeholder videos
  const emptyVideoList = [1, 2, 3, 4, 5, 6, 7, 8];
  if (videos.length !== 0) {
    return (
      <div className="videolist">
        <h3 className="videolist__title">Next Videos</h3>
        {videos
          .filter((video) => video.id !== id)
          .map((video) => (
            <Link key={video.id} to={`/${video.id}`} onClick={() => handleChangeVideo(video.id)}>
              <article className="thumbnail">
                <div className="thumbnail__preview">
                  <img src={video.image} alt="" className="thumbnail__preview--image" />
                </div>

                <div className="thumbnail__details">
                  <p className="thumbnail__details--title">{video.title}</p>
                  <p>{video.channel}</p>
                </div>
              </article>
            </Link>
          ))}
      </div>
    );
    // when we have no videos to show show placeholders
  } else {
    return (
      <div className="videolist">
        <h3 className="videolist__title">Next Videos</h3>
        {emptyVideoList.map((value) => (
          <article key={value} className="thumbnail">
            <div className="thumbnail__preview"></div>
            <div className="thumbnail__details">
              <p className="thumbnail__details--title"></p>
              <p></p>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default VideoList;
