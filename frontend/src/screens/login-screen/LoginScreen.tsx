import "./LoginScreen.scss"
import React from "react";
import {Login} from "../../components/login/Login"

export interface LoginScreenProps {

}

export const LoginScreen: React.FC<LoginScreenProps> = () => {
    return (
        <div className='login-screen-container'>
            <div className='title'>
                <h2 >Welcome to</h2>
                <h1>MyWorkStatus</h1>
            </div>
            <Login></Login>
        </div>
    );
}
