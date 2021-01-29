import React from "react";
import "./Login.scss"
import {Link} from "react-router-dom";

export interface loginProps {

}

export const Login: React.FC<loginProps> = () => {
    return (
        <div className="login-container">
            <input type="textarea" placeholder="Email Address..."/>
            <input type="textarea" placeholder="Password..."/>
            <Link to={`/home`}>
                <button>Login</button>
            </Link>
            <Link to={`/register`}>
                <button>Register</button>
            </Link>
        </div>
    )
}
