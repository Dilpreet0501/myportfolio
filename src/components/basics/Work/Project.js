import React from 'react';


const Project = ({ image, link }) => {
  return (
    <>
    <div className="project-card" style={{backgroundImage:`url(${image})`}}>
      
    <a className="project-link" href={link}>
            View Project</a>
       </div>
      
   
    </>
  );
};

export default Project;
