import React from "react";
import profilePic from "../assets/mee.jpg"
import './AboutMe.css'

export default function AboutMe() {

    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={profilePic} alt='profile pic' className='profilePic' />
            <div id="about-text"></div>
        </div >
    );

}