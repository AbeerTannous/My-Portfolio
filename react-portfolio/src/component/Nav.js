import React from "react";


function Nav({ currentPage, handlePageChange }){
    return(
   <header id="nav"  style={{
    background:'#D9AE94'
    
  }} >
   
   <h1 id='about'>Hello I am Abeer!</h1>
  <ul className="nav justify-content-end">
  
  <li className="nav-item">
    <a style={{textDecoration:"none",color:"black",fontSize:"20px"}} className="nav-link" href="#about" onClick={()=>handlePageChange('About')} className={currentPage=== 'About'?'nave-link active':'nav-link'}>About Me </a>
  </li>
  <li className="nav-item">
    <a style={{textDecoration:"none",color:"black",fontSize:"20px"}} className="nav-link" href="#projectList" onClick={()=>handlePageChange('ProjectList')} className={currentPage=== 'ProjectList'?'nave-link active':'nav-link'}>Portfolio</a>
  </li>
  <li className="nav-item">
    <a style={{textDecoration:"none",color:"black",fontSize:"20px"}} className="nav-link" href="#contact" onClick={()=>handlePageChange('Contact')} className={currentPage=== 'Contact'?'nave-link active':'nav-link'}>Contact</a>
  </li>
  <li className="nav-item">
    <a style={{textDecoration:"none",color:"black",fontSize:"20px"}} className="nav-link " href="#resume" onClick={()=>handlePageChange('Resume')} className={currentPage=== 'Resume'?'nave-link active':'nav-link'}>Resume</a>
  </li>
</ul>
</header>
  
    );
   
}



export default Nav;
