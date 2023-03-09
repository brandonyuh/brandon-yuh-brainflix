import { Link, useNavigate } from "react-router-dom";
import "./Upload.scss";
import Header from "../components/Header/Header";
import UploadImage from "../assets/images/Upload-video-preview.jpg";

function Upload() {
  const navigate = useNavigate();
  const alertThankUpload = () => {
    alert("Thank you for uploading your video!");
    //navigates to home page
    navigate("/");
  };

  return (
    <>
      <Header />
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
            <textarea className="textbox upload__input upload__input--description" rows="4" placeholder="Add a description to your video" />
          </div>
        </article>
        <article className="upload__buttons">
          <button className="button upload__buttons--publish" onClick={alertThankUpload}>
            Publish
          </button>
          <Link to="/" className="upload__buttons--cancel">
            Cancel
          </Link>
        </article>
      </section>
    </>
  );
}

export default Upload;
