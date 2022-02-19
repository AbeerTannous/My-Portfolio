import React,{useState} from 'react';
import Nav from './Nav';
import About from './pages/About'
import Contact from './pages/Contact';
//import Project from './pages/Project';
import ProjectList from './pages/ProjectList';
import Resume from './pages/Resume';

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
     <footer><h6>Copyright &copy; 2022, Abeer Tannous</h6></footer> 
    </div>
  );

    }


    export default PortfolioContainer;