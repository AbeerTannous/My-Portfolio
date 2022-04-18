import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';



function Contact(){
 
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
      
      return (
        
     
        <div style={{margin:"5%",width:"50%"}}>
          <h2>Contact Me</h2>
          <div >
        <h5 style={{marginLeft:"1%",marginTop:"2%",width:"50%"}}>E: abeer.tannous23@gmail.com</h5>
        <h5 style={{marginLeft:"1%",marginBottom:"2%",width:"50%"}}>P: (203)832-2389</h5>
        
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          class="form-control"
          id="exampleFormControlInput1" 
          placeholder="name"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email" 
          class="form-control"
          id="exampleFormControlInput1" 
          placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea
        value={message}
        name="message"
        onChange={handleInputChange}
         class="form-control" 
         id="exampleFormControlTextarea1"
          rows="3"></textarea>
         </div>
         <button style={{color:"white",background:"black",padding:"5px",width:"150px",borderRadius:"5px"}} type="button" onClick={handleFormSubmit}>Submit</button>

         {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
     </div>
     </div>
       );


    }









export default Contact;