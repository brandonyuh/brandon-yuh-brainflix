//import "./VideoDescription.scss";\

function VideoDescription(props) {
  const convertDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString();
  };

  return (
    <section className="description">
      <h1>{props.title}</h1>
      <div className="description__details">
        <p className="description__channel">{props.channel}</p>
        <p className="description__timestamp">{convertDate(props.timestamp)}</p>
        <p className="description__views">{props.views}</p>
        <p className="description__likes">{props.likes}</p>
      </div>
    </section>
  );
}

export default VideoDescription;
