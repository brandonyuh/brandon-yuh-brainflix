import { useState } from "react";
import axios from "axios";
import "./VideoDescription.scss";
import { convertDate, relativeTime, formatNumber } from "../../Utilities";
import viewsImage from "../../assets/images/views.svg";
import likesImage from "../../assets/images/likes.svg";
import likesImageActive from "../../assets/images/likes-active.svg";
import { apiUrl, apiParams } from "../../Api";

function VideoDescription({ id, title, channel, timestamp, views, likes, description, getVideo}) {
  const [liked, setLiked] = useState(false);
  const handleLikes = () => {
    if (!liked) {
      axios.put(apiUrl + "videos/" + id + "/likes" + apiParams).then((response) => {
        setLiked(true);
        getVideo(id);
      });
    }
  };
  if (title === undefined) return null;
  return (
    <section className="description">
      <h1 className="description__title">{title}</h1>
      <div className="description__details-container">
        <article className="description__data description__data--channel">By {channel}</article>
        <article className="description__data description__data-views">
          <img className="description__data--image" src={viewsImage} alt="" />
          <span>{formatNumber(views)}</span>
        </article>
        <div className="description__data description__data--time ">
          <div className="hover description__time description__time--element">
            {relativeTime(timestamp)}
            <div className="tooltip description__time description__time--element">{convertDate(timestamp)}</div>
          </div>
        </div>

        <article className="description__data description__data-likes">
          <img className="description__data--image description__data--likesimage" src={liked ? likesImageActive : likesImage} alt="" onClick={handleLikes} />
          <p>{formatNumber(likes)}</p>
        </article>
      </div>
      <p className="description__text">{description}</p>
    </section>
  );
}

export default VideoDescription;
