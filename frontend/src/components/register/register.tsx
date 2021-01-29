import React, {ChangeEvent, FormEvent, useState} from "react";
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

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const onRegisterButtonClicked = (e: FormEvent) => {
        e.preventDefault();
        dispatch(actions.register(email, password, name))
    }

    return (
        <form onSubmit={onRegisterButtonClicked} className="register-container">
            <input onChange={onNameChange} value={name} type="text" placeholder="Full Name..."/>
            <input onChange={onEmailChange} value={email} type="text" placeholder="Email Address..."/>
            <input onChange={onPasswordChange} value={password} type="text" placeholder="Password..."/>
            <span>{registered ? "You have successfully registered" : ""}</span>
            <input type="submit" value="Register"/>
        </form>
    )
}
