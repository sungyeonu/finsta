import React from 'react';
import AuthForm from '../components/AuthForm';
import { authService, firebaseInstance } from '../firebase';
import "../styles.css";
import "./auth.css";
import Logo from "../graphics/Instagram-Logo.png";

const Auth = () => {
  const onGoogleClick = async(event) => {
    const { target:{name} } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    await authService.signInWithPopup(provider);
  }

  return (
    <div className="authContainer">
      <img src={Logo} alt="logo large" className="LogoLarge" width="200"></img>
      <span className="greyLargeText">
        Sign up to see photos from your friends.
      </span>
      <button
        name="google"
        className="signInWithGoogleButton"
        onClick={onGoogleClick}
      >
        Log in with Google
      </button>
      <span className="greyLargeText">OR</span>
      <AuthForm />
      <span className="greySmallText">
        By signing up, you agree to our Terms, Data Policy and
        Cookies Policy
      </span>
    </div>
  );
};

export default Auth;
