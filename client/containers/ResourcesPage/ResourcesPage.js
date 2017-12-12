import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const ResourcesPage = () => (
    <div id="resources-page">
        <NavBar/>
        <h1>Resources Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<ResourcesPage/>, document.getElementById('root'));
