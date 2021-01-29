import "./RegisterScreen.scss"
import React from "react";
import {Register} from "../../components/register/register"

export interface RegisterScreenProps {

}

export const RegisterScreen: React.FC<RegisterScreenProps> = () => {
    return (
        <div className='register-screen-container'>
            <div className='title'>
                <h2 >Welcome to</h2>
                <h1>MyWorkStatus</h1>
            </div>
            <Register></Register>
        </div>
    );
}
