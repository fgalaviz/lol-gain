import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const HomePage = () => (
    <div id="home-page">
        <NavBar/>
        <h1>Home Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<HomePage/>, document.getElementById('root'));
