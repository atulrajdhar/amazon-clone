import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>  {
                // user successfully created
                if(auth) {
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Login</h1>

                <form>
                    <h5>Email</h5>
                    <input 
                        type="email" 
                        value={email}
                        onChange={ e => setEmail(e.target.value) }
                     />

                    <h5>Password</h5>
                    <input 
                        type="password"
                        value={password}
                        onChange={ e => setPassword(e.target.value) }
                    />

                    <button className="login__loginButton" onClick={logIn}>
                        Login
                    </button>
                </form>

                <p>By logging in, you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice.</p>

                <button className="login__registerButton" onClick={register}>
                    Create your Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login;
