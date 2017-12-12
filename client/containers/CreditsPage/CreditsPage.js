import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const CreditsPage = () => (
    <div id="credits-page">
        <NavBar/>
        <h1>Credits Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<CreditsPage/>, document.getElementById('root'));
