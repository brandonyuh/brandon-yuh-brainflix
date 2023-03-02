function VideoComments(props) {
  return (
    <div className="comments">
      {props.comments.map((comment) => (
        <article key={comment.id} className="comment">
          <p>{comment.name}</p>
          <p>{comment.timestamp}</p>
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
