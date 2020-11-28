import React from 'react';
import AppRouter from './Router';
import { useState } from 'react';
// import authService from 'firebase';
import authService from "../firebase";

function App(): React.ReactNode {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
 