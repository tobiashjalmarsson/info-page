import React from 'react';
import './Main.css';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer-container'>
            <BsGithub />
            <a className="footer-link" href="/home">Home</a>
            <a className="footer-link" href="/projects">Projects</a>
            <a className="footer-link" href="/contact">Contact</a>
        </div>
    );
}

export default Footer;