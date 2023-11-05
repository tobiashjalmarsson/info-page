import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = {
    architecture: {
        title: "Deep learning architecture analysis",
        description: `A comparative analysis of popular deep learning
        architectures for the task of image colorisation, the main architectures
        investigated was a extended version of vgg16 and a U-Net architecture. 
        More information of the comparison can be found in the github repository
        and more specifically in the paper found in the repository. The main technologies
        being used was python, pytorch and additional google cloud to perform
        the training.`,
        github_link: "https://github.com"
    },
    network_identification: {
        title: "Network traffic identification",
        description: `An application for identifying DASH network traffic that is being sent
        using HTTPS. Managed to identify the wast majority of encrypted content being streamed
        from one of swedens largest streaming providers and also reduced the identification time
        from previous work done on the subject. The results was later published during the
        IEEE CCNC conference. The technologies used was python, wireshark and scikit-learn. 
        More information about the project can be found on the github link and the related paper`,
        github_link: "https://github.com"
    },
    sorting: {
        title: "Sorting visualizer",
        description: `A sorting visualizer created to cement sorting algorithms learned
        during university classes. The main technologies used was HTML, CSS and Javascript.`,
        github_link: "https://github.com"
    },
    communication: {
        title: "A self stablizing communication network",
        description: `A self stabilizing communication network, the communication is made
        to be as anonymous as possible, this is achieved by using a similar approach as
        the onion routing protocol. The self-stabilization of the network is performed
        by actively detecting nodes that fail within the network and regularly constructing
        communication paths through non-failed nodes. Main technologies used are golang, rpc
        and tcp, more information can be found on the github page.`,
        github_link: "https://github.com"
    }
}

const Projects = ({ projectAnchor }) => {
    const [project, setProject] = useState(projects.architecture)

    return (
        <div ref={projectAnchor} id="projects-container">
            <div className='projects-sub-container' id="projects-text-container">
                <ProjectCard projectInfo={project} />
            </div>
            <div className='projects-sub-container' id="projects-links-container">
                <div className="projects-link-splitter"><a
                    onClick={() => setProject(projects.architecture)}
                    className={
                        project == projects.architecture ?
                            'projects-link-text project-link-text-active'
                            :
                            'projects-link-text'
                    }
                >Architecture analyzer</a>
                    <p className='project-link-label'>Machine Learning</p>
                </div>
                <div className="projects-link-splitter"><a
                    onClick={() => setProject(projects.network_identification)}
                    className={
                        project == projects.network_identification ?
                            'projects-link-text project-link-text-active'
                            :
                            'projects-link-text'
                    }>Network traffic identification</a> <p>Security</p></div>
                <div className="projects-link-splitter"><a
                    onClick={() => setProject(projects.sorting)}
                    className={
                        project == projects.sorting ?
                            'projects-link-text project-link-text-active'
                            :
                            'projects-link-text'
                    }>Sorting visualization</a> <p>Programming</p></div>
                <div className="projects-link-splitter"><a
                    onClick={() => setProject(projects.communication)}
                    className={
                        project == projects.communication ?
                            'projects-link-text project-link-text-active'
                            :
                            'projects-link-text'
                    }>Communication Network</a> <p>Distributed Systems</p></div>
            </div>
        </div>
    );
}

export default Projects;
