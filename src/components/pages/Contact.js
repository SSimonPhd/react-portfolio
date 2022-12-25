import '../../styles/Contact.scss'

import { useState } from "react"
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
    // SET VARIABLES FOR FIRST AND LAST NAME WITH USESTATE BEGINNING WITH EMPTY STRING FOR FORM
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');


    // VALIDATE EMAIL ADDRESS HERE WITH HELPERIN UTILS
    const [errormessage, setErrorMessage] = useState('');

    // SET VARIABLE TO HANDLE CHANGES ON INPUT FORM WITH USESTATE
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'username') {
            setUserName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else if (inputType === 'subject') {
            setSubject(inputValue)
        } else if (inputType === 'message')
            setMessage(inputValue)
    };
    // SET VARIABLE TO HANDLE FORM SUBMISSIONS
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!userName) {
            setErrorMessage('Name is required')
            return;
        }
        if (!validateEmail(email)) {
            setErrorMessage('Email not valid.  Please try again')
            return;
        }

        if(!message) {
            setErrorMessage('Message needed')
            return;
        }

        if(!subject) {
            setErrorMessage('Please enter a subject')
            return;
        }
        
        if(userName && validateEmail(email) && message && subject) {
            launchEmail();
        }
        // SETS EMPTY FIELDS FOR OUR FORM AND ERROR msessage AFTER EMAIL VALIDATOR ACCEPTS IT
        setUserName('');
        setEmail('');
        setMessage('')
        setSubject('');
        setErrorMessage('');
    };

    const launchEmail = () => {
        console.log(userName, subject, message);
        window.open(
          `mailto:simon_phd@proton.me?subject=${subject}&&body=${message}`
        );
        return false;
      };
  return (
    <div>
        <div className='contact-head'>
            <p className="contact-header">Contact</p>
        <h4>Email me @<a href="mailto: simon_phd@proton.me">simon_phd@proton.me</a></h4>
        <h4 className='or'> or</h4>
        <h4>Contact me with any questions:</h4></div>
        <form className="form">
            <label className="label">Name:</label>
            <input className='input-field'
                value={userName} 
                name="username"
                onChange={handleInputChange}
                type="text"
                placeholder=""
                /><br></br>
            <label>Email:</label>
            <input className='input-field'
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder=""
            /><br></br>
            <label>Subject:</label>
            <input className='input-field'
                value={subject}
                name="subject"
                onChange={handleInputChange}
                type="text"
                placeholder=""
            /><br></br>
             <label>Message:</label>
            <input className='message-field'
                value={message}
                name="message"
                onChange={handleInputChange}
                type="text"
                placeholder=""
            /><br></br>
            <button className='button' type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        
        {errormessage && (
            <div>
            <p className="error-text">{errormessage}</p>
            </div>
        )}
    </div>
  );
}
export default Contact
