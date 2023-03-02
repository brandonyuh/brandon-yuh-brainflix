//import "./VideoDescription.scss";\
import { convertDate, relativeTime } from "../../../Utilities";
function VideoDescription({title, channel, timestamp, views, likes, description}) {

  return (
    <section className="description">
      <h1>{title}</h1>
      <div className="description__details">
        <p className="description__channel">{channel}</p>
        <p className="description__timestamp">{convertDate(timestamp)}</p>
        <p className="description__relative">{relativeTime(timestamp)}</p>
        <p className="description__views">{views}</p>
        <p className="description__likes">{likes}</p>
      </div>
      <p className="description__text">{description}</p>
    </section>
  );
}

export default VideoDescription;
