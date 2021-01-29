import "./RegisterScreen.scss"
import React from "react";
import {Register} from "../../components/register/register"

export interface RegisterScreenProps {

}

export const RegisterScreen: React.FC<RegisterScreenProps> = () => {
    return (
        <div className='register-screen-container'>
            <span className='title'>Welcome to MyWorkStatus</span>
            <Register></Register>
        </div>
    );
}
