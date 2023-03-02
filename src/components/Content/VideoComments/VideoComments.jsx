function VideoComments(props) {
  const convertDate = (date) => {
    let newDate = new Date(date);
    return newDate.toLocaleDateString();
  };
  return (
    <div className="comments">
      {props.comments.map((comment) => (
        <article key={comment.id} className="comment">
          <p>{comment.name}</p>
          <p>{convertDate(comment.timestamp)}</p>
          <p>{comment.comment}</p>
        </article>
      ))}
    </div>
  );
}
{
  /* {videos.map((video) => (
        <img src={video.image} alt="" />
      ))} */
}
export default VideoComments;
