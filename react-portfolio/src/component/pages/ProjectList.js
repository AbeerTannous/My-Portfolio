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
      name: 'ThePetProject',
      live: 'https://jessvarghese.github.io/the_pet_project/',
      github:'https://github.com/JessVarghese/the_pet_project',
      description: '',
     screenshot: require('../../assets/images/the-pet-project.png') 
    },
    {
      name: 'Futureproject',
      live: '',
      github:'',
      description: '',
     screenshot:require ('../../assets/images/futureproject - Copy.jpg')
    },
   
  ]);



  return (
    
     <div id='div'  >
    <h2 style={{margin:"5%"}}>Portfolio</h2>
       <div class="container overflow-hidden" >
      
         <div class="row gy-5" >
         {projects.map((project, i) => (<section class="col-6"  >
            <div class="col-8">
             <div class="p-3 border "  >
            
                   
                   <div class="piccontainer" >                 
                   <img src={project.screenshot} 
                        alt={project.name}
                         key={project.name}
                          class="img-fluid" class="image" style={{width:"400%"}} ></img>
                       <div class="middle" >
                             <div class="text"><a style={{textDecoration:"none",color:"black"}} href={project.live}>{project.name}</a><a href={project.github}><SocialIcon url={project.github}/></a></div>
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
