import React from 'react';
import ProjectCard from "./ProjectCard";

const ProjectList = ({projects, searchText}) => {
    return(
        <div className='project-list'>
            {projects
                .filter((project) => project.title.toLowerCase().includes(searchText.toLowerCase()))
                .map((project) => {
                    return(
                        <ProjectCard 
                            title={project.title}
                            description={project.description}
                            key={project.id}
                        />
                    );
                })
            }
        </div>
    );
}

export default ProjectList