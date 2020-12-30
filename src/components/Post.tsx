import { useState, useEffect, useRef }  from "react";
import { dbService, storageService } from "../firebase";
import "./post.css";
import editLogo from '../graphics/editButton.png';
import blankProfile from '../graphics/blankProfile.png';

interface PostProps {
  isOwner: boolean;
  userUid: any;
  postObj: any;
}

const Post = ({ postObj, userUid, isOwner }: PostProps) => {
  const [profilePicture, setProfilePicture] = useState("");
  const [newComment, setNewComment] = useState<string>("");
  const commentInput = useRef(null);
  
  useEffect(() => {
    getProfilePictureRef();
  }, [])

  const handleFocus = () => {
    commentInput.current.focus();
  };

  const onDeleteClick = async () => {
    const ok: boolean = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (ok) {
      await dbService.doc(`posts/${postObj.id}`).delete();
      await storageService.refFromURL(postObj.attachmentUrl).delete();
    }
  };

  const onLikeClick = async () => {
    // add user to likedUsers if the user had not liked the post. If else, then take the user off likedUsers
    let likedUsers = postObj.likedUsers;
    if (likedUsers.includes(userUid)) {
      const index = likedUsers.indexOf(userUid);
      likedUsers.splice(index, 1);
      await dbService.doc(`posts/${postObj.id}`).update({
        likedUsers: likedUsers,
      });
    } else {
      likedUsers.push(userUid);
      await dbService.doc(`posts/${postObj.id}`).update({
        likedUsers: likedUsers,
      });
    }
  };

  const likeButton = (likedUsers) => {
    if (likedUsers.includes(userUid)) {
      return (
        <span className="icon">
          <svg
            onClick={onLikeClick}
            aria-label="Unlike"
            className="icon"
            fill="#ed4956"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </span>
      );
    } else {
      return (
        <span className="icon">
          <svg
            onClick={onLikeClick}
            aria-label="Like"
            className="icon"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        </span>
      );
    }
  }

  const newCommentOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewComment(value);
  }

  const newCommentOnSubmit = (event) => {

  }

  const commentButton = () => {
    return (
      <span className="icon">
        <svg
          onClick={() => handleFocus()}
          aria-label="Comment"
          fill="#262626"
          height="24"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            clip-rule="evenodd"
            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </span>
    );
    
  };
  const likesSpan = (numLikes) => {
    if (numLikes === 1) {
      return <span className="numLikes"> {numLikes} like </span>;
    } else {
      return <span className="numLikes"> {numLikes} likes </span>;
    }
  }

  const getProfilePictureRef = async () => {
    const profilePictureRef = await storageService
      .ref()
      .child(postObj.creatorId + "/profile");
    setProfilePicture(blankProfile)
    profilePictureRef.getDownloadURL().then((url) => {
      setProfilePicture(url);
    });
  };
  
  return (
    <div className="postContainer">
      <div className="topInfo">
        <div className="profileImageSmallCropper">
          <img
            src={profilePicture}
            className="profilePictureSmall"
            alt="Profile"
          />
        </div>
        <div>
          <div className="topInfoText">
            <span className="creatorName">{postObj.creatorDisplayName}</span>
            <span className="location">{postObj.location}</span>
          </div>

          {isOwner ? (
            <div className="deletePostButton">
              <img
                onClick={onDeleteClick}
                src={editLogo}
                alt="Edit Post"
                width="18px"
              />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>

      {postObj.attachmentUrl && (
        <img
          alt="post"
          src={postObj.attachmentUrl}
          width="360px"
          height="360px"
        />
      )}
      <div className="middleInfo">
        <div className="postIcons">
          {likeButton(postObj.likedUsers)}
          {commentButton()}
        </div>
        {likesSpan(postObj.likedUsers.length)}
      </div>
      <span className="caption">{postObj.caption}</span>
      <span className="location">{}</span>
      <div className="commentDiv">
        <span>
          <input
            ref={commentInput} 
            className="commentInput"
            value={newComment}
            onChange={newCommentOnChange}
            type="text"
            placeholder="Enter a comment"
            maxLength={400}
          />
        </span>
        <span className="profileButton" />
      </div>
    </div>
  );
};

export default Post