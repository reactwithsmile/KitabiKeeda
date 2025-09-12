import React, { useRef } from "react";
import "../css/join.css";
import Email from "emailjs-com";

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        Email.sendForm('service_1otq72q', 'template_wqold07', form.current, 'IjWEqlpP2XoR6DFH2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className="join" id="join">
            
            <div className="j-left">
                <hr />
                <div>
                    <span>Ready to </span>
                    <span>level up</span>
                </div>
                <div>
                    <span>your mind </span>
                    <span>with us?</span>
                </div>
            </div>
            <div className="j-right">
                <form ref={form} className="email_btn" onSubmit={sendEmail}>
                    <label htmlFor="ename">Name :</label>
                    <input type="text" name="user_name" placeholder="enter your name" />
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="user_email" placeholder="enter your email id" />
                    <button className="btn btn-j">Join Now</button>
                </form>
            </div>
            
        </div>
        
    )}
    export default Join;