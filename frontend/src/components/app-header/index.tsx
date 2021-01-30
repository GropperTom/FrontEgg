import React from "react";
import "./AppHeader.scss"
import {Divider, Toolbar} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import {useHistory, useLocation} from "react-router";
import {useSelector} from "react-redux";
import selectors from "../../store/auth/selectors/selectors";
import {Link} from "react-router-dom";


export interface AppHeaderProps {

}

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
    const token = useSelector(selectors.getToken);

    const onLogoutClicked = () => {
        localStorage.removeItem("token");
    }

    return (
        <AppBar position={"static"}>
            <Toolbar className={"app-header"}>
                <h3 className={"header-item"}>
                    MyWorkStatus
                </h3>
                <Link to={"/"}>
                    {token ? <span style={{color: 'white'}} onClick={onLogoutClicked}>Logout</span> : <div/>}
                </Link>
            </Toolbar>
        </AppBar>
    );
}
