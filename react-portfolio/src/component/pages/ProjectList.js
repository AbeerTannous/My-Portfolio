import React, { useState } from 'react';
import '../../assets/style/pagesStyle.css'

const ProjectList = () => {
 

  const [projects] = useState([
    {
      name: 'Runbody',
      live: '',
      github:'',
      description:
        '',
        screenshot:require ('../../assets/images/runbody.png')
    },
    {
      name: 'Tasklead',
      live: '',
      github:'',
      description: '',
      screenshot:require('../../assets/images/tasklead.png') 
    },
    {
      name: 'The-Pet-Project',
      live: '',
      github:'',
      description: '',
     screenshot: require('../../assets/images/the-pet-project.png') 
    },
    {
      name: 'Futureproject - Copy',
      live: '',
      github:'',
      description: '',
     screenshot:require ('../../assets/images/futureproject - Copy.jpg')
    },
   
  ]);



  return (
    // <div>
      
    //   <div className="flex-row">
    //     {projects.map((project, i) => (<section>
    //       <h3>{project.name}</h3>
    //       <img
    //         src={project.screenshot}
    //         alt={project.name}
    //         className="img-thumbnail mx-1"
    //         key={project.name}
    //       />
    //       <a href={project.live}>Live</a>
    //       <a href={project.github}>Github</a>
    //    </section> ))}
    //   </div>
    // </div>
    <div>
    
      <div class="container overflow-hidden">
      
        <div class="row gy-5">
        {projects.map((project, i) => (<section>
           <div class="col-6">
            <div class="p-3 border bg-light">
            
                    <h3>{project.name}</h3>
                  <div class="piccontainer">                 
                  <img src={project.screenshot} 
                       alt={project.name}
                        key={project.name}
                         class="img-fluid" class="image" style={{width:"100%"}} ></img>
                      <div class="middle">
                            <div class="text"><a href={project.live}>Live</a><a href={project.github}>Github</a></div>
                       </div>
                   </div>
                   </div>
         </div>
        
      </section> ))}
      </div>
      </div>
      </div> 
  );
};

export default ProjectList;
