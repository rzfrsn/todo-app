import React from "react";
import './LoginPage.scss';

import Title from '../components/LoginPage/Title'
import Login from "../components/LoginPage/Login";
import Card from "../components/LoginPage/Card";

class LoginPage extends React.Component {
    render() {
        return <div className="login-page">
            <Title></Title>
            <Login></Login>
            <Card></Card>
        </div>
    }
}

export default LoginPage;