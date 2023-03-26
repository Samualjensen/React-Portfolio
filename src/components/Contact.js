import React, { useState } from "react";
import { validateEmail } from "../helpers/helpers";
import './Contact.css'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setuserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
            setErrorMessage('');

            if (!validateEmail(email)) {
                setErrorMessage('Email is invalid');
                return;
            }
        } else if (inputType === 'userName') {
            setuserName(inputValue)
        } else {
            setMessage(inputValue)
        }

    };

    return (
        <>
            <div className="contact">
                <h1>Contact Me</h1>
                <p>Email me at <a href="mailto:samual.jensen@gmail.com">samual.jensen@gmail.com</a> or use the contact form below.
                </p>

                <form target="_blank" action="https://formsubmit.co/a27fb8d2d93ba67f6963dbdbc848c5b1" method="POST" >
                    <div>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            value={message}
                            name="message"
                            type="text"
                            placeholder="Message"
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        {/* <button type="submit" onClick={handleFormSubmit}>Submit</button> */}
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </>
    );
}