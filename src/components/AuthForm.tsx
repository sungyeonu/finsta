import React, { useState } from "react";
import { authService } from "../firebase";
import "../styles.css";
import "../routes/auth.css";

const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newAccount, setNewAccount] = useState<Boolean>(true);
  const [error, setError] = useState<string>("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="authInput"
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          className="authInput"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          className="signInWithGoogleButton"
          type="submit"
          value={newAccount ? "Sign up" : "Log in "}
        />
      </form>
      {error && 
        <>
          <span className="errorText">{error}</span>
          <br />
          <br />
        </>
      }
      <span onClick={toggleAccount}>
        {newAccount
          ? "Have an account? Log in"
          : "Don't have an account? Sign up"}
      </span>
    </div>
  );
};
export default AuthForm;
