import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const EventsPage = () => (
    <div id="events-page">
        <NavBar/>
        <h1>Events Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<EventsPage/>, document.getElementById('root'));
