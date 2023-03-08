import { useState } from "react";
import axios from "axios";
import "./VideoComments.scss";
import ProfileIcon from "../../../assets/images/Mohan-muruge.jpg";
import { convertDate, relativeTime } from "../../../Utilities";
import { apiUrl, apiParams } from "../../../Api";

function VideoComments({ comments, id }) {
  const [newComment, setNewComment] = useState("");
  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  const handleChangeNewComment = (event) => {
    setIsCommentEmpty(newComment.length === 0);
    setNewComment(event.target.value);
  };

  const isCommentValid = () => {
    setIsCommentEmpty(newComment.length === 0);
    return newComment.length > 0;
  };

  const handleSubmit = (event) => {
    setIsCommentEmpty(newComment.length === 0);
    event.preventDefault();
    if (!isCommentValid()) {
      return;
    }

    const newCommentObj = {
      name: "Anonymous",
      comment: newComment,
    };

    axios
      .post(`${apiUrl}videos/${id}/comments${apiParams}`, newCommentObj)
      .then((response) => {
        newCommentObj.id = response.data.id;
        newCommentObj.timestamp = response.data.timestamp;
        comments.unshift(newCommentObj);
        setNewComment("");
      })
      .catch((error) => {
        console.log(error);
        alert("Sorry, your comment could not be posted. Please try again later.");
      });
  };
  if (comments === undefined) return null;
  return (
    <section className="comments">
      <p className="comments--number">{comments.length} Comments</p>
      <article className="comment">
        <div className="comment__profile">
          <img className="comment__icon" src={ProfileIcon} alt="Profile" />
        </div>
        <form onSubmit={handleSubmit} className="comment__form">
          <label htmlFor="addcomment" className="label comment__title">
            Join the conversation
          </label>
          <div className="comment__data comment__add">
            <textarea className={`textbox comment__input ${isCommentEmpty ? "invalid" : ""}`} name="addcomment" id="addcomment" cols="30" rows="5" placeholder="Add a new comment" onChange={handleChangeNewComment} value={newComment}></textarea>
            <button type="submit" className="button comment__button">
              Comment
            </button>
          </div>
        </form>
      </article>
      {comments
        .sort((a, b) => b.timestamp - a.timestamp)
        .map((comment) => (
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
              <button className="button button__delete">DELETE</button>
            </div>
          </article>
        ))}
    </section>
  );
}

export default VideoComments;
