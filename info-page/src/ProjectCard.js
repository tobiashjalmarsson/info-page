import React from 'react';
import { BsGithub } from 'react-icons/bs';
import "./Main.css"

const ProjectCard = ({ projectInfo }) => {
    return (
        <div className='project-card-container'>
            <h2 id="project-card-header">{projectInfo.title}</h2>
            <p id="project-card-description">{projectInfo.description}</p>
            <a href={projectInfo.github_link}>
                <BsGithub id="project-card-icon" />
            </a>
        </div>
    );
}

export default ProjectCard;
