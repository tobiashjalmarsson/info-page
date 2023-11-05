import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai'

const Contact = ({ contactAnchor }) => {
    return (
        <div ref={contactAnchor} id="contact-container">
            <div class="center">
                <h1>Contact</h1>
                <form action="https://formsubmit.co/yourmail@email.com" method="POST">

                    <div class="txt_field">
                        <input type="text" name="name" id="name" required />
                        <span></span>
                        <label>Full Name</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" name="email" id="email" required />
                        <span></span>
                        <label>Email</label>
                    </div>

                    <div class="txt_field">
                        <input type="text" name="message" id="message" required />
                        <span></span>
                        <label>Message</label>
                    </div>

                    <div class="pass">
                        <input class="pass" type="reset" value="Reset" />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div id="contact-info-container">
                <h1 className='contact-info-text'>Contact info: </h1>
                <h3 className='contact-info-text'>Email: <span>tobhja@chalmers.se</span></h3>
                <a href="https://github.com/tobiashjalmarsson/">
                    <BsGithub id="contact-icon" />
                </a>
                <a href="https://linkedin.com/in/tobias-hjalmarsson-5a227212b">
                    <AiOutlineLinkedin id="contact-icon" />
                </a>
            </div>
        </div>
    );
}

export default Contact;
