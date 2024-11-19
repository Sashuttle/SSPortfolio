import { Link } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Navigation.css';

{/* Home page is loading but the navigation is below the h1 & p. It should be to the right, did not change anything in Navigation.css & app.css (remained the same when the home page was located in app.jsx) */}

function Home () {
    return (
        <div>
            <h1 className="sam">Samantha<br></br>Shuttleworth</h1>
            <p className="dev">Full Stack Web Developer</p>
            <div className="homeNav">
                <nav>
                    <ul>
                        {/*<li>
                            <Link to="/home">Home</Link>
                        </li>*/}
                        <li>
                            <Link to="/about">About Me</Link>
                        </li>
                        <li>
                            <Link to="/education">Education</Link>
                        </li>
                        <li>
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        
    )
}

export default Home;