import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import "./register.scss"
import {useDispatch, useSelector} from "react-redux";
import actions from "../../store/auth/actions/actions"
import selectors from "../../store/auth/selectors/selectors"
import {Link} from "react-router-dom";

export interface RegisterProps {

}

export const Register: React.FC<RegisterProps> = () => {
    useEffect(() => {
        return () => {
            dispatch(actions.setRegistered(false));
        }
    }, [])

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
            <input className={"input-bar"} onChange={onNameChange} value={name} type="text" placeholder="Full Name..."/>
            <input className={"input-bar"} onChange={onEmailChange} value={email} type="text" placeholder="Email Address..."/>
            <input className={"input-bar"} onChange={onPasswordChange} value={password} type="password" placeholder="Password..."/>
            <span className={"register-success-text"}><b>{registered ? "You have successfully registered!" : ""}</b></span>
            <div className={"buttons-container"}>
                <button><b>Register</b></button>
                <Link to={`/`}>
                    <button><b>Already registered? Login now!</b></button>
                </Link>
            </div>
        </form>
    )
}
