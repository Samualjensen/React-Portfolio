import React from "react";
import profilePic from "../assets/mee.jpg"
import './AboutMe.css'

export default function AboutMe() {

    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={profilePic} alt='profile pic' className='profilePic' />
            <div id="about-text">Hi, my name is Sam and I'm a full stack web development student. I'm passionate about creating clean, efficient, and user-friendly web applications that solve real-world problems.

                Currently, I'm learning the latest web development technologies and frameworks, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. I'm excited to use my skills to build dynamic web applications that engage users and improve their online experience.

                When I'm not coding, I love to explore new technologies and read about the latest trends in web development. I'm always looking for ways to improve my skills and stay up-to-date with the ever-evolving world of web development.

                Thank you for visiting my portfolio, and I hope you enjoy my projects!</div>
        </div >
    );

}