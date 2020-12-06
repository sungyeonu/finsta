import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from '../firebase';
import Post from '../components/Post';

interface HomeProps {
  userObj: any;
}

const Home = ({ userObj }: HomeProps) => {
  const [post, setPost] = useState<String>("");
  const [posts, setPosts] = useState<[]>([]);
  const [attachment, setAttachment] = useState();

  useEffect(() => {
    dbService.collection("posts").onSnapshot(snapshot => {
      const postArray = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
      setPosts(postArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
    const response = await attachmentRef.putString(attachment, "data_url");
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const PostObj = {
      text: post,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("posts").add(PostObj);

    setPost("");
    setAttachment("");
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
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      var fileUrl = (finishedEvent.target as FileReader).result;
      // const {
        //   currentTarget: { result },
        // } = finishedEvent;
      setAttachment(fileUrl);
    }
    reader.readAsDataURL(file);
  }
  const onClearAttachment = () => setAttachment(null) 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={post}
          type="text"
          onChange={onChange}
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="post" />
        {attachment && (
          <div>
            <img alt="post" src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            postObj={post}
            isOwner={post.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
