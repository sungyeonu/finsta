import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "../firebase";
import "./postFactory.css";

const PostFactory = ({ userObj }) => {
  const [caption, setCaption] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [attachment, setAttachment] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const postObject = {
      caption: caption,
      location: location,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
      creatorDisplayName: userObj.displayName,
      likedUsers: []
    };
    if (attachmentUrl && caption) {
      await dbService.collection("posts").add(postObject);
      setCaption("");
      setLocation("");
      setAttachment("");
    } else {
      console.log("error", postObject);
    }

  };

  const captionOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setCaption(value); 
  };

  const locationOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      var fileUrl = (finishedEvent.target as FileReader).result;
      setAttachment(fileUrl);
    };
    reader.readAsDataURL(theFile);
  };

  return (
    <form onSubmit={onSubmit} className="postFactoryContainer">
      <span className="postFactoryTitle">Create post</span>
      <span className="postFactoryText">Caption*</span>
      <input
        className="postFactoryInput"
        value={caption}
        onChange={captionOnChange}
        type="text"
        placeholder="e.g. my favorite cookie is..."
        maxLength={160}
      />
      <span className="postFactoryText">Location</span>
      <input
        className="postFactoryInput"
        value={location}
        onChange={locationOnChange}
        type="text"
        placeholder="e.g. Berlin"
        maxLength={20}
      />
      <div className="buttonContainer">
        <input
          className="fileinput"
          type="file"
          accept="image/*"
          onChange={onFileChange}
        />
        <input className="postButton" type="submit" value="post" />
      </div>
    </form>
  );
};
export default PostFactory;
