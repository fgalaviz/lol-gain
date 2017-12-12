import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const GalleryPage = () => (
    <div id="gallery-page">
        <NavBar/>
        <h1>Gallery Page</h1>
        <Footer/>
    </div>
);

ReactDOM.render(<GalleryPage/>, document.getElementById('root'));
