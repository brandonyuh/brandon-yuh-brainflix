import "./VideoComments.scss";
import ProfileIcon from "../../../assets/images/Mohan-muruge.jpg";
import { convertDate, relativeTime } from "../../../Utilities";

function VideoComments({ comments }) {
  return (
    <section className="comments">
      <p className="comments--number">{comments.length} Comments</p>
      <article className="comment">
        <div className="comment__profile">
          <img className="comment__icon" src={ProfileIcon} alt="Profile" />
        </div>
        <div className="comment__form">
          <label for="addcomment" className="comment__title">
            Join the conversation
          </label>
          <div className="comment__data comment__add">
            <textarea className="comment__input" name="addcomment" id="addcomment" cols="30" rows="5" placeholder="Add a new comment"></textarea>
            <button className="button comment__button">Comment</button>
          </div>
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
              <div className="comment__data--date">
                <div className="hover">
                  {relativeTime(comment.timestamp)}
                  <span className="tooltip">{convertDate(comment.timestamp)}</span>
                </div>
              </div>
            </div>
            <p className="comment__text">{comment.comment}</p>
          </div>
        </article>
      ))}
    </section>
  );
}

export default VideoComments;
