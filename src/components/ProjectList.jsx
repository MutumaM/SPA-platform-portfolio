import React from 'react';
import ProjectCard from "./ProjectCard";

const ProjectList =({projects}) => {

    return(
            <div className='project-list'>
                {projects.map((project) => {
                    return(
                        <ProjectCard 
                            title = {project.title}
                            description = {project.description}
                            key = {project.id}
                        />
                    );
                })}
            </div>
        );
    }
    


export default ProjectList