import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import "./Login.scss"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import authActions from "../../store/auth/actions/actions";
import authSelectors from "../../store/auth/selectors/selectors";

export interface loginProps {

}

export const Login: React.FC<loginProps> = () => {
    const dispatch = useDispatch();

    const token = useSelector(authSelectors.getToken);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (token != null && token.length > 0) {
            history.push("/home");
        }
    }, [token]);

    const onLoginButtonClicked = (e: FormEvent) => {
        e.preventDefault();
        dispatch(authActions.login(email, password))
    }

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={onLoginButtonClicked} className="login-container">
            <input onChange={onEmailChange} value={email} type="text" placeholder="Email Address..."/>
            <input onChange={onPasswordChange} value={password} type="password" placeholder="Password..."/>
            <div className={"buttons-container"}>
                <button>Login</button>
                <Link to={`/register`}>
                    <button>New user? Register!</button>
                </Link>
            </div>

        </form>
    );
}
