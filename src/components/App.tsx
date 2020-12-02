import React from 'react';
import AppRouter from './Router';
import { useState, useEffect } from 'react';
import { authService } from "../firebase";

function App(): React.ReactNode {
  const [init, setInit] = useState<boolean>(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      } 
      setInit(true);
    });
  }, []);

  return (
    <>
    {init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> : "Initializing..."}
    </>
  )
}

export default App;
 