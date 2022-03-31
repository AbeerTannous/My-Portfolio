import React from 'react';
import myPicture from "../../assets/images/me1.jpg"

function About(){
    return(
        <section className='my-5'>
            
            <div class="container-sm"  style={{margin:"10%"}} >
            <h2 >About Me</h2>
                 <img src={myPicture} className='my-2' style={{width:"7%", borderRadius:"50%" }} alt='My Picture'></img>
            <p style={{fontSize:"20px",fontFamily:"-moz-initial",margin:"1%",marginRight:"10%"}} >
            Full Stack Web Developer with passionate to organize and manage time and resources ,
leveraging my high standards in providing excellent customer experience backround integrated
with strong knowledge of software production life cycle due to earned software engineering
bachelor's degree and hands on latest web development technologies like JavaScript, GraphQl,
React.js, as I recently earned a certificate in Full Stack Web Development ,with each project I
worked on with a team I played an active role and aimed to develop an easy usable and simple
user interface with fully functional application , I am excited to leverage my skills and learn more
in the future job sight .
  
</p></div>

        </section>
    );
}



export default About;