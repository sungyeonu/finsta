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
        setUserObj({
          email: user.email,
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
        if (!user.displayName) { // if name does not exist then set it to the user's email
          setUserObj({
            email: user.email,
            displayName: user.email.split("@")[0],
            uid: user.uid,
            updateProfile: (args) => user.updateProfile(args),
          });
        }
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      email: user.email,
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  
  return (
    <div className="app">
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
 