import React from 'react';
import Project from './Project';


const ProjectSection = ({projectsData}) => {
  return (
    <div className="project-section">
      {projectsData.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
