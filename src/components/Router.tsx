import React, { useState, FC } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

interface AppRouterProps {
  isLoggedIn: Boolean
}
const AppRouter: FC<AppRouterProps> = (isLoggedIn: Boolean) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home/>        
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth></Auth>
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
