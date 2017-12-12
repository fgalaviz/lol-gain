import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const LoginPage = () => (
    <div id="login-page">
        <NavBar/>
        <h1>Login Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<LoginPage/>, document.getElementById('root'));
