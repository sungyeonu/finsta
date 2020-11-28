import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onChange = (event) => {
    console.log(event.target.name);
  }
  const onSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Login" required />
      </form>
      <div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default Auth;
