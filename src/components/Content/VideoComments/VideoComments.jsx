import { convertDate, relativeTime } from "../../../Utilities";

function VideoComments({ comments }) {
  return (
    <div className="comments">
      <p>{comments.length} Comments</p>
      {comments.map((comment) => (
        <article key={comment.id} className="comment">
          <p>{comment.name}</p>
          <p>{convertDate(comment.timestamp)}</p>
          <p>{relativeTime(comment.timestamp)}</p>
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
