import React, { useState, useEffect } from 'react';
import { dbService } from "../firebase";
import Post from '../components/Post';
import PostForm from "../components/PostForm";

interface HomeProps {
  userObj: any;
}

const Home = ({ userObj }: HomeProps) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dbService.collection("posts").onSnapshot(snapshot => {
      const postArray = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
      postArray.sort(postSort);
      setPosts(postArray);
    });
  }, []);

  const postSort = (a, b) => {
    // sort by the post's createdAt
    if (a.createdAt < b.createdAt) {
      return 1;
    } 
    else if (a.createdAt > b.createdAt) {
      return -1
    }
    return 0
  }

  return (
    <div className="homeContainer">
      <PostForm userObj={userObj} />
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            postObj={post}
            userUid={userObj.uid}
            userDisplayName={userObj.displayName}
            isOwner={post.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
