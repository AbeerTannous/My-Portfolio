import React, { useState } from 'react';
import runbody from '../../assets/images/runbody.png';
import thepetproject from '../../assets/images/the-pet-project.png';

const ProjectList = () => {
 

  const [projects] = useState([
    {
      name: 'runbody',
      live: '',
      github:'',
      description:
        '',
        screenshot:''
    },
    {
      name: 'tasklead',
      live: '',
      github:'',
      description: '',
      screenshot:{runbody}
    },
    {
      name: 'the-pet-project',
      live: '',
      github:'',
      description: '',
     screenshot:{thepetproject}
    },
    {
      name: 'futureproject - Copy',
      live: '',
      github:'',
      description: '',
     screenshot:'/image/futureproject - Copy.png'
    },
   
  ]);



  return (
    <div>
      
      <div className="flex-row">
        {projects.map((project, i) => (<section>
          <h3>{project.name}</h3>
          <img
            src={project.screenshot}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.name}
          />
          <a href={project.live}>Live</a>
          <a href={project.github}>Github</a>
       </section> ))}
      </div>
    </div>
  );
};

export default ProjectList;
