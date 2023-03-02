//import "./VideoDescription.scss";\
import { convertDate, relativeTime } from "../../../Utilities";
function VideoDescription(props) {

  return (
    <section className="description">
      <h1>{props.title}</h1>
      <div className="description__details">
        <p className="description__channel">{props.channel}</p>
        <p className="description__timestamp">{convertDate(props.timestamp)}</p>
        <p className="description__relative">{relativeTime(props.timestamp)}</p>
        <p className="description__views">{props.views}</p>
        <p className="description__likes">{props.likes}</p>
      </div>
    </section>
  );
}

export default VideoDescription;
