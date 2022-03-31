// import React, { useState } from 'react';
// import '../../assets/style/projectStyle.css';
// import {SocialIcon} from 'react-social-icons';

// const ProjectList = () => {
 

//   const [projects] = useState([
//     {
//       name: 'Budget-Tracker',
//       live: 'https://pacific-coast-49689.herokuapp.com/',
//       github:'https://github.com/AbeerTannous/Budget-Tracker',
//       description:
//         'This is a Progrisive web application (PWA) for tracking Budget , where users can track their budget even when they dont have network access',
//         screenshot:require ('../../assets/images/Budget-Tracker.png')
//     },
//     {
//       name: 'Tasklead',
//       live: 'https://tasklead.herokuapp.com/',
//       github:'https://github.com/raealejandrino/Tasklead-repo',
//       description: 'Full-Stack project management application using Model View Controller semantics with Handlebars.js, Sequelize Object Relational Mapper, Bcrypt, Sass, and more.',
//       screenshot:require('../../assets/images/tasklead.png') 
//     },
//     {
//       name: 'MyPet',
//       live: 'https://jessvarghese.github.io/the_pet_project/',
//       github:'https://github.com/JessVarghese/the_pet_project',
//       description: 'MyPet is an application that allows a user to easily find a Dog or Cat to potentially adopt.',
//      screenshot: require('../../assets/images/the-pet-project.png') 
//     },
//     {
//       name: 'Book-Search',
//       live: 'https://fierce-caverns-88786.herokuapp.com/',
//       github:'https://github.com/AbeerTannous/Book-Saerch-Engine',
//       description: 'Google Books API search engine built in MERN Stack. users can sign up and login their account to save their favorite books.',
//      screenshot:require ('../../assets/images/book-search.png')
//     },
   
//   ]);



//   return (
    
//      <div id='div'  >
//     <h2 style={{margin:"5%"}}>Portfolio</h2>
//        <div class="container overflow-hidden" >
      
//          <div class="row gy-5" >
//          {projects.map((project, i) => (<section class="col-6"  >
//             <div class="col-8">
//              <div class="p-3 border ">
//                    <div class="piccontainer" >                 
//                    <img src={project.screenshot} 
//                         alt={project.name}
//                          key={project.name}
//                           class="img-fluid image" style={{width:"400%"}} ></img>
//                        <div class="middle" >
//                              <div class="text"><a style={{textDecoration:"none",color:"black",marginRight:"5%"}} href={project.live}>{project.name}</a><a href={project.github}><SocialIcon url={project.github}/></a></div>
//                         </div>
//                     </div>
//                     </div>
//           </div>
        
//        </section> ))}
//        </div>
//        </div>
//       </div> 
    
//   );
// };


// export default ProjectList;

import React, { useState } from 'react';
import '../../assets/style/projectStyle.css';
import {SocialIcon} from 'react-social-icons';

const ProjectList = () => {
 

  const [projects] = useState([
    {
      name: 'Buddget Tracker',
      live: 'https://pacific-coast-49689.herokuapp.com',
      github:'https://github.com/AbeerTannous/Budget-Tracker',
      description:
        'This is a Progrisive web application (PWA) for tracking Budget , where users can track their budget even when they dont have network access',
        screenshot:require ('../../assets/images/Budget-Tracker.png')
    },
    {
      name: 'Tasklead',
      live: 'https://tasklead.herokuapp.com/',
      github:'https://github.com/raealejandrino/Tasklead-repo',
      description: 'Full-Stack project management application using Model View Controller semantics with Handlebars.js, Sequelize Object Relational Mapper, Bcrypt, Sass, and more.',
      screenshot:require('../../assets/images/tasklead.png') 
    },
    {
      name: 'MyPet',
      live: 'https://jessvarghese.github.io/the_pet_project/',
      github:'https://github.com/JessVarghese/the_pet_project',
      description: 'MyPet is an application that allows a user to easily find a Dog or Cat to potentially adopt.',
     screenshot: require('../../assets/images/the-pet-project.png') 
    },
    {
      name: 'Book Search',
      live: 'https://fierce-caverns-88786.herokuapp.com/',
      github:'https://github.com/AbeerTannous/Book-Saerch-Engine',
      description: 'Google Books API search engine built in MERN Stack. users can sign up and login their account to save their favorite books.',
     screenshot:require ('../../assets/images/book-search.png')
    },
    {
      name: 'Social Network API',
      live: 'https://github.com/AbeerTannous/Social-Network-API',
      github:'https://github.com/AbeerTannous/Social-Network-API',
      description: 'An API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. This application uses Express, Node, MongoDB and Mongoose.',
     screenshot:require ('../../assets/images/hire-social-media-api-developers.jpg')
    },
    {
      name: 'Recipe Rendezvous',
      live: 'https://github.com/AbeerTannous/Recipe-Rendezvous',
      github:'https://github.com/AbeerTannous/Recipe-Rendezvous',
      description: 'Recipe API search engine built in MERN Stack. users can sign up and login their account to save their favorite recipes',
     screenshot:require ('../../assets/images/recipe.png')
    },
   
  ]);



  return (
    
     <div id='div'  >
    <h2 style={{margin:"5%"}}>Portfolio</h2>
       <div class="container overflow-hidden" >
      
         <div class="row gy-5" >
         {projects.map((project, i) => (<section class="col-6"  >
            <div class="col-8">
             <div class="p-3 border ">
                   <div class="piccontainer" >                 
                   <img src={project.screenshot} 
                        alt={project.name}
                         key={project.name}
                          class="img-fluid" className='image' style={{width:"400%"}} ></img>
                       <div class="middle" >
                             <div class="text"><a style={{textDecoration:"none",color:"black",marginRight:"5%"}} href={project.live}>{project.name}</a><a href={project.github}><SocialIcon url={project.github}/></a></div>
                        </div>
                        
                    </div>
                    {project.description}
                    </div>
          </div>
        
       </section> ))}
       </div>
       </div>
      </div> 
    
  );
};


export default ProjectList;

