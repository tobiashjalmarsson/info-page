import React from 'react';
import './Main.css';
import portrait from './cv_bild.jpeg';
import Pdf from './Tobias_Hjalmarsson_CV.pdf';

const Home = ({ contactScroll, homeAnchor }) => {
    return (
        <div ref={homeAnchor} className='home-main-container'>
            <div id="home-left-container">
                <div className='home-text-container'>
                    <h1 id="home-presentation-header">Hi there, I am Tobias Hjalmarsson</h1>
                    <p id="home-presentation-content">I am currently studying a masters in
                        Computer Science at Chalmers University of Technology.
                        I am passionate about security, distributed systems
                        and development in general. If you have any questions or
                        wanna connect feel free to reach out.
                    </p>
                </div>
                <div className='home-button-container'>
                    <button onClick={contactScroll} className='home-button' id="home-contact-button">Contact me</button>
                    <a href={Pdf} target="_blank" className='home-button' id="home-resume-button">Resumé</a>
                </div>
            </div>
            <img src={portrait} id="home-portrait" />
        </div>
    );
}

export default Home;
