import React from 'react';
import '../assets/login.css';
import logo from '../assets/img/asml--600.jpg';
import LoginForm from "../components/login/LoginForm";

const Login = () => {
    return (
        <div className="login--container">
            <div className="login--logo">
                <img src={logo} alt=""/>
            </div>
            <div>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;
