import React from 'react';
import myPicture from "../../assets/images/me1.jpg"

function About(){
    return(
        <section className='my-5'>
            <div class="container-sm"> <img src={myPicture} className='my-2' style={{width:"5%"}} alt='My Picture'></img></div>
            <div class="container-sm"><p >
I am a positive, hardworking and likable personality. Aptitude to get up to speed quickly on the job,

I have a bachelor's degree in software engineering and good knowledge in Web Development technologies ,

I love to read and learn!.
  
</p></div>

        

            

        </section>
    );
}



export default About;