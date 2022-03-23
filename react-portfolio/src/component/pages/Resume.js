import React from "react";





function Resume(){
    return(
        <section style={{margin:"5%"}}>
         <h2>Resume</h2>
         <h4>Download me <a href="https://docs.google.com/document/d/17ksYnMl05ODjbLmrre4tTrCT4slampNemTOF28qxnSo/edit?usp=sharing">Resume</a></h4>
         <h3>Front-End Proficiencies</h3>
         <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li> Frameworks and Libraries</li>
          <li>Responsive Design</li>
          <li>React</li> 
         </ul>
         <h3>Back-End Proficiencies</h3>
         <ul>
          <li>Node</li>
          <li>Express</li>
          <li>API's</li>
          <li>MySql, sequalize</li>
          <li>MongoDB, Mangoose</li>
          <li>REST</li>
          <li>GraphQL</li> 
         </ul>
        </section>
    )
    
    }


    export default Resume;