import { useState, useEffect } from "react";
import { authService, storageService } from "../firebase";
import { useHistory } from "react-router-dom";
import "./profile.css";

interface ProfileProps {
  userObj: any;
  refreshUser: () => void;
}
const Profile = ({ userObj, refreshUser }: ProfileProps) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [attachment, setAttachment] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    // if displayName does not exist set the default name to the user's email without the domain
    if (!userObj.displayName) {
      userObj.updateProfile({
        displayName: userObj.email,
      });
      refreshUser();
    }

    getProfilePictureRef()
  });

  const getProfilePictureRef = async () => {
    const profilePictureRef = await storageService.ref().child(userObj.uid + '/profile');
    profilePictureRef.getDownloadURL().then((url) => {
      setProfilePicture(url);
    })
  }

  const onProfilePictureChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const fileUrl = (finishedEvent.target as FileReader).result.toString();
      setAttachment(fileUrl);
    };
    reader.readAsDataURL(theFile);
  };

  const onProfilePictureSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${userObj.uid}/profile`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    getProfilePictureRef();
  };

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onChangeUsernameSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <div className="profileContainer">
      <span className="title">Edit profile </span>{" "}
      <div className="profileImageCropper">
        <img alt="post" className="profilePicture" src={profilePicture} width="360px" height="360px" />
      </div>
      <form onSubmit={onProfilePictureSubmit}>
        <span className="changePictureSpan">Change profile picture</span>
        <div className="buttonContainer">
          <input
            className="fileinput"
            type="file"
            accept="image/*"
            onChange={onProfilePictureChange}
          />
          <input className="profileButton" type="submit" value="submit" />
        </div>
      </form>
      <br />
      <br />
      <form onSubmit={onChangeUsernameSubmit}>
        <span className="logOutSpan">Change username</span>
        <div className="inputContainer">
          <input
            onChange={onChange}
            className="nameInput"
            type="text"
            placeholder="Display name"
            value={newDisplayName}
          />
        </div>
        <input className="profileButton" type="submit" value="submit" />
      </form>
      <span className="logOutSpan" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
export default Profile;