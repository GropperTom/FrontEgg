import React, {useState} from "react";
import "./register.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../store/auth/actions/actions"
import selectors from "../../store/auth/selectors/selectors"

export interface RegisterProps {

}

export const Register: React.FC<RegisterProps> = () => {
    const dispatch = useDispatch();

    const registered: boolean = useSelector(selectors.getRegistered);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const onEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const onNameChange = (e: any) => {
        setName(e.target.value);
    }

    const onPasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const onRegisterButtonClicked = () => {
        dispatch(actions.register(email, password, name))
    }

    return (
        <div className="register-container">
            <input onClick={onNameChange} type="textarea" placeholder="Full Name..."/>
            <input onClick={onEmailChange} type="textarea" placeholder="Email Address..."/>
            <input onClick={onPasswordChange} type="textarea" placeholder="Password..."/>
            <span>{registered ? "You have successfully registered" : ""}</span>
            <Link to={`/home`}>
                <button onClick={onRegisterButtonClicked}>Register</button>
            </Link>
        </div>
    )
}
