import React from "react";
import gitPic from "../assets/github.png"
import './Portfolio.css'

export default function Portfolio() {

    return (
        <div>
            <h1 className="project-header">My Projects</h1>
            <div className="wrapper">


                <div className="project">
                    <div className="desc">
                        <h2>Movies2Watch</h2>
                        <p>A webpage designed to make a movie choosing experience easier.</p>
                        <p>Built with: HTML, CSS, Javascript. </p>
                    </div>
                    <a href='https://github.com/Samualjensen/Movies2Watch' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://bryanjeremysmith.github.io/Movies2Watch" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-movie"></figure>
                        </section>
                    </a>
                </div>

                <div className="project">
                    <div className="desc">
                        <h2>Road Quest</h2>
                        <p>This webpage allows users to create and share roadtrip routes so that other users can look at your route and suggest stoppping points along the way.</p>
                        <p>Built with: Handlebars, Javascript, Express, MySQL, Node, Sequelize, Pico CSS. </p>
                    </div>
                    <a href='https://github.com/Samualjensen/Road_Quest' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://limitless-sea-80342.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-quest"></figure>
                        </section>
                    </a>
                </div>

                <div className="project">
                    <div className="desc">
                        <h2>Sherpa Group Records</h2>
                        <p>This app provides a user-friendly interface where you can browse and stream our latest music releases, purchase merchandise securely with Stripe, and keep up to date with our upcoming concerts and events.</p>
                        <p>Built with: React, GraphQL, Express, Node.js, MUI, Stripe, MongoDB, and the Spotify API. </p>
                    </div>
                    <a href='https://github.com/imjustSahen/Software-Sherpas' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://sherpa-studios.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure" id="figure-sherpa"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <div className="desc">
                    <h2>JATE: Just Another Text Editor</h2>
                    <p>Text Editor is a single page web application that meets the PWA criteria, it is able to store persistant data as well as run offline.</p>
                    <p>Built with: Node, Express, Webpack. </p>
                </div>
                <a href='https://github.com/Samualjensen/Text-Editor' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon' />
                </a>
                <a href="https://cryptic-reef-18857.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure" id="figure-jate"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <div className="desc">
                    <h2>Note Taker</h2>
                    <p>An application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.</p>
                    <p>Built with: Javascript, Express. </p>
                </div>
                <a href='https://github.com/Samualjensen/Note-Taker' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon' />
                </a>
                <a href="https://morning-garden-79320.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                    <section>
                        <figure className="figure" id="figure-note"></figure>
                    </section>
                </a>
            </div>

            <div className="project">
                <div className="desc">
                    <h2>Employee Tracker</h2>
                    <p>A command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p>
                    <p>Built with: Javascript, Express, Node, MySQL.</p>
                </div>
                <a href='https://github.com/Samualjensen/Employee-Tracker' target="_blank" rel="noreferrer noopener">
                    <img className='gitPic' src={gitPic} alt='GitHub icon' target="_blank" rel="noreferrer noopener" />
                </a>
                <section>
                    <figure className="figure" id="figure-employee"></figure>
                </section>
            </div>

        </div>
        </div >

    )

}