import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./Upload.scss";
import Header from "../../components/Header/Header";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import { apiUrl, apiParams } from "../../Api";

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!title || !description) {
      alert("Please fill out all fields");
      return;
    }
    const newVideo = {
      title: title,
      description: description,
    };
    //sends new video to server
    axios.post(`${apiUrl}videos${apiParams}`, newVideo).then((response) => {
      alert("Thank you for uploading your video!");
      //navigates to home page
      navigate("/");
    }).catch((error) => {
      console.log(error);
      alert("Sorry, your video could not be uploaded. Please try again later.");
    });
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <section className="upload__container">
          <div className="upload__preview--container">
            <label className="label">Video Thumbnail</label>
            <img className="upload__preview--image" src={UploadImage} alt="" />
          </div>
          <div className="upload__inputs">
            <label className="label upload__label">Title your video</label>
            <input className="textbox upload__input" type="text" placeholder="Add a title to your video" onChange={handleChangeTitle} value={title}/>
            <label className="label upload__label">Add a video description</label>
            <textarea className="textbox upload__input upload__input--description" rows="4" placeholder="Add a description to your video" onChange={handleChangeDescription} value={description}/>
          </div>
        </section>
        <section className="upload__buttons">
          <button type="submit" className="button upload__buttons--publish">
            Publish
          </button>
          <Link to="/" className="upload__buttons--cancel">
            Cancel
          </Link>
        </section>
      </form>
    </>
  );
}

export default Upload;
