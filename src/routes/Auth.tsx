import React from 'react';
import AuthForm from '../components/AuthForm';
import { authService, firebaseInstance } from '../firebase';
import "../styles.css";
import Logo from "../Instagram-Logo.png"

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
      <img src={Logo} alt="logo large" className="LogoLarge" width="400"></img>
      <AuthForm />
      <div>
        <button name="google" onClick={onGoogleClick}>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
