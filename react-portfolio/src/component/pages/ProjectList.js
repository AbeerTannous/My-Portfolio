import React, { useState } from 'react';
import '../../assets/style/projectStyle.css';
import {SocialIcon} from 'react-social-icons';

const ProjectList = () => {
 

  const [projects] = useState([
    {
      name: 'Runbody',
      live: 'https://abeertannous.github.io/run-buddy/',
      github:'https://github.com/AbeerTannous/run-buddy',
      description:
        '',
        screenshot:require ('../../assets/images/runbody.png')
    },
    {
      name: 'Tasklead',
      live: 'https://tasklead.herokuapp.com/',
      github:'https://github.com/raealejandrino/Tasklead-repo',
      description: '',
      screenshot:require('../../assets/images/tasklead.png') 
    },
    {
      name: 'The-Pet-Project',
      live: 'https://jessvarghese.github.io/the_pet_project/',
      github:'https://github.com/JessVarghese/the_pet_project',
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
    
     <div id='div'>
    
       <div class="container overflow-hidden">
      
         <div class="row gy-5">
         {projects.map((project, i) => (<section>
            <div class="col-6" id='row'>
             <div class="p-3 border bg-light">
            
                   <h3>{project.name}</h3>
                   <div class="piccontainer">                 
                   <img src={project.screenshot} 
                        alt={project.name}
                         key={project.name}
                          class="img-fluid" class="image" style={{width:"400%"}} ></img>
                       <div class="middle">
                             <div class="text"><a href={project.live}>live</a><a href={project.github}><SocialIcon url={project.github}/></a></div>
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
