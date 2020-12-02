import React, { useState } from "react";
import { dbService } from "../firebase";

interface HomeProps {
  isOwner: boolean,
  postObj: any
}

const Post = ({ postObj, isOwner }: HomeProps) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [newPost, setNewPost] = useState(postObj.text);

  const onDeleteClick = async () => {
    const ok:boolean = window.confirm("Are you sure you want to delete this post?");
    if (ok) {
      await dbService.doc(`posts/${postObj.id}`).delete();
    }

  };

  const toggleEditing = () => setEditing((prev) => !prev);
  
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`posts/${postObj.id}`).update({
      text: newPost,
    });
    setEditing(false);
  };

  const onChange = async (event) => {
    const {
      target:{ value },
    } = event;
    setNewPost(value);
    await dbService.doc(`posts/${postObj.id}`).update({
      text: newPost
    });
    setNewPost(value);
  }

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Edit your post" onChange={onChange} value={newPost} required/>
            <input type="submit" value="Update Post" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{postObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Post</button>
              <button onClick={toggleEditing}>Edit Post</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Post