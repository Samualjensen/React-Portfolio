import './NavBar.css'
import { NavLink } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav>
            <div>
                <h1>Sam Jensen</h1>
            </div>
            <div>
                <NavLink to="/about" className="nav-link">
                    <b>About Me</b>
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    <b>Contact</b>
                </NavLink>
                <NavLink to="/portfolio" className="nav-link">
                    <b>Portfolio</b>
                </NavLink>
                <NavLink to="/resume" className="nav-link">
                    <b>Resume</b>
                </NavLink>
            </div>
        </nav>
    )
};