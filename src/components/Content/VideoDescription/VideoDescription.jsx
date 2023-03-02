//import "./VideoDescription.scss";\

function VideoDescription(props) {
  const convertDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  const relativeTime = (date) => {
    let seconds = (new Date() - new Date(date)) / 1000;

    let output = ``;
    if (seconds < 60) {
      output = `${Math.floor(seconds)} seconds ago`;
    } else if (seconds < 3600) {
      output = `${Math.floor(seconds / 60)} minutes ago`;
    } else if (seconds < 86400) {
      output = `${Math.floor(seconds / 3600)} hours ago`;
    } else if (seconds < 2620800) {
      output = `${Math.floor(seconds / 86400)} days ago`;
    } else if (seconds < 31449600) {
      output = `${Math.floor(seconds / 2620800)} months ago`;
    } else {
      output = `${Math.floor(seconds / 31449600)} years ago`;
    }
    return output;
  };

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
