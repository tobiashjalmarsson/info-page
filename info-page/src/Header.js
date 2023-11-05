import React from 'react';
import './Main.css';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai'
const Header = ({ contactScroll, projectScroll, homeScroll, skillsScroll }) => {
    return (
        <div className='header-container'>
            <a className="header-link" onClick={homeScroll}>Home</a>
            <a className="header-link" onClick={projectScroll}>Projects</a>
            <a className="header-link" onClick={skillsScroll}>Skills</a>
            <a className="header-link" onClick={contactScroll}>Contact</a>
            <div id="header-icon-container">
                <a href="https://github.com/tobiashjalmarsson/">
                    <BsGithub id="header-icon" />
                </a>
                <a href="https://linkedin.com/in/tobias-hjalmarsson-5a227212b">
                    <AiOutlineLinkedin id="header-icon" />
                </a>
            </div>
        </div>
    );
}

export default Header;
