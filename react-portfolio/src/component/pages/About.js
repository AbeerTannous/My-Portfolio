import React from 'react';
import myPicture from "../../assets/images/me1.jpg"

function About(){
    return(
        <section className='my-5'>
            
            <div class="container-sm"  style={{margin:"10%"}} >
            <h2 >About Me</h2>
                 <img src={myPicture} className='my-2' style={{width:"7%", borderRadius:"50%" }} alt='My Picture'></img>
            <p style={{fontSize:"20px",fontFamily:"-moz-initial",margin:"1%",marginRight:"10%"}} >
I am a positive, hardworking and likable personality. Aptitude to get up to speed quickly on the job,

I have a bachelor's degree in software engineering and good knowledge in Web Development technologies ,

I love to read and learn!.
  
</p></div>

        

            

        </section>
    );
}



export default About;