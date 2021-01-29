import "./LoginScreen.scss"
import React from "react";
// @ts-ignore
import {Login} from "../../components/login/Login"

export interface LoginScreenProps {

}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
    return (
        <div className='login-screen-container'>
            <span className='title'>Welcome to MyWorkStatus</span>
            <Login></Login>
        </div>
    );
}
