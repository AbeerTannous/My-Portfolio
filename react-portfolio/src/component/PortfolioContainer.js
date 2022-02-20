import React,{useState} from 'react';
import Nav from './Nav';
import About from './pages/About'
import Contact from './pages/Contact';
import ProjectList from './pages/ProjectList';
import Resume from './pages/Resume';
import {SocialIcon} from 'react-social-icons';


function PortfolioContainer(){
    const [currentPage,setCurrentPage]=useState('About');
    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        if (currentPage === 'ProjectList') {
          return <ProjectList />;
        }
        return <Contact />;
      };

const handlePageChange = (page) => setCurrentPage(page);
return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
     <footer  style={{background:'#FFCB69', marginTop:"30%"}} >
    
     <SocialIcon url="https://github.com/AbeerTannous" style={{marginLeft:"45%"}}/>
     <SocialIcon url="https://slack.com/"/>

     </footer> 
    </div>
  );

    }


    export default PortfolioContainer;