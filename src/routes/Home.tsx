import React, { useState, useEffect } from 'react';
import { dbService } from '../firebase';
import Post from '../components/Post';
import PostFactory from '../components/PostFactory';
interface HomeProps {
  userObj: any;
}

const Home = ({ userObj }: HomeProps) => {
  const [posts, setPosts] = useState<[]>([]);

  useEffect(() => {
    dbService.collection("posts").onSnapshot(snapshot => {
      const postArray = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
      setPosts(postArray);
    });
  }, []);

  return (
    <div className="homeContainer">
      <PostFactory userObj={userObj} />
      <div>
        {posts.map((post) => (
          <Post
            key={post.id}
            postOwnerDisplayName={userObj.displayName}
            postObj={post}
            isOwner={post.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
