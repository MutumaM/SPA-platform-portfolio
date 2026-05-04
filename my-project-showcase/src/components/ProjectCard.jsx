import React from 'react';
const ProjectCard = ({title, description}) => {
        return(
            <div className='project-card'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        );
    }
    

export default ProjectCard