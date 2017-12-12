import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const SignupPage = () => (
    <div id="signup-page">
        <NavBar/>
        <h1>Signup Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<SignupPage/>, document.getElementById('root'));
