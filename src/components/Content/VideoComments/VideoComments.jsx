import "./VideoComments.scss";
import ProfileIcon from "../../../assets/images/Mohan-muruge.jpg";
import { convertDate, relativeTime } from "../../../Utilities";

function VideoComments({ comments }) {
  return (
    <section className="comments">
      <p className="comments--number">{comments.length} Comments</p>
      <article className="comment">
        <div className="comment__profile">
          <img className="comment__icon" src={ProfileIcon} alt="Profile Image" />
        </div>
        <div className="comment__data comment__add">
          <div>
            <p className="comment__title">Join the conversation</p>
            <textarea className="comment__input" name="" id="" cols="30" rows="4" placeholder="Add a new comment"></textarea>
          </div>
          <button className="button comment__button">Comment</button>
        </div>
      </article>
      {comments.map((comment) => (
        <article key={comment.id} className="comment">
          <div className="comment__profile">
            <div className="comment__icon comment__anon"></div>
          </div>
          <div className="comment__data">
            <div className="comment__heading">
              <p className="comment__data--name">{comment.name}</p>
              <p className="comment__data--date">
                <div>{convertDate(comment.timestamp)} </div>
                <div>{relativeTime(comment.timestamp)}</div>
              </p>
            </div>
            <p className="comment__text">{comment.comment}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default VideoComments;
