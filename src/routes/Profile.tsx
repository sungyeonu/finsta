import React, { useState, useEffect } from "react";
import { authService } from "../firebase";
import { useHistory } from "react-router-dom";
import "./profile.css";
const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  useEffect(() => {
    if (!userObj.displayName) { // if displayName does not exist set the default name to the user's email without the domain
      userObj.updateProfile({
        displayName: userObj.email
      });
      refreshUser();
    }
  });

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

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refreshUser();
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <span className="logOutSpan">
          Change profile name
        </span>
        <br></br>
        <div className="inputContainer">

          <input
            onChange={onChange}
            className="input"
            type="text"
            placeholder="Display name"
            value={newDisplayName}
            />
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
      <span className="logOutSpan" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};
export default Profile;