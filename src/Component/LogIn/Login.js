import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Login.css'

const Login = () => {
    const{handleGoogleSignIn, handleCustomLogIn}=useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri= location.state?.from || '/home';

    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[error, setError]= useState('');


    const handleGoogleLogIn = () =>{

        handleGoogleSignIn()
        .then(result =>{
            history.push(redirect_uri);
            //const loggedInUser =result.user;
            //setUser(loggedInUser);
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = "You are not the member of this site. Please, SIGN IN";
            setError(errorMessage);
            // ..
          });
    }

    const handleLogin = e =>{
        e.preventDefault()
        handleCustomLogIn(email, password)
        .then(result =>{
            history.push(redirect_uri);
            //const loggedInUser =result.user;
            //setUser(loggedInUser);
        })
        .catch((error) => {
            const errorMessage ="You are not the member of this site. Please SIGN IN."
            setError(errorMessage);
          })
    };

    const handleEMailChange = e =>{
        setEmail(e.target.value);
    };

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }



    return (
        <div className="login-form my-2">
            <div className="login-area">
                <h3 className="text-center">Please Log In</h3>
                <form className="login-box" onSubmit={handleLogin}>
                    <label htmlFor="">Email</label>
                    <br />
                    <input onBlur={handleEMailChange} type="email" required/>
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input onBlur={handlePasswordChange} type="password" required/>
                    <br />
                    <input className="mt-3 login-btn" type="Submit" value="log in"/>
                </form>
                <br />
                <p className="text-center">New to <span className="medicare">MediCARE</span> ? <br /> <Link to="/register"><button className="btn btn-success mt-3">Create Account</button></Link></p>
                <div className="text-center">
                    <p><small>or</small></p>
                    <button className=" btn btn-warning" onClick={handleGoogleLogIn}>Google Sign in</button>
                </div>
                <br />
                <div className="text-danger">{error}</div>
            </div>
            
        </div>
    );
};

export default Login;