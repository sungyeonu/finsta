import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { storageService, dbService } from "../firebase";
import "./postFactory.css";

const PostFactory = ({ userObj }) => {
  const [post, setPost] = useState("");
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
    const postObj = {
      text: post,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
      creatorDisplayName: userObj.displayName
    };
    if (attachmentUrl && post) {
      await dbService.collection("posts").add(postObj);
      setPost("");
      setAttachment("");
    } else {
      console.log("error", postObj);
    }

  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setPost(value); 
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

  const onClearAttachment = () => setAttachment(null);

  return (
    <form onSubmit={onSubmit} className="container">
      <input
        className="inputText"
        value={post}
        onChange={onChange}
        type="text"
        placeholder="What's on your mind?"
        maxLength={120}
      />
      <div className="buttonContainer">
        <input className="fileinput" type="file" accept="image/*" onChange={onFileChange} />
        <input className="button" type="submit" value="post" /> 
      </div>

      {/* {attachment && (
        <div>
          <img alt="post" src={attachment} width="50px" height="50px" />
          <button onClick={onClearAttachment}>Clear</button>
        </div>
      )} */}
    </form>
  );
};
export default PostFactory;
