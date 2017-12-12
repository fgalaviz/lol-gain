import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const TipsPage = () => (
    <div id="tips-page">
        <NavBar/>
        <h1>Tips Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<TipsPage/>, document.getElementById('root'));
