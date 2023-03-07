import { Link } from "react-router-dom";
import "./Upload.scss";
import UploadImage from "../assets/images/Upload-video-preview.jpg";

function Upload() {
  const alertThankUpload = () => {
    alert("Thank you for uploading your video!");
  };

  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <article className="upload__container">
        <div className="upload__preview--container">
          <label className="label">Video Thumbnail</label>
          <img className="upload__preview--image" src={UploadImage} alt="" />
        </div>
        <div className="upload__inputs">
          <label className="label upload__label">Title your video</label>
          <input className="textbox upload__input" type="text" placeholder="Add a title to your video" />
          <label className="label upload__label">Add a video description</label>
          <textarea className="textbox upload__input" rows="4" placeholder="Add a description to your video" />
        </div>
      </article>
      <article className="upload__buttons">
        <Link to="/">
          <button className="button upload__buttons--publish" onClick={alertThankUpload}>
            Publish
          </button>
        </Link>
        <Link to="/" className="upload__buttons--cancel">
          Cancel
        </Link>
      </article>
    </section>
  );
}

export default Upload;
