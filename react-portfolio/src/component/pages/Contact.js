import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';



function Contact(){
    const [name, setName]= useState('')
    const [email, setEmail] = useState('');
    const [message,setMessage]=useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'name') {
          setName(inputValue);
        } else {
          setMessage(inputValue);
        }
    };
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) ) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        
    
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setMessage('');
        setEmail('');
      };
      return (
        // <div>
        //   <p>Hello {name}</p>
        //   <form className="form">
        //     <input
        //       value={email}
        //       name="email"
        //       onChange={handleInputChange}
        //       type="email"
        //       placeholder="email"
        //     />
        //     <input
        //       value={name}
        //       name="name"
        //       onChange={handleInputChange}
        //       type="text"
        //       placeholder="name"
        //     />
        //     <input
        //       value={message}
        //       name="message"
        //       onChange={handleInputChange}
        //       type="text"
        //       placeholder="message"
        //     />
        //     <button type="button" onClick={handleFormSubmit}>Submit</button>
        //   </form>
         
        //</div>
        <div style={{margin:"5%",width:"50%"}}>
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
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
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
       );


    }









export default Contact;