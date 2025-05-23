import "../index.css";
import { Link } from 'react-router-dom';
import { FaGithub ,  FaLinkedin } from "react-icons/fa";

export default function navbar(){
    return(
        <>
        <header>
            <div className="navbar-container">
                <div className="name">
                    <Link to="/"><h2>Rajia Rani</h2></Link>
                </div>
                <ul className="nav-items">
                    <li className="nav-link"><Link to="/about">About</Link></li>
                    <li className="nav-link"><Link to="/skills">Skills</Link></li>
                    <li className="nav-link"><Link to="/projects">Projects</Link></li>
                    <li className="nav-link"><Link to="/education">Education</Link></li>
                    <li className="nav-link"><Link to="/contact">Contact</Link></li>
                    <li className="nav-link"><Link to="/experience">Experience</Link></li>
                    <li className="nav-link"><a href="https://github.com/RajiaRani"><FaGithub /></a></li>
                    <li className="nav-link"><a href=" https://www.linkedin.com/in/rajia-rani-935b71187/"><FaLinkedin /></a></li>
                </ul>
            </div>
        </header>
        </>
    )
}