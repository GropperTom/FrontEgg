import React from 'react';
import {LoginScreen} from "./screens/login-screen/LoginScreen"
import './App.scss';
import rootStore from "./store";
import {Provider} from "react-redux";
import {AdminViewScreen} from "./screens/admin-view-screen/AdminViewScreen";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {RegisterScreen} from "./screens/register-screen/RegisterScreen";
import {AppHeader} from "./components/app-header";

function App() {
  return (
      <Provider store={rootStore}>
          <div className={"app-container"}>
              <AppHeader/>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" component={LoginScreen}/>
                  <Route exact path="/home" component={AdminViewScreen}/>
                  <Route exact path="/register" component={RegisterScreen}/>
              </Switch>
          </BrowserRouter>
          </div>
      </Provider>

  );
}

export default App;
