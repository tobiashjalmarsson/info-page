import React from 'react';
import "./Main.css"
import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai'
import { BiLogoJava, BiLogoReact, BiLogoPython, BiLogoGoLang, BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { TbBrandCSharp } from 'react-icons/tb'
import { DiDjango } from 'react-icons/di'
const Skills = ({ skillsAnchor }) => {
    return (
        <div ref={skillsAnchor} id="skills-container">
            <div className="skills-icons-container">
                <AiOutlineHtml5 className="skills-icon" />
                <BiLogoCss3 className="skills-icon" />
                <BiLogoJavascript className="skills-icon" />
                <BiLogoTypescript className="skills-icon" />
                <TbBrandCSharp className="skills-icon" />
                <BiLogoGoLang className="skills-icon" />
                <BiLogoPython className="skills-icon" />
                <BiLogoReact className="skills-icon" />
                <DiDjango className="skills-icon" />
                <BiLogoJava className="skills-icon" />
                <AiFillGithub className='skills-icon' />
            </div>
            <div className="skills-text-container">
                <p>So far during my development career I have had the opportunity to learn several different areas.
                    As a consultant I had the opportunity to be a part of planning the entire applications together with
                    stakeholders to determine what technologies should be used given budgetary and time constraints.
                    Here I also got to do a lot of the development from scratch regarding both backend and frontend development.
                    Later I have had the chance to work in larger teams with large code bases and learned how to collaborate with
                    others in a more efficient way than just during smaller projects for academic work. Some of the technologies
                    I have worked with can be seen to the left and more information can be found in my resumé.</p>
            </div>
        </div>
    );
}

export default Skills;
