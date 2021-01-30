import React from 'react';
import {LoginScreen} from "./screens/login-screen/LoginScreen"
import './App.scss';
import rootStore from "./store";
import {Provider, useSelector} from "react-redux";
import {AdminViewScreen} from "./screens/admin-view-screen/AdminViewScreen";
import {Route, Switch} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import {RegisterScreen} from "./screens/register-screen/RegisterScreen";
import {AppHeader} from "./components/app-header";
import {Divider, Drawer} from "@material-ui/core";
import selectors from "./store/auth/selectors/selectors";

function App() {
    return (
        <Provider store={rootStore}>
            <div className={"app-container"}>
                <BrowserRouter>
                    <AppHeader/>
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
