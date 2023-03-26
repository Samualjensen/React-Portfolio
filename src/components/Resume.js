import resumePDF from '../assets/SamJensenResume.pdf'
import './Resume.css'

export default function Resume() {

    return (
        <div className="resume">
            <h1>Resume</h1>
            <a href={resumePDF} target="_blank" rel="noreferrer noopener"><button>View my Resume</button></a>

            <h2>My Skills</h2>
            <div className='list-cont'>
                <div className='skills-list'>
                    <ul>
                        <p><b>Front-end:</b></p>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
                <div className='skills-list'>
                    <ul>
                        <p><b>Back-end:</b></p>
                        <li>Node</li>
                        <li>APIs</li>
                        <li>Express</li>
                        <li>MySQLS</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>

        </div>
    );

}